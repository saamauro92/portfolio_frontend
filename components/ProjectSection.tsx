/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Block,
  Button,
  Columns,
  Heading,
  Level,
  Section,
} from "react-bulma-components";
import { singleProjectAttributes } from "types/types";
const { Column } = Columns;

interface Props {
  projects: singleProjectAttributes[];
}

const ProjectSection = ({ projects }: Props): JSX.Element => {
  return (
    <>
      <Section mt={6}>
        {projects.map((project, i) => (
          <Columns key={i} mt={6} mb={6}>
            <Column size={6}>
              <Heading subtitle className="has-text-white">
                {project.attributes.name}
              </Heading>

              <p className="has-text-white has-text-weight-light mb-5">
                {project.attributes.description}
              </p>

              <Link href={`/portfolio/${project.attributes.slug}`} passHref>
                <a className="has-text-secondary is-underlined"> Read more </a>
              </Link>
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
