import { Columns, Heading, Section } from "react-bulma-components";



const AboutMe = () => {


    return (
        <>
            <Section className="has-text-white" mt={6}>


                <Columns mt={6}>
                    <Columns.Column size={8}>
                        <Heading className="has-text-secondary">   About</Heading>
                        <p className="has-text-weight-light">



                            I spend most of my time as a frontend developer on Ostmodern's Skylark CMS using React.js. Sometimes I use Node.js, Docker, Kubernetes and Golang and I'm currently experimenting with Serverless technologies on AWS and Azure.

                            Outside of work I spend my time creating content for my blog where I discuss other projects I'm working on, interesting problems I've had to solve and create tutorials to educate and help others use various technologies for the first time or in a more efficient manner.
                        </p>

                    </Columns.Column>

                </Columns>


            </Section>
        </>
    )
}


export default AboutMe;