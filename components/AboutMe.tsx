import { Columns, Heading, Section } from "react-bulma-components";

interface Props {
  data: string;
}

const AboutMe = ({ data }: Props): JSX.Element => {
  return (
    <>
      <Section className="has-text-white is-small">
        <Columns mt={6}>
          <Columns.Column size={8}>
            <Heading className="has-text-secondary"> About</Heading>
            <p className="has-text-weight-light">{data}</p>
          </Columns.Column>
        </Columns>
      </Section>
    </>
  );
};

export default AboutMe;
