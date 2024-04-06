import {
  Flex,
  Image,
  Link,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

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
        // pt={{ base: "89px", lg: "106px" }}
        // pb={{ base: "42px", lg: "40px" }}
        // pl={{ base: "20px", lg: "50px" }}
        flexDir={{ base: "column", lg: "row" }}
        // w={"100%"}
        overflowX={"hidden"}
        justifyContent={{ base: "", lg: "space-between" }}
      >
        <Box>
          <Text
            fontFamily={"clash"}
            fontWeight={700}
            color={"black100"}
            fontSize={{ base: "40px", lg: "80px" }}
            w="100%"
            mr={{ base: "20px", lg: "150px" }}
          >
            ABOUT US
          </Text>
          <Button
            width={250}
            background={"green"}
            border={"none"}
            color={"#ffff"}
            p={"25px"}
            fontSize={{ base: "md", lg: "lg" }}
          >
            MEET THE ROADTRIPPERS
          </Button>
        </Box>
        <Box
          ml={{ base: "20px", lg: "0px" }}
          mt={{ base: "20px", lg: "20px" }}
          w="100%"
          maxW={{ base: "", lg: "463px" }}
          fontWeight={{ base: 400, lg: 500 }}
          fontSize={{ base: "12px", lg: "16px" }}
          fontFamily={"manrope"}
        >
          <Text>
            Established in 2021, RoadTrip Community initially started
            out as a Design Community. This was greatly influenced by
            the fact that the ancestors of this group came from the
            Design Track at Zuri Training in April 2021. <br /> <br />
            As the community evolved, we made room for folks with
            multi-disciplinary interests and skills other than Design
            itself.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Hero;
