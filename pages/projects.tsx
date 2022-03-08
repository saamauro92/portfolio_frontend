import { GetStaticProps } from "next/types";
import { Container } from "react-bulma-components";
import PageTitles from "../components/PageTitles";
import ProjectSection from "../components/ProjectSection";
import Layout from "../components/_App/Layout";
import { fetchAPI } from "../lib/api";

const Projects = (): JSX.Element => {
  return (
    <Layout>
      <Container mb={6}>
        <Container>
          <PageTitles title="Projects" subtitle="Some text" />
          <ProjectSection />
        </Container>
      </Container>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const landingRes = await fetchAPI("/landing", { populate: "*" });

  return {
    props: {
      landing: landingRes?.data,
    },
    revalidate: 1,
  };
};
