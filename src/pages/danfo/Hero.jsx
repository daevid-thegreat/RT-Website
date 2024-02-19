import { Flex, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      pt={{ base: "89px", md: "106px" }}
      pb={{ base: "42px", md: "40px" }}
      px={{ base: "20px", md: "107px" }}
      flexDir={"column"}
      w={"100%"}
      overflowX={"hidden"}
    >
      <Image
        src="/images/danfo.webp"
        mb={{ base: "", md: "24px" }}
        maxW={"1216px"}
        w={"100%"}
        h={{ base: "370px", md: "492px" }}
        objectFit={"cover"}
        border={{
          base: "1.38px solid #111413",
          md: "5px solid #111413",
        }}
        pos={"relative"}
        // _before={{
        //   position: "absolute",
        //   bg: "#F6B847",
        //   top: "123px",
        //   left: "24px",
        //   w: "100%",
        //   h: "100%",
        // }}
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
