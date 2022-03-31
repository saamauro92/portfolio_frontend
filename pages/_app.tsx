import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/dist/pages/_app";
import Header from "../components/_App/Header";
import Footer from "../components/_App/Footer";
import { Container } from "react-bulma-components";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://maurosaavedra.com/${router.route}`;
  return (
    <>
      <Container>
        <DefaultSeo
          titleTemplate="%s - Mauro Saavedra Web Developer"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url,
            description:
              "The Personal Website for Mauro Saavedra, Web developer",
            site_name: "Mauro Saavedra ",
            images: [],
          }}
          canonical={url}
        />
        <Header />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>

        <Footer />
      </Container>
    </>
  );
}

export default MyApp;
