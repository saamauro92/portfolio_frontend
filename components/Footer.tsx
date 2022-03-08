import { Container } from "react-bulma-components";

const FooterSection = (): JSX.Element => {
  return (
    <>
      <Container p={6}>
        <footer>
          <p></p>
          <p className="has-text-centered has-text-white has-text-weight-light">
            Written using the ReactJS framework NextJS with Typescript, Bulma
            Css and Strapi as CMS. See Code.
          </p>
        </footer>
      </Container>
    </>
  );
};

export default FooterSection;
