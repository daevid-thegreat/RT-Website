import { Flex, Text } from "@chakra-ui/react";

const Articles = () => {
  return (
    <Flex
      bg={"green400"}
      flexDir={"column"}
      px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Text
        fontFamily={"clash"}
        fontSize={{ base: "40px", md: "64px" }}
        color={"black100"}
        fontWeight={700}
      >
        Articles of the day
      </Text>
      <Text
        fontFamily={"manrope"}
        fontSize={{ base: "16px", md: "24px" }}
        color={"black100"}
        fontWeight={{ base: 500, md: 400 }}
        pb={"40px"}
        pl={{ base: "45px", md: "121px" }}
        maxW={{ base: "340px", md: "690px" }}
        w={"100%"}
        lineHeight={{ base: "19.2px", md: "28.8px" }}
      >
        Gain insights, tips, and entertaining perceptions from our
        articles of the day written by RoadTrippers
      </Text>
    </Flex>
  );
};
export default Articles;
