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

// const AboutUs = () => {
const HomeP = () => {
  return (
    <>
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
    </>
  );
};
// export default AboutUs
export default HomeP;
