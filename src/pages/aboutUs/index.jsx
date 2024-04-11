import React from "react";
import Hero from "./Hero";
import History from "./History";
import Mission from "./Mission";
import FirstSDG from "./FirstSDG";
import SecondSDG from "./SecondSDG";
import Team from "./Team";
import Mentors from "./Mentors";
import HeaderSEO from "../../components/Header";
import { content } from "../../content";
// import Sponsors from './sponsors';
// import Partners from './partners';
// import Parspons from './Parspons'

const AboutUs = () => {
  return (
    <>
      <HeaderSEO
        title={content.title_about}
        url={content.canonical_url_about}
        description={content.description_about}
        image={content.OG_Image_about}
      />

      <Hero />
      <History />
      <Mission />
      <FirstSDG />
      <SecondSDG />
      <Team />
      <Mentors />
      {/* <Sponsors />
      <Partners />
      <Parspons /> */}
    </>
  );
};

export default AboutUs;
