/* eslint-disable @next/next/no-img-element */
import { Columns, Heading, Hero } from "react-bulma-components";
import SocialMedia from "./SocialMedia";

const { Column } = Columns;

interface Props {
  title: string;
  subtitle: string;
  image?: boolean;
}

const HeroSection = ({ title, subtitle = "", image }: Props): JSX.Element => {
  return (
    <>
      <Hero mt={6} className="">
        <Hero.Body>
          <Columns>
            <Column
              desktop={{ size: 8 }}
              tablet={{ size: 0 }}
              mobile={{ size: 12 }}
            >
              <Heading className="has-text-secondary"> {title} </Heading>
              <Heading
                mt={2}
                subtitle
                className="has-text-white has-text-weight-light"
              >
                {subtitle}
              </Heading>
              <SocialMedia />
            </Column>
            <Column
              className=""
              desktop={{ size: 6 }}
              tablet={{ size: 12 }}
              mobile={{ size: 12 }}
            >
              {image ? (
                <div className="image-container  ">
                  <img src="/p_bgr.png" alt="" />
                </div>
              ) : (
                <div className="space-container">
                  <span className="space-span"> </span>
                </div>
              )}
            </Column>
          </Columns>
        </Hero.Body>
      </Hero>
    </>
  );
};

export default HeroSection;
