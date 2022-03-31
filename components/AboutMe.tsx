import { Columns, Heading, Section } from "react-bulma-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface Props {
  data: string;
}

const AboutMe = ({ data }: Props): JSX.Element => {
  return (
    <>
      <Section className="has-text-white is-small" mb={6}>
        <Columns mb={6}>
          <Columns.Column size={8}>
            <Heading className="has-text-secondary"> About</Heading>
            <p className="has-text-weight-light">
              <ReactMarkdown>{data}</ReactMarkdown>
            </p>
          </Columns.Column>
        </Columns>
      </Section>
    </>
  );
};

export default AboutMe;
