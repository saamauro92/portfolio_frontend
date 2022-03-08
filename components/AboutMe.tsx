import { Columns, Heading, Section } from "react-bulma-components";



const AboutMe = ({ data }) => {


    return (
        <>
            <Section className="has-text-white is-large" paddingless  >


                <Columns mt={6}>
                    <Columns.Column size={8}>
                        <Heading className="has-text-secondary">   About</Heading>
                        <p className="has-text-weight-light">

                            {data}


                        </p>

                    </Columns.Column>

                </Columns>


            </Section>
        </>
    )
}


export default AboutMe;