import { Container } from "react-bulma-components";

const links: { Icon: string; href: string }[] = [
  {
    Icon: "fab fa-github",
    href: "https://github.com/saamauro92",
  },
  {
    Icon: "fab fa-linkedin",
    href: "https://www.linkedin.com/in/maurosaavedra/",
  },
  {
    Icon: "fab fa-instagram",
    href: "https://www.instagram.com/saa.mauro/",
  },
];

const SocialMedia = (): JSX.Element => (
  <>
    <Container>
      {links.map(({ Icon, href }, i) => (
        <a
          key={i}
          target="_blank"
          href={href}
          className="mr-5"
          rel="noreferrer"
        >
          <i className={`${Icon} has-text-white `}> </i>
        </a>
      ))}
    </Container>
  </>
);

export default SocialMedia;
