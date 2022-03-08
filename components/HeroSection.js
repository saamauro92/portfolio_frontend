/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button, Columns, Navbar, Icon, Heading, Hero, Section } from "react-bulma-components";

const { Column } = Columns;

const { Brand, Container, Item, Menu, Burger } = Navbar;
const HeroSection = ({ data }) => {


    return <>

        <Hero>
            <Section>


                <Columns centered={true}>

                    <Column className="" desktop={{ size: 6 }} tablet={{ size: 0 }} mobile={{ size: 12 }} mt={6} pt={6} >
                        <Heading mt={6} pt={6} className="has-text-secondary   "> Hello, I{"'"}m Mauro </Heading>
                        <Heading mt={2} subtitle className="has-text-white has-text-weight-light">{data.attributes.description}

                            I am a highly dedicated Web Developer, living in Spain after spending 5 years in Ireland.


                        </Heading>
                        {/*                         <Button mt={2} className="is-success">My Resume {data.attributes.buttonText}</Button> */}
                        <Container>
                            <Item target="_blank" href="">
                                <Icon>
                                    <i className="fab fa-github has-text-white" />
                                </Icon>
                            </Item>
                            <Item target="_blank" href="https://www.linkedin.com/company/">
                                <Icon>
                                    <i className="fab fa-linkedin has-text-white" />
                                </Icon>
                            </Item>

                            <Item target="_blank" href="https://www.instagram.com/">
                                <Icon>
                                    <i className="fab fa-instagram has-text-white" />
                                </Icon>
                            </Item>

                            <Item target="_blank" href="https://twitter.com/">
                                <Icon>
                                    <i className="fab fa-twitter has-text-white" />
                                </Icon>
                            </Item>
                        </Container>


                    </Column>
                    <Column className="" desktop={{ size: 6 }} p={6}
                        tablet={{ size: 12 }}
                        mobile={{ size: 12 }}
                    >
                        <div className="image-container">

                            <img src="/p_bgr.png" alt="" className="img-hero" />


                        </div>
                        <div className="image-container_two img-hero-two">

                            <img src="/p_bgr.png" alt="" className="img-hero " />
                        </div>
                        <div className="image-container img-hero-third">

                            <img src="/p_bgr.png" alt="" className="img-hero " />


                        </div>
                        <div className="image-container_two img-hero_fourth" >

                            <img src="/p_bgr.png" alt="" className="img-hero" />
                        </div>

                    </Column>

                </Columns>





            </Section>
        </Hero>


    </>
}

export default HeroSection;
