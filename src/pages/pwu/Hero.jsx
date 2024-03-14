import { Flex, Image, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      pt={{ base: "89px", lg: "106px" }}
      pb={{ base: "42px", lg: "40px" }}
      px={{ base: "20px", lg: "107px" }}
      flexDir={"column"}
      w={"100%"}
      overflowX={"hidden"}
    >
      <Image
        src="/images/PWU/FirstIMG.jpeg"
        mb={{ base: "", md: "24px" }}
        maxW={"1216px"}
        w={"100%"}
        h={{ base: "370px", md: "492px" }}
        objectFit={"cover"}
        border={{
          base: "1.38px solid #111413",
          md: "5px solid #111413",
        }}
        className="offshadblack"
      />
      <Text
        fontFamily={"clash"}
        fontWeight={700}
        color={"black100"}
        fontSize={{ base: "40px", lg: "80px" }}
      >
        SPONSORSHIP & <br />
        PARTNERSHIP
      </Text>
      <Button width={150}
        background={"green"}
        border={"none"}
        color={"#ffff"}
      >
        Partner With Us
      </Button>
    </Flex>
  );
};
export default Hero;