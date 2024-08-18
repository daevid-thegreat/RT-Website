import { Flex, Image, Text, Button, Box } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      pt={{ base: "89px", lg: "106px" }}
      pb={{ base: "42px", lg: "40px" }}
      px={{ base: "20px", lg: "107px" }}
      flexDir={"column"}
      w={"100%"}
      bgImage={"images/rough-bg.png"}
      overflowX={"hidden"}
    >
      <Box maxW={"1200px"} mx={"auto"} w="100%">
        <Image
          src="/images/PWU/FirstIMG.jpeg"
          mb={{ base: "", md: "24px" }}
          w={"100%"}
          h={{ base: "370px", md: "492px" }}
          objectFit={"cover"}
          border={{
            base: "1.38px solid #111413",
            md: "5px solid #111413",
          }}
          className="offshadblack"
        />
        <Flex justifyContent={"space-between"} flexDir={["column", 'column', 'column', 'column', 'row']} my="50px">
          <Box w={["100%", "100%", "698px"]}>
            <Text
              fontFamily={"clash"}
              fontWeight={700}
              color={"black100"}
              fontSize={{ base: "40px", lg: "60px" }}
              lineHeight={['35.2px', '35.2px', '35.2px', '73.8px', "73.8px"]}
              textTransform={"uppercase"}
            >
              Invest in Talent Empowerment
            </Text>
            <Button
              width={"213px"}
              h="64px"
              background={"#198046"}
              border={"none"}
              color={"#ffff"}
              fontWeight={600}
              _hover={{ background: "#198046" }}
              borderRadius={"none"}
              mt={['1rem', '1rem', '1rem', '1rem', "2rem"]}
              fontFamily={"clash"}
              textTransform={"uppercase"}
            >
              Partner With Us
            </Button>
          </Box>
          <Text
            w={["100%", "100%", "462px"]}
            textAlign={"justify"}
            fontFamily={"manrope"}
            mt={['1rem', '1rem', '1rem', '1rem', 0]}
          >
            Your donations, partnerships and sponsorships fuel our mission to
            provide resources, mentorship, and opportunities to tech talents
            from Nigeria, Africa and across the globe. Explore a partnership
            or/and sponsorship with the RoadTrip Community to empower hundreds
            of passionate tech talents launch their careers and become thought
            leaders of tomorrow.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Hero;
