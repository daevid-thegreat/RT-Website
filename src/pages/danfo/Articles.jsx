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
        fontSize={{ base: "40px", lg: "64px" }}
        color={"black100"}
        fontWeight={700}
      >
        Articles of the day
      </Text>
      <Text
        fontFamily={"manrope"}
        fontSize={{ base: "16px", lg: "24px" }}
        color={"black100"}
        fontWeight={{ base: 500, lg: 400 }}
        pb={"40px"}
        pl={{ base: "45px", lg: "121px" }}
        maxW={{ base: "340px", lg: "690px" }}
        w={"100%"}
        lineHeight={{ base: "19.2px", lg: "28.8px" }}
      >
        Gain insights, tips, and entertaining perceptions from our
        articles of the day written by RoadTrippers
      </Text>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={"16px"}
        alignItems={"center"}
      >
        <Flex
          h={"352px"}
          maxW={"389px"}
          w={"100%"}
          border={{
            base: "2px solid #111413",
            lg: "4px solid #111413",
          }}
          bgImage={"images/danfo.webp"}
          boxShadow={"352px 352px #11131286 inset"}
          // bgGradient={"linear(#fff 0%, #111312 100%)"}
          // bgBlendMode={'overlay'}
          bgSize={"cover"}
          px={{ base: "16px", lg: "32px" }}
          pb={{ base: "16px", lg: "32px" }}
          justifyContent={"flex-end"}
          flexDir={"column"}
          color={"white"}
        >
          <Text
            fontSize={"16px"}
            fontWeight={600}
            fontFamily={"clash"}
          >
            Article title goes in here ...
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Author’s name goes in here
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Date article was published
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Source of article
          </Text>
        </Flex>
        <Flex
          h={"352px"}
          maxW={"389px"}
          w={"100%"}
          border={{
            base: "2px solid #111413",
            lg: "4px solid #111413",
          }}
          bgImage={"images/danfo.webp"}
          boxShadow={"352px 352px #11131286 inset"}
          // bgGradient={"linear(#fff 0%, #111312 100%)"}
          // bgBlendMode={'overlay'}
          bgSize={"cover"}
          px={{ base: "16px", lg: "32px" }}
          pb={{ base: "16px", lg: "32px" }}
          justifyContent={"flex-end"}
          flexDir={"column"}
          color={"white"}
        >
          <Text
            fontSize={"16px"}
            fontWeight={600}
            fontFamily={"clash"}
          >
            Article title goes in here ...
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Author’s name goes in here
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Date article was published
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Source of article
          </Text>
        </Flex>
        <Flex
          h={"352px"}
          maxW={"389px"}
          w={"100%"}
          border={{
            base: "2px solid #111413",
            lg: "4px solid #111413",
          }}
          bgImage={"images/danfo.webp"}
          boxShadow={"352px 352px #11131286 inset"}
          // bgGradient={"linear(#fff 0%, #111312 100%)"}
          // bgBlendMode={'overlay'}
          bgSize={"cover"}
          px={{ base: "16px", lg: "32px" }}
          pb={{ base: "16px", lg: "32px" }}
          justifyContent={"flex-end"}
          flexDir={"column"}
          color={"white"}
        >
          <Text
            fontSize={"16px"}
            fontWeight={600}
            fontFamily={"clash"}
          >
            Article title goes in here ...
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Author’s name goes in here
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Date article was published
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"manrope"}
          >
            Source of article
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Articles;
