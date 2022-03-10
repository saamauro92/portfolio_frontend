/* eslint-disable @next/next/no-img-element */
import { Columns, Heading, Section } from "react-bulma-components";
import { singleProjectAttributes } from "types/types";
const { Column } = Columns;

interface Props {
  projects: singleProjectAttributes[];
}

const ProjectSection = ({ projects }: Props): JSX.Element => {
  return (
    <>
      <Section mt={6} mb={6}>
        {projects.map((project, i) => (
          <Columns key={i} mt={6} mb={6}>
            <Column size={4}>
              <Heading subtitle className="has-text-white">
                {" "}
                {project.attributes.name}
              </Heading>
              <p className="has-text-white has-text-weight-light">
                {" "}
                {project.attributes.description}
              </p>
            </Column>

            <Column size={4}>
              <img src={project.attributes.image} alt="" />
            </Column>
          </Columns>
        ))}
      </Section>
    </>
  );
};

export default ProjectSection;
