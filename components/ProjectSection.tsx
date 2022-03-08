import { Columns, Container, Section } from "react-bulma-components";

const { Column } = Columns;

const ProjectSection = (): JSX.Element => {
  return (
    <>
      <Section>
        <Container>
          <Columns className="has-text-white">
            <Column>
              <h2>project</h2>
            </Column>
            <Column>
              <h2>project</h2>
            </Column>
            <Column>
              <h2>project</h2>
            </Column>
            <Column>
              <h2>project</h2>
            </Column>
            <Column>
              <h2>project</h2>
            </Column>
          </Columns>
        </Container>
      </Section>
    </>
  );
};

export default ProjectSection;
