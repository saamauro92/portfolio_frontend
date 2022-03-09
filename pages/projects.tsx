import HeroSection from "components/HeroSection";
import { GetStaticProps } from "next/types";
import { Block, Section } from "react-bulma-components";
import ProjectSection from "../components/ProjectSection";
import Layout from "../components/_App/Layout";
import { fetchAPI } from "../lib/api";

const Projects = (): JSX.Element => {
  return (
    <Layout>
      <HeroSection
        title="Projects"
        subtitle="A selection of projects I've worked on."
        image={false}
      />

      <Section className="" mt={6}>
        <ProjectSection />
      </Section>
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
