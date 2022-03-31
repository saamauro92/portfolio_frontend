import ContactSection from "components/ContactSection";
import HeroSection from "components/HeroSection";
import { GetStaticProps } from "next/types";

import ProjectSection from "../components/ProjectSection";
import Layout from "../components/_App/Layout";
import { fetchAPI } from "../lib/api";

const Contact = (): JSX.Element => {
  return (
    <Layout title="Contact" description="Send message to mauro saavedra">
      <HeroSection title="Contact" subtitle="Send me message" image={false} />

      <ContactSection />
    </Layout>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const landingRes = await fetchAPI("/landing", { populate: "*" });

  return {
    props: {
      landing: landingRes?.data,
    },
    revalidate: 1,
  };
};
