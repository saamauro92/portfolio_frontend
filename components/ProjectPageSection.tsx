/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Columns,
  Content,
  Heading,
  Hero,
  Level,
} from "react-bulma-components";
import ReactMarkdown from "react-markdown";

const { Column } = Columns;

interface Props {
  title: string;
  image?: string;
  description: string;
  url: string;
  source: string;
}

const ProjectPageSection = ({
  title,
  image,
  description = "",
  url,
  source,
}: Props): JSX.Element => {
  return (
    <>
      <Hero mt={6}>
        <Columns>
          <Columns.Column
            mt={6}
            offset={3}
            size={6}
            className="has-text-light has-text-weight-light"
          >
            <Heading className="has-text-secondary has-text-centered is-size-5-mobile">
              {" "}
              {title}{" "}
            </Heading>

            <Content m={6}>
              {image && <img src={image} alt="" />}
              <ReactMarkdown>{description}</ReactMarkdown>
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
              <Level.Item m={6}>
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
          </Columns.Column>
        </Columns>
      </Hero>
    </>
  );
};

export default ProjectPageSection;
