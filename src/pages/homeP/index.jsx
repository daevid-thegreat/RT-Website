import Belief from "./Belief";
import Can from "./Can";
import Companies from "./Companies";
import DesignBanner from "./DesignBanner";
import Gallery from "./Gallery";
import HeaderSEO from "../../components/Header";
import Hero from "./Hero";
import Mission from "./Mission";
import Partner from "./Partner";
import Subscribe from "./Subscribe";
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
      <Partner />
      <Gallery />
      <Subscribe />
    </Box>
  );
};
// export default AboutUs
export default HomeP;
