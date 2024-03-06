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
    <Flex bg={"white"} flexDir={"column"}>
      <Hero />
      <Stories />
      <Portfolios />
      <Articles />
      <Bus />
      <Roadtrippers />
      <Footprints />
    </Flex>
  );
};
export default Danfo;
