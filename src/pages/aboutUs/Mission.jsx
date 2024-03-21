import { Flex, Text } from "@chakra-ui/react";

const Mission = () => {
  return (
    <Flex
      mt={5}
      p={{ base: 3, lg:5 }}
      flexDir="column"
      bg={"pink300"}
    >
      <Text
        fontFamily="clash"
        fontSize={{ base: "24px", md: "32px" }}
        fontWeight={700}
        pb={{ base: "17px", md: "40px" }}
        pt={{ base: "48px", md: "64px" }}
      >
        The Vision
      </Text>
      <Text
        fontFamily="manrope"
        fontSize={{ base: "14px", lg: "20px" }}
        fontWeight={600}
        pb={{ base: "16px", md: "40px" }}

      >
        Our vision is to cultivate a thriving community where at least 50% of our members earn $10,000 monthly. This vision is more than a financial goal; it encompasses providing members with the necessary tools and support to maximize job opportunities, financial literacy, negotiation skills, and overall earnings. RoadTrip aspires to be a driving force in creating success stories for its members.
      </Text>
    </Flex>
  );
};

export default Mission;
