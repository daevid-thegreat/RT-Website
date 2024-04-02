import { Flex, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      pt={{ base: "89px", lg: "106px" }}
      pb={{ base: "42px", lg: "40px" }}
      px={{ base: "20px", lg: "107px" }}
      flexDir={"column"}
      w={"100%"}
      bgImage={'images/rough-bg.png'}
      overflowX={"hidden"}
    >
      <Image
        src="/images/rtGroupImg.webp"
        mb={{ base: "", md: "24px" }}
        maxW={"1216px"}
        w={"100%"}
        h={{ base: "370px", md: "492px" }}
        objectFit={"cover"}
        border={{
          base: "1.38px solid #111413",
          md: "5px solid #111413",
        }}
        className="offshadyellow"
      />
      <Text
        fontFamily={"clash"}
        fontWeight={700}
        color={"black100"}
        fontSize={{ base: "40px", lg: "80px" }}
      >
        INSIDE DANFO BUS
      </Text>
    </Flex>
  );
};
export default Hero;
