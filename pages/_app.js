import Layout from '../components/_App/Layout'
import { fetchAPI } from '../lib/api'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (


    <>
      <Layout>

        <Component {...pageProps} />
      </Layout>

    </>

  )
}

export default MyApp

