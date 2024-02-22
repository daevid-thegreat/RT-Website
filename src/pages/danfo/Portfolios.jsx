import { Flex, Text, Image } from "@chakra-ui/react";

const Portfolios = () => {
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
        Featured portfolios
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
        Explore impressive portfolios crafted by our talented members,
        showcasing their diverse skills and creativity. Get ready to
        be inspired!
      </Text>
      <Flex
        h={"27px"}
        w={"100%"}
        borderTop={"3px solid #111413"}
        borderBottom={"3px solid #111413"}
        alignItems={"center"}
        // overflow={'scrollX'}
        // className="no-scrollbar"
      >
        <Text
          fontSize={"16px"}
          fontWeight={700}
          fontFamily={"manrope"}
          pr={"12px"}
        >
          Highlight of our members doings
        </Text>
        <Image
          src={"/images/ellipse.png"}
          mr={"12px"}
          h={"7px"}
          w={"7px"}
        />
      </Flex>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Flex
          borderBottom={"3px solid #111413"}
          borderRight={{ base: "", md: "3px solid #111413" }}
          // borderLeft={{ base: "", md: "3px solid #111413" }}
          w={"100%"}
          maxW={"707px"}
          h={{ base: "466px", md: "373px" }}
        ></Flex>
        <Flex
          borderBottom={"3px solid #111413"}
          borderRight={{ base: "", md: "3px solid #111413" }}
          w={"100%"}
          maxW={"707px"}
          h={{ base: "466px", md: "373px" }}
        ></Flex>
      </Flex>
    </Flex>
  );
};
export default Portfolios;
