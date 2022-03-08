import { Container, Heading } from 'react-bulma-components';
import PageTitles from '../components/PageTitles';
import ProjectSection from '../components/ProjectSection';
import Layout from '../components/_App/Layout';
import { fetchAPI } from '../lib/api'




export async function getStaticProps() {

    const landingRes = await fetchAPI("/landing", { populate: "*" });

    return {
        props: {
            landing: landingRes?.data,
        },
        revalidate: 1,
    }
}


export default function Projects() {


    return (
        <Layout>

            <Container mb={6}>


                <Container>
                    <PageTitles title="Projects" subtitle="Some text" />
                    <ProjectSection />
                </Container>
            </Container>



        </Layout >
    )
}


