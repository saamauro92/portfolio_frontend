import { Container } from "react-bulma-components";

const FooterSection = (): JSX.Element => {
  return (
    <>
      <Container p={6}>
        <footer>
          <p></p>
          <p className="has-text-centered has-text-white">
            It is written using the React.js framework Next.js with Strapi CMS
            and React Bulma Components.
          </p>
        </footer>
      </Container>
    </>
  );
};

export default FooterSection;
