import HeaderSEO from "../../components/Header";
import { content } from "../../content";
import { Routes } from "../../routes/baseRoutes";
import Articles from "./Articles";
import Bus from "./Bus";
import Footprints from "./Footprints";
import Hero from "./Hero";
import Portfolios from "./Portfolios";
import Roadtrippers from "./Roadtrippers";
import Stories from "./Stories";
import { Flex } from "@chakra-ui/react";

const Danfo = () => {
  return (
    <>
      <HeaderSEO
        title={content.title_inside}
        url={content.canonical_url_inside}
        description={content.description_inside}
        image={content.OG_Image_inside}
      />

      <Flex bg={"white"} flexDir={"column"}>
        <Hero />
        <Stories />
        <Portfolios />
        <Articles />
        <Bus />
        <Roadtrippers />
        <Footprints />
      </Flex>
    </>
  );
};
export default Danfo;
