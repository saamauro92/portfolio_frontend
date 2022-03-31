import Head from "next/head";
import HeroSection from "../components/HeroSection";
import { fetchAPI } from "../lib/api";

import Layout from "../components/_App/Layout";
import AboutMe from "../components/AboutMe";

import { GetStaticProps } from "next/types";
import { LandingData } from "../types/types";

interface Props {
  landing: LandingData;
}

const HomePage = ({ landing }: Props): JSX.Element => {
  return (
    <Layout title="Home" description="Personal website Mauro Saavedra">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection
        title={landing.attributes.title}
        subtitle={landing.attributes.subtitle}
        image={true}
      />

      <AboutMe data={landing.attributes.about} />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const landingRes = await fetchAPI("/landing", { populate: "*" });

  return {
    props: {
      landing: landingRes?.data,
    },
    revalidate: 1,
  };
};
