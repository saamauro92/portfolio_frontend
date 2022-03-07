import Head from "next/head"
import { Container } from "react-bulma-components";
import Header from "./Header";







const Layout = ({ children }) => {

    return <>

        <Head>

            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <main>
            {children}
        </main>
        <footer>
            <Container>

                <p>Copyright @ M.A.S</p>
            </Container>
        </footer>

    </>


}


export default Layout;