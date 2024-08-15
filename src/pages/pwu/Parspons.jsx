import {
  Button,
  Text,
  Image,
  useBreakpointValue,
  Flex,
  Heading,
  Input,
  Box,
} from "@chakra-ui/react";
import React from "react";

const Sponsors = () => {
  const cardWidth = useBreakpointValue({ base: "100%", md: "500px" });

  return (
    <Flex
      bg={"#198046"}
      flexDir={"column"}
      px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
      mt="10rem"
    >
      <Heading
        as={"h2"}
        fontFamily={"clash"}
        fontWeight={600}
        fontSize={"64px"}
        lineHeight={"78.72px"}
        color={"white"}
        textAlign={"center"}
      >
        Subscribe to our newsletter
      </Heading>
      <Text
        fontSize={"20px"}
        w={["100%", "100%", "887px"]}
        mx="auto"
        textAlign={"center"}
        letterSpacing={"-2%"}
        color={"white"}
        lineHeight={"27.32px"}
        mb={"2rem"}
      >
        Stay informed, inspired, and be part of the RoadTrip journey. Subscribe
        to join our dynamic {`community's`} narrative of growth and achievement!
      </Text>
      <Input
        type="email"
        placeholder="Your email address"
        w={["100%", "100%", "662px"]}
        mx="auto"
        h="64px"
        p="20px 32px"
        border={"4px solid white"}
        color={"white"}
        fontWeight={400}
        _placeholder={{ color: "white" }}
        _focus={{ border: "4px solid white" }}
      />

      <Box
        w={["100%", "193px"]}
        h="64px"
        mt="2rem"
        mx="auto"
        position={"relative"}
      >
        <Button
          w="100%"
          h="100%"
          borderRadius={"none"}
          bg="#111413"
          fontWeight={600}
          color={"white"}
          fontFamily={"clash"}
          textTransform={"capitalize"}
          zIndex={10}
          _hover={{ background: "#111413" }}
        >
          SUBSCRIBE
        </Button>
        <Box
          bg="#F6B847"
          w="100%"
          h="100%"
          position={"absolute"}
          bottom={"-2px"}
          right={"-2px"}
          zIndex={1}
        ></Box>
      </Box>
    </Flex>
  );
};
export default Sponsors;
