import Articles from "./Articles";
import Hero from "./Hero";
import Stories from "./Stories";
import { Flex } from "@chakra-ui/react";

const Danfo = () => {
  return (
    <Flex bg={"white"} flexDir={"column"}>
      <Hero />
      <Stories />
      <Articles />
    </Flex>
  );
};
export default Danfo;
