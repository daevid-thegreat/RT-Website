import { Flex, Image, Text } from "@chakra-ui/react";

const Roadtrippers = () => {
  return (
    <Flex
      bg={"pink300"}
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
        pb={{ base: "34px", lg: "56px" }}
      >
        The RoadTrippers Experience
      </Text>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"20px"}
        alignItems={"center"}
      >
        <Flex
          bg={"lilac300"}
          maxW={"588px"}
          h={{ base: "675px", md: "866px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={"40px"}
        >
          <Text
            fontFamily={"clash"}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={700}
            pb={"17px"}
            pt={{ base: "48px", md: "64px" }}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Our Value Proposition
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", md: "16px" }}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            RoadTrip Community sets itself apart through two key
            elements: Buddy Groups and Accountability Partnerships.
            These features promote diversity through relatability and
            togetherness among members, creating a supportive and
            engaging atmosphere. The community is a place where
            individuals can connect on a deeper level, fostering
            meaningful relationships and collaboration.
          </Text>
          <Flex
            bg={"#E1E6E3"}
            maxW={"508px"}
            w={"100%"}
            h={{ base: "373px", md: "522px" }}
            borderTop={"3px solid #000"}
            borderBottom={"3px solid #000"}
            m={"auto"}
            overflow={"hidden"}
          >
            <Image
              src={"images/value.webp"}
              alt={"roadtrippers"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
          </Flex>
        </Flex>
        <Flex
          bg={"blue300"}
          maxW={"588px"}
          h={{ base: "675px", md: "866px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={{ base: "48px", md: "40px" }}
        >
          <Text
            fontFamily={"clash"}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={700}
            pb={"17px"}
            pt={{ base: "48px", md: "64px" }}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Our Support System
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", md: "16px" }}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Our support system is in three ways: professionally,
            mentally, and socially. Professionally, we have
            MasterClass sessions, monthly book reviews, quarterly
            projects, and weekly challenges. For mental well-being, we
            offer quarterly sessions with a licensed Emotional
            Intelligence and Life Coach. Socially, we have weekly
            virtual hangouts, Village Meetings, and AMA (Ask Me
            Anything) sessions.
          </Text>
          <Flex
            bg={"#E1E6E3"}
            maxW={"508px"}
            w={"100%"}
            h={{ base: "373px", md: "522px" }}
            borderTop={"3px solid #000"}
            borderBottom={"3px solid #000"}
            // alignItems={"center"}
            m={"auto"}
            overflow={"hidden"}
          >
            <Image
              src={"images/support.webp"}
              alt={"roadtrippers"}
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Roadtrippers;
