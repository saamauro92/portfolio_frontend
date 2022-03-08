import Layout from '../components/_App/Layout'
import { fetchAPI } from '../lib/api'
import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'

import Header from '../components/_App/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (


    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>

      <Footer />


    </>

  )
}

export default MyApp

