import { fetchAPI } from "lib/api";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ProjectPage, singleProjectAttributes } from "types/types";
import { ParsedUrlQuery } from "querystring";
import Layout from "components/_App/Layout";
import ProjectPageSection from "components/ProjectPageSection";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  [key: string]: object;
  project: singleProjectAttributes;
};

const ProjectPage = ({ project }: Props): JSX.Element => {
  return (
    <>
      <Layout>
        <ProjectPageSection
          title={project.attributes.name}
          image={project.attributes.image}
          description={project.attributes.description}
          long_description={project.attributes.long_description}
          url={project.attributes.url}
          source={project.attributes.source}
        />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { slug } = context.params as IParams;

  const projects = await fetchAPI("/projects", {
    filters: {
      slug: slug,
    },
    populate: "*",
  });

  return {
    props: {
      project: projects.data[0],
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await fetchAPI("/projects", { field: ["slug"] });

  return {
    paths: projects.data.map((project: singleProjectAttributes) => ({
      params: {
        slug: project.attributes.slug,
      },
    })),
    fallback: false,
  };
};

export default ProjectPage;
