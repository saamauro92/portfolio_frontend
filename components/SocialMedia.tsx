import { Container } from "react-bulma-components";

const links: { Icon: string; href: string }[] = [
  {
    Icon: "fab fa-github",
    href: "https://github.com/",
  },
  {
    Icon: "fab fa-linkedin",
    href: "https://www.linkedin.com/in/",
  },
  {
    Icon: "fab fa-instagram",
    href: "https://www.linkedin.com/in/",
  },
];

const SocialMedia = (): JSX.Element => (
  <>
    <Container>
      {links.map(({ Icon, href }, i) => (
        <a key={i} target="_blank" href={href} className="mr-4">
          <i className={`${Icon} has-text-white`}> </i>
        </a>
      ))}
    </Container>
  </>
);

export default SocialMedia;
