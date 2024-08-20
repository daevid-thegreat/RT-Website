import DesignBanner from "./DesignBanner";
import Hero from "./Hero";
import Belief from "./Belief";
import Mission from "./Mission";
import Gallery from "./Gallery";
import Companies from "./Companies";
import Subscribe from "./Subscribe";
import Can from "./Can";
import { HeadProvider, Title, Link, Meta } from "react-head";
import { content } from "../../content";
import HeaderSEO from "../../components/Header";
import { Box } from "@chakra-ui/react";

// const AboutUs = () => {
const HomeP = () => {
  return (
    <Box maxW={"1440px"} mx="auto">
      <HeaderSEO
        title={content.title}
        url={content.canonical_url}
        description={content.description}
        image={content.OG_Image}
      />

      <Hero />
      <DesignBanner />
      <Belief />
      <Mission />
      <Companies />
      <Can />
      <Gallery />
      <Subscribe />
    </Box>
  );
};
// export default AboutUs
export default HomeP;
