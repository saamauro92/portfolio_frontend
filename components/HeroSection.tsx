/* eslint-disable @next/next/no-img-element */

import { Columns, Heading, Hero } from "react-bulma-components";
import SocialMedia from "./SocialMedia";

const { Column } = Columns;

const HeroSection = ({ data }): JSX.Element => {
  return (
    <>
      <Hero mt={6} className="">
        <Columns centered={true}>
          <Column
            className=""
            desktop={{ size: 4 }}
            tablet={{ size: 0 }}
            mobile={{ size: 12 }}
            mt={6}
            pt={6}
          >
            <Heading mt={6} pt={6} className="has-text-secondary   ">
              {" "}
              {data.attributes.title}{" "}
            </Heading>
            <Heading
              mt={2}
              subtitle
              className="has-text-white has-text-weight-light"
            >
              {data.attributes.subtitle}
            </Heading>
            <SocialMedia />
          </Column>

          <Column
            className=""
            desktop={{ size: 8 }}
            p={6}
            tablet={{ size: 12 }}
            mobile={{ size: 12 }}
          >
            <div className="image-container is-hidden-mobile">
              <img src="/p_bgr.png" alt="" className="img-hero" />
            </div>
            <div className="image-container_two img-hero-two is-hidden-mobile">
              <img src="/p_bgr.png" alt="" className="img-hero " />
            </div>
            <div className="image-container img-hero-third is-hidden-mobile">
              <img src="/p_bgr.png" alt="" className="img-hero " />
            </div>
            <div className="image-container_two img-hero_fourth">
              <img src="/p_bgr.png" alt="" className="img-hero" />
            </div>
            <div className="image-container img-hero-third">
              <img src="/p_bgr.png" alt="" className="img-hero " />
            </div>
          </Column>
        </Columns>
      </Hero>
    </>
  );
};

export default HeroSection;
