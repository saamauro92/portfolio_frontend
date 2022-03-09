import HeroSection from "components/HeroSection";
import { GetStaticProps } from "next/types";
import { ProjectPage, singleProjectAttributes } from "types/types";
import ProjectSection from "../components/ProjectSection";
import Layout from "../components/_App/Layout";
import { fetchAPI } from "../lib/api";

interface Props {
  hero: ProjectPage;
  projects: singleProjectAttributes[];
}

const Projects = ({ hero, projects }: Props): JSX.Element => {
  return (
    <Layout>
      <HeroSection
        title={hero.attributes.title}
        subtitle={hero.attributes.subtitle}
        image={false}
      />
      <ProjectSection projects={projects} />
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const projectsHero = await fetchAPI("/projecthero", { populate: "*" });
  const projectsRes = await fetchAPI("/projects", { populate: "*" });

  return {
    props: {
      hero: projectsHero?.data,
      projects: projectsRes?.data,
    },
    revalidate: 1,
  };
};
