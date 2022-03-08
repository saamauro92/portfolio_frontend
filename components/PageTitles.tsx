import { Heading } from "react-bulma-components";

const PageTitles = ({ title, subtitle = "" }): JSX.Element => {
  return (
    <>
      <Heading
        mt={6}
        pt={6}
        className="has-text-secondary  has-text-centered  "
      >
        {" "}
        {title}
      </Heading>
      <p className="has-text-white  has-text-centered  "> {subtitle}</p>
    </>
  );
};

export default PageTitles;
