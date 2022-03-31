import SocialMedia from "components/SocialMedia";
import { Section } from "react-bulma-components";

const FooterSection = (): JSX.Element => {
  return (
    <>
      <Section paddingless marginless p={3}>
        <footer className="has-text-centered">
          <SocialMedia />

          <p className="has-text-centered has-text-white has-text-weight-light mt-4">
            Site written using the ReactJS framework NextJS with Typescript,
            Bulma CSS and Strapi as CMS.
            <a
              className="has-text-secondary is-underlined"
              href="https://github.com/saamauro92/portfolio_frontend"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </p>
        </footer>
      </Section>
    </>
  );
};

export default FooterSection;
