import { Section } from "react-bulma-components";

const FooterSection = (): JSX.Element => {
  return (
    <>
      <Section p={6}>
        <footer>
          <p className="has-text-centered has-text-white has-text-weight-light">
            Written using the ReactJS framework NextJS with Typescript, Bulma
            Css and Strapi as CMS. See Code.
          </p>
        </footer>
      </Section>
    </>
  );
};

export default FooterSection;
