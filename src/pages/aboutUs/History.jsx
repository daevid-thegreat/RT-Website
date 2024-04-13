import { Flex, Text, Image } from "@chakra-ui/react";

const History = () => {
  return (
    <Flex
      bg={"pink300"}
      flexDir={"column"}
      px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      {/* <Text
        fontFamily={"clash"}
        fontSize={{ base: "40px", lg: "64px" }}
        color={"black100"}
        fontWeight={700}
        pb={{ base: "34px", lg: "56px" }}
      >
        The RoadTrippers Experience
      </Text> */}
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"20px"}
        alignItems={"center"}
      >
        <Flex
          bg={"green300"}
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
            Our History
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", lg: "16px" }}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Founded on April 12, 2021, RoadTrip Community has a rich history rooted in the design track at Zuri Training. Initially a design-focused community, it has transformed into a home for creatives with diverse skills and interests, expanding its reach to encompass members from Nigeria, the UK, Canada and the US. On this road trip, the journey has been one of evolution, adaptability, and a commitment to empowering its members.
          </Text>
          
          <Image
            src="/images/History.png"
            alt="Green double couch with wooden legs"
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
            objectFit="cover"
            maxW={"508px"}
            w={"100%"}
            h={{ base: "360px", md: "480px" }}
            m={"auto"}
            mt={1}
          />

        </Flex>
        <Flex
          bg={"#FAD5CE"}
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
            The Vision
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", md: "16px" }}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Our vision is to cultivate a thriving community where at least 50% of our members earn $10,000 monthly. This vision is more than a financial goal; it encompasses providing members with the necessary tools and support to maximize job opportunities, financial literacy, negotiation skills, and overall earnings. RoadTrip aspires to be a driving force in creating success stories for its members.
          </Text>
           <Image
            src="/images/Vision.png"
            alt="Green double couch with wooden legs"
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
            objectFit="cover"
            maxW={"508px"}
            w={"100%"}
            h={{ base: "360px", md: "480px" }}
            m={"auto"}
            mt={1}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default History;
