import { Flex, Image, Link, Text, Button, Box } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      pt={{ base: "89px", lg: "106px" }}
      pb={{ base: "42px", lg: "40px" }}
      px={{ base: "20px", lg: "107px" }}
      flexDir={"column"}
      bgImage={"images/rough-bg.png"}
      w={"100%"}
      overflowX={"hidden"}
    >
      <Image
        src="/images/RTAboutUs.webp"
        loading="eager"
        alt={"about us image"}
        fetchpriority="high"
        mb={{ base: "", md: "24px" }}
        maxW={"1216px"}
        w={"100%"}
        h={{ base: "370px", md: "492px" }}
        objectFit={"cover"}
        border={{
          base: "1.38px solid #111413",
          md: "5px solid #111413",
        }}
        className="offshadyellow "
      />
      <Flex
        justifyContent={"space-between"}
        flexDir={["column", "column", "column", "column", "row"]}
        my="50px"
      >
        <Box w={["100%", "100%", "698px"]}>
          <Text
            fontFamily={"clash"}
            fontWeight={700}
            color={"black100"}
            fontSize={{ base: "40px", lg: "60px" }}
            lineHeight={["35.2px", "35.2px", "35.2px", "73.8px", "73.8px"]}
            textTransform={"uppercase"}
          >
            About Us
          </Text>
          <Button
            minW={"213px"}
            h="64px"
            background={"#198046"}
            border={"none"}
            color={"#ffff"}
            fontWeight={600}
            _hover={{ background: "#198046" }}
            borderRadius={"none"}
            mt={["1rem", "1rem", "1rem", "1rem", "2rem"]}
            fontFamily={"clash"}
            textTransform={"uppercase"}
          >
            Meet THE ROadTrippers
          </Button>
        </Box>
        <Text
          w={["100%", "100%", "462px"]}
          textAlign={"justify"}
          fontFamily={"manrope"}
          mt={["1rem", "1rem", "1rem", "1rem", 0]}
        >
          Established in 2021, RoadTrip Community initially started out as a
          Design Community. This was greatly influenced by the fact that the
          ancestors of this group came from the Design Track at Zuri Training in
          April 2021.
          <br /><br />
          As the community evolved, we made room for folks with
          multi-disciplinary interests and skills other than Design itself.
        </Text>
      </Flex>
    </Flex>
  );
};
export default Hero;
