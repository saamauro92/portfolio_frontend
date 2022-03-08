/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button, Columns, Container, Heading, Hero, Section } from "react-bulma-components";

const { Column } = Columns;

const ProjectSection = ({ data }) => {


    return <>


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
}

export default ProjectSection;
