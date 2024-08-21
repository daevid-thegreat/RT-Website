import { Flex, Text, Image } from "@chakra-ui/react";

const History = () => {
  return (
    <Flex
      flexDir={"column"}
      px={{ base: "16px", lg: "122px" }}
      pt={{ base: "56px", lg: "80px" }}
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
      >
        <Flex
          bg={"#FEF9EC"}
          maxW={['100%', '100%', '100%', '100%', "588px"]}
          h={{ base: "675px", md: "866px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={"40px"}
          alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-start', "center"]}
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
            textAlign={"justify"}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Founded on April 12, 2021, RoadTrip Community started as a
            design-focused community, and evolved into a{" "}
            <strong>
              home for creatives with diverse skills and interests
            </strong>
            , expanding its reach to encompass members from Nigeria, the UK,
            Canada and the US. Our journey is characterized by growth,
            flexibility, and a steadfast dedication to empowering our community
            members.
          </Text>

          <Image
            src="/images/History.png"
            alt="Green double couch with wooden legs"
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
            objectFit="cover"
            maxW={[ "508px"]}
            w={"100%"}
            h={{ base: "360px", md: "480px" }}
            m={"auto"}
            mt={1}
          />
        </Flex>
        <Flex
          bg={"#FAD5CE"}
          mmaxW={['100%', '100%', '100%', '100%', "588px"]}
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
            textAlign={'justify'}
          >
            <strong>
              Cultivate a thriving community with at least 50% of members
              earning $10,000 monthly
            </strong>
            . It is more than a financial goal; it encompasses providing members
            with the necessary tools and support to maximize job opportunities
            and master financial literacy and proper negotiation skills.
            RoadTrip aspires to be a driving force in creating success stories
            for its members.
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
