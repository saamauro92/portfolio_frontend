/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button, Columns, Container, Heading, Hero, Section } from "react-bulma-components";

const { Column } = Columns;

const HeroSection = ({ data }) => {


    return <>

        <Hero>
            <Section>

                <Container>
                    <Columns centered={true}>

                        <Column className="" desktop={{ size: 4 }} mt={6} pt={6} >
                            <Heading mt={6} pt={6} className="has-text-secondary   "> {data.attributes.title}</Heading>
                            <Heading mt={2} subtitle className="has-text-white has-text-weight-light">{data.attributes.description}</Heading>
                            <Button mt={2} className="is-success"> {data.attributes.buttonText}</Button>
                        </Column>
                        <Column className="" desktop={{ size: 8 }}  >
                            <img src="/p_bgr.png" alt="" className="hero-img" />
                        </Column>

                    </Columns>



                </Container>

            </Section>
        </Hero>


    </>
}

export default HeroSection;
