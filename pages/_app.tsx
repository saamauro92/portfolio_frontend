import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";

import { AppProps } from "next/dist/pages/_app";
import Header from "../components/_App/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
  );
}

export default MyApp;
