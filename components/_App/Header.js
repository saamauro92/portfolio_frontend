import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Navbar, Container as ParentContainer } from 'react-bulma-components';



const { Brand, Container, Menu, Burger } = Navbar;

const Header = () => {

    const [navBarStatus, setActiveNavbar] = useState(false);
    const router = useRouter();


    const handleActiveNavbar = () => {
        setActiveNavbar(!navBarStatus);
    };

    const links = [{
        name: 'Home',
        href: '/'
    }, {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'Projects',
        href: '/projects'
    },

    ]

    return (
        <>

            <Navbar className=" is-spaced  " active={navBarStatus} transparent={true}>
                <ParentContainer>
                    <Brand >
                        <Burger className="switch-burger has-text-white" onClick={handleActiveNavbar} />

                    </Brand>
                    <Menu >
                        <Container className="is-justify-content-center is-width-100">


                            <Link href="/" scroll={false}>
                                <a className="navbar-item mx-2 has-text-weight-medium has-text-white" onClick={() => setActiveNavbar(false)}>
                                    Mauro Saavedra
                                </a>
                            </Link>

                        </Container>
                        <Container align="right">
                            {links.map(({ name, href }) =>
                                <Link href={href} key={name} scroll={false} onClick={() => setActiveNavbar(false)}>

                                    <a className="navbar-item mx-2 has-text-weight-medium has-text-white " >
                                        {name}



                                    </a>
                                </Link>
                            )}

                        </Container>
                    </Menu>
                </ParentContainer>
            </Navbar>


        </>
    )
}

export default Header;