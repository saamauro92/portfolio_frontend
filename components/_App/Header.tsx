import { useState } from "react";

import Link from "next/link";
import { Navbar } from "react-bulma-components";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import { isActiveLink } from "../../lib/utils";
const { Brand, Container, Menu, Burger } = Navbar;

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
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
      <Navbar className=" is-spaced " active={navBarStatus} transparent={true}>
        <Brand>
          <Burger
            className="switch-burger has-text-white"
            onClick={handleActiveNavbar}
          />
        </Brand>
        <Menu>
          <Link href="/" scroll={false}>
            <a
              className="navbar-item mx-2 has-text-weight-medium has-text-white "
              onClick={() => setActiveNavbar(false)}
            >
              Mauro Saavedra
            </a>
          </Link>

          <Container align="right" paddingless>
            {links.map(({ name, href }) => (
              <>
                <Link href={href} key={name} scroll={false}>
                  <a
                    className={
                      isActiveLink(href, router.pathname)
                        ? "navbar-item mx-2 has-text-weight-medium has-text-white is-underlined"
                        : "navbar-item mx-2 has-text-weight-medium has-text-white"
                    }
                    onClick={() => setActiveNavbar(false)}
                  >
                    {name}
                  </a>
                </Link>
              </>
            ))}
          </Container>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
