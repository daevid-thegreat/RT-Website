import { Flex, Text, Box, Heading, Image, Button } from "@chakra-ui/react";

const Sponsors = () => {
  return (
    <Box
      // pt={{ base: "89px", lg: "106px" }}
      pb={{ base: "42px", lg: "40px" }}
      // px={{ base: "20px", lg: "107px" }}
      flexDir={"column"}
      w={["100%", "100%", "100%", "100%", "1200px"]}
      overflowX={"hidden"}
      pt="4rem"
      mx="auto"
    >
      <Flex
        alignItems={[
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-start",
          "center",
        ]}
        justifyContent={"space-between"}
        bg="#EEF0FF"
        minH="352px"
        px={["20px", "40px"]}
        flexDir={["column", "column", "column", "column", "row"]}
        py="40px"
      >
        <Box>
          <Heading
            fontFamily={"clash"}
            fontSize={"32px"}
            lineHeight={"39.36px"}
          >
            PARTNERSHIP
          </Heading>
          <Text
            w={["100%", "100%", "525px"]}
            letterSpacing={"-2%"}
            fontFamily={"manrope"}
            lineHeight={"24px"}
            mt="1rem"
          >
            To get started, please reach out to us at
            hello@roadtripcommunity.org. We look forward to collaborating with
            you and creating a positive impact in the design and tech space.
          </Text>
        </Box>

        <Image
          src="/images/msv.png"
          mt={["1rem", "1rem", "1rem", "1rem", 0]}
          alt="partnership avatar"
        />
      </Flex>

      <Flex
        alignItems={[
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-start",
          "center",
        ]}
        justifyContent={"space-between"}
        bg="#EEF0FF"
        minH="352px"
        px={["20px", "40px"]}
        flexDir={["column", "column", "column", "column", "row"]}
        py="40px"
      >
        <Box>
          <Heading
            fontFamily={"clash"}
            fontSize={"32px"}
            lineHeight={"39.36px"}
          >
            SPONSORSHIP
          </Heading>
          <Text
            w={["100%", "100%", "525px"]}
            letterSpacing={"-2%"}
            fontFamily={"manrope"}
            lineHeight={"24px"}
            mt="1rem"
          >
            Come sponsor our events and initiatives at RoadTrip. With your
            sponsorship, we will be reaching more creatives in the tech space
            with tailored resources, and tools for their growth.
          </Text>
        </Box>

        <Image
          src="/images/exo.png"
          mt={["1rem", "1rem", "1rem", "1rem", 0]}
          alt="partnership avatar"
        />
      </Flex>

      <Box
        my="4rem"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
      >
        <Text
          fontSize={["20px", "20px", "40px"]}
          fontFamily={"clash"}
          fontWeight={500}
          lineHeight={"49.2px"}
          mb={["1rem", "2rem"]}
          textAlign={"center"}
        >
          Donate, sponsor or partner as...
        </Text>

        <Flex
          gap="24px"
          w="100%"
          px={["20px"]}
          flexDir={["column", "column", "row"]}
        >
          <Button
            bg="#CC4D34"
            _hover={{ background: "#CC4D34" }}
            w={["100%", "184px"]}
            h="64px"
            fontWeight={600}
            lineHeight={"24px"}
            color={"#fff"}
            fontFamily={"clash"}
            borderRadius={"none"}
            textTransform={"uppercase"}
          >
            An individual
          </Button>
          <Button
            bg="#198046"
            _hover={{ background: "#198046" }}
            minW={["100%", "184px"]}
            h="64px"
            fontWeight={600}
            lineHeight={"24px"}
            color="#fff"
            fontFamily={"clash"}
            borderRadius={"none"}
            textTransform={"uppercase"}
          >
            An organisation
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
export default Sponsors;
