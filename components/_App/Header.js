import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Navbar, Icon, Container as ParentContainer } from 'react-bulma-components';
import Image from 'next/image';

const { Brand, Container, Item, Menu, Burger } = Navbar;

const Header = () => {

    const [navBarStatus, setActiveNavbar] = useState(false);
    const router = useRouter();

    const handleSamePageClick = () => {
        e.preventDefault();
        setActiveNavbar(false);
        router.push(`${window.location.origin}/${e.target.hash}`);
    };

    const handleActiveNavbar = () => {
        setActiveNavbar(!navBarStatus);
    };

    return (
        <>

            <Navbar className=" is-spaced  " active={navBarStatus} transparent={true}>
                <ParentContainer>
                    <Brand >
                        <Burger className="switch-burger has-text-white" onClick={handleActiveNavbar} />


                    </Brand>
                    <Menu >
                        <Container className="is-justify-content-center is-width-100">

                            <Link href="#creatures">
                                <a className="navbar-item mx-2 has-text-weight-medium has-text-white" onClick={(e) => handleSamePageClick(e)}>
                                    Contact
                                </a>
                            </Link>
                            <Link href="/lore">
                                <a className="navbar-item mx-2 has-text-weight-medium has-text-white" onClick={() => setActiveNavbar(false)}>
                                    Skills
                                </a>
                            </Link>
                            <Link href="/our-vision">
                                <a className="navbar-item mx-2 has-text-weight-medium has-text-white" onClick={() => setActiveNavbar(false)}>
                                    Projects
                                </a>
                            </Link>

                        </Container>
                        <Container align="right">
                            <Item target="_blank" href="">
                                <Icon>
                                    <i className="fab fa-github has-text-white" />
                                </Icon>
                            </Item>
                            <Item target="_blank" href="https://www.linkedin.com/company/">
                                <Icon>
                                    <i className="fab fa-linkedin has-text-white" />
                                </Icon>
                            </Item>

                            <Item target="_blank" href="https://www.instagram.com/">
                                <Icon>
                                    <i className="fab fa-instagram has-text-white" />
                                </Icon>
                            </Item>

                            <Item target="_blank" href="https://twitter.com/">
                                <Icon>
                                    <i className="fab fa-twitter has-text-white" />
                                </Icon>
                            </Item>


                        </Container>
                    </Menu>
                </ParentContainer>
            </Navbar>


        </>
    )
}

export default Header;