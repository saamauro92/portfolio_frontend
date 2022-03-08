import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Navbar, Container as ParentContainer } from "react-bulma-components";

const { Brand, Container, Menu, Burger } = Navbar;

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Header = (): JSX.Element => {
  const [navBarStatus, setActiveNavbar] = useState(false);
  const router = useRouter();

  const handleActiveNavbar = () => {
    setActiveNavbar(!navBarStatus);
  };

  return (
    <>
      <Navbar className=" is-spaced  " active={navBarStatus} transparent={true}>
        <ParentContainer>
          <Brand>
            <Burger
              className="switch-burger has-text-white"
              onClick={handleActiveNavbar}
            />
          </Brand>
          <Menu>
            <Link href="/" scroll={false}>
              <a
                className="navbar-item mx-2 has-text-weight-medium has-text-white"
                onClick={() => setActiveNavbar(false)}
              >
                Mauro Saavedra
              </a>
            </Link>

            <Container align="right">
              {links.map(({ name, href }) => (
                <Link href={href} key={name} scroll={false}>
                  <a
                    className="navbar-item mx-2 has-text-weight-medium has-text-white "
                    onClick={() => setActiveNavbar(false)}
                  >
                    {name}
                  </a>
                </Link>
              ))}
            </Container>
          </Menu>
        </ParentContainer>
      </Navbar>
    </>
  );
};

export default Header;
