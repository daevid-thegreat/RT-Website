import { Flex, Text, Box, Image } from "@chakra-ui/react";

const Footprints = () => {
  return (
    <Flex
      bg={"white"}
      flexDir={"column"}
      // px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Text
        fontFamily={"clash"}
        fontSize={{ base: "40px", lg: "64px" }}
        color={"black100"}
        fontWeight={700}
        px={{ base: "16px", lg: "122px" }}
      >
        Our footprints
      </Text>
      <Text
        fontFamily={"manrope"}
        fontSize={{ base: "16px", lg: "24px" }}
        color={"black100"}
        fontWeight={{ base: 500, lg: 400 }}
        pb={"40px"}
        pl={{ base: "61px", lg: "243px" }}
        maxW={{ base: "340px", lg: "690px" }}
        w={"100%"}
        lineHeight={{ base: "19.2px", lg: "28.8px" }}
      >
        Explore the impact RoadTrip Community is making through our
        members' involvement in tech events, conferences, and
        volunteering activities.
      </Text>
      <Flex
        borderTop={"4px solid #111413"}
        flexDir={{ base: "column", md: "row" }}
        // w={'100%'}
        borderLeft={"2px solid #111413"}
      >
        <Flex
          flexDir={"column"}
          borderRight={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
        >
          <Box
            borderBottom={"4px solid #111413"}
            h={"376px"}
            maxW={"800px"}
            w={"100%"}
          >
            <Image
              src={"images/danfo.webp"}
              objectFit={"cover"}
              h={"372px"}
            />
          </Box>
          <Box
            borderBottom={"4px solid #111413"}
            h={"376px"}
            maxW={"800px"}
            w={"100%"}
          >
            {/* <Image src={"images/danfo.webp"} objectFit={"cover"} /> */}
          </Box>
          <Box
            borderBottom={"4px solid #111413"}
            h={"376px"}
            maxW={"800px"}
            w={"100%"}
          >
            {/* <Image src={"images/danfo.webp"} objectFit={"cover"} /> */}
          </Box>
        </Flex>
        <Flex flexDir={"column"}>
          <Box
            borderBottom={"4px solid #111413"}
            h={{ base: "376px", md: "482px" }}
            maxW={"800px"}
            w={"100%"}
            borderRight={{
              base: "2px solid #111413",
              md: "none",
            }}
            // borderRight={"4px solid #111413"}
          ></Box>
          <Box
            borderBottom={"4px solid #111413"}
            h={{ base: "376px", md: "482px" }}
            maxW={"800px"}
            w={"100%"}
            borderRight={{
              base: "2px solid #111413",
              md: "none",
            }}
            // borderRight={"4px solid #111413"}
          >
            <Image
              src={"images/danfo.webp"}
              objectFit={"cover"}
              h={{ base: "372px", md: "478px" }}
            />
          </Box>
        </Flex>
        <Flex
          flexDir={"column"}
          borderLeft={{ base: "", md: "4px solid #111413" }}
          borderRight={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
        >
          <Box
            borderBottom={"4px solid #111413"}
            h={"376px"}
            maxW={"800px"}
            w={"100%"}
          >
            <Image
              src={"images/danfo.webp"}
              objectFit={"cover"}
              h={"372px"}
            />
          </Box>
          <Box
            borderBottom={"4px solid #111413"}
            h={"376px"}
            maxW={"800px"}
            w={"100%"}
          >
            {/* <Image src={"images/danfo.webp"} objectFit={"cover"} /> */}
          </Box>
          <Box
            borderBottom={"4px solid #111413"}
            h={"376px"}
            maxW={"800px"}
            w={"100%"}
          >
            {/* <Image src={"images/danfo.webp"} objectFit={"cover"} /> */}
          </Box>
        </Flex>
        <Flex flexDir={"column"}>
          <Box
            borderBottom={"4px solid #111413"}
            h={{ base: "376px", md: "482px" }}
            maxW={"800px"}
            w={"100%"}
            borderRight={"2px solid #111413"}
          ></Box>
          <Box
            borderBottom={"4px solid #111413"}
            h={{ base: "376px", md: "482px" }}
            maxW={"800px"}
            w={"100%"}
            borderRight={"2px solid #111413"}
          >
            <Image
              src={"images/danfo.webp"}
              objectFit={"cover"}
              h={{ base: "372px", md: "478px" }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Footprints;
