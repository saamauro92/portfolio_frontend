/* eslint-disable @next/next/no-img-element */
import {
  Block,
  Button,
  Columns,
  Container,
  Content,
  Heading,
  Hero,
  Level,
  Section,
} from "react-bulma-components";
import ReactMarkdown from "react-markdown";

const { Column } = Columns;

interface Props {
  title: string;
  image?: string;
  description?: string;
  url: string;
  source: string;
  long_description?: string;
}

const ProjectPageSection = ({
  title,
  image,
  description = "",
  url,
  source,
  long_description = "",
}: Props): JSX.Element => {
  return (
    <>
      <Section className="is-medium">
        <Container className="has-text-light has-text-weight-light is-max-desktop ">
          <Heading className="has-text-secondary has-text-centered is-size-5-mobile">
            {" "}
            {title}{" "}
          </Heading>

          <Content p={5}>
            <ReactMarkdown>{description}</ReactMarkdown>
            {image && (
              <>
                <img src={image} alt="" className="mt-5" />
                <p className="has-text-centered mb-6 ">The Homepage</p>
              </>
            )}
            <ReactMarkdown>{long_description}</ReactMarkdown>
          </Content>

          <Level>
            <Level.Item>
              <a
                href={url}
                target="_blank"
                className="has-text-centered"
                rel="noreferrer"
              >
                <Button className="is-success is-outlined"> View </Button>
              </a>
            </Level.Item>
            <Level.Item>
              {source === "no" ? (
                <p className="has-text-centered ">
                  Source code (not available)
                </p>
              ) : (
                <a
                  href={source}
                  target="_blank"
                  className="has-text-centered has-text-secondry is-underlined"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              )}
            </Level.Item>
          </Level>
        </Container>
      </Section>
    </>
  );
};

export default ProjectPageSection;
