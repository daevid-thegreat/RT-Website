import React from "react";
import Hero from "./Hero";
import Sponsors from "./sponsors";
import Partners from "./partners";
import Parspons from "./Parspons";
import HeaderSEO from "../../components/Header";
import { content } from "../../content";

const PartnerWithUs = () => {
  return (
    <>
      <HeaderSEO
        title={content.title_partner}
        url={content.canonical_url_partner}
        description={content.description_partner}
        image={content.OG_Image_partner}
      />

      <Hero />
      <Sponsors />
      <Partners />
      <Parspons />
    </>
  );
};

export default PartnerWithUs;
