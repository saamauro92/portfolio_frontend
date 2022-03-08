import { Heading } from "react-bulma-components";




const PageTitles = ({ title, subtitle = '' }) => {

    return (
        <>
            <Heading mt={6} pt={6} className="has-text-secondary  has-text-centered  "> {title}</Heading>
            <p mt={6} pt={6} className="has-text-white  has-text-centered  "> {subtitle}</p>

        </>
    )

}


export default PageTitles;