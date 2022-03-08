import Head from 'next/head'
import Image from 'next/image'
import { Container } from 'react-bulma-components';
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection';
import { fetchAPI } from '../lib/api'
import SkillsSection from '../components/SkillsSection';
import Layout from '../components/_App/Layout';
import AboutMe from '../components/AboutMe';



export async function getStaticProps() {

  const landingRes = await fetchAPI("/landing", { populate: "*" });


  return {
    props: {
      landing: landingRes?.data,

    },
    revalidate: 1,
  }

}


export default function Home({ landing }) {


  return (
    <Layout>


      <Head>
        <title>Mauro S. - Full Stack Web Developer </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container mb={6}>

        <HeroSection data={landing} />
        <AboutMe />

      </Container>




    </Layout>
  )
}


