import { Columns, Heading, Section } from "react-bulma-components";

const { Column } = Columns;

const mockup: { name: string; description: string; image: string }[] = [
  {
    name: "7 Seas Sailing School Website",
    description:
      " lorem impsumlorem impsum lorem impsumlorem impsumlorem impsum lorem impsumlorem impsumlorem impsum lorem impsumlorem impsumlorem impsum lorem impsum ",
    image: "https://picsum.photos/500/300?random=5",
  },
  {
    name: "7 Seas Sailing School Website",
    description:
      "lorem impsumlorem impsum lorem imlorem impsumlorem impsum lorem impsumlorem impsumlorem impsum lorem impsumlorem impsumlorem impsum lorem impsumpsum ",
    image: "https://picsum.photos/500/300?random=2",
  },
  {
    name: "7 Seas Sailing School Website",
    description:
      "lorem impsumlorem impsum lorlorem impsumlorem impsum lorem impsumlorem impsumlorem impsum lorem impsumem impsum ",
    image: "https://picsum.photos/500/300?random=7",
  },
];

const ProjectSection = (): JSX.Element => {
  return (
    <>
      <Section paddingless className="is-large" mt={6}>
        {mockup.map(({ name, description, image }) => (
          <Columns>
            <Column size={6}>
              <Heading subtitle className="has-text-white">
                {" "}
                {name}
              </Heading>
              <p className="has-text-white has-text-weight-light">
                {" "}
                {description}
              </p>
            </Column>

            <Column size={4}>
              <img src={image} alt="" />
            </Column>
          </Columns>
        ))}
      </Section>
    </>
  );
};

export default ProjectSection;
