import { Flex, Text } from "@chakra-ui/react";

const SecondSDG = () => {
  return (
    <Flex
      mt={5}
      p={{ base: 3, lg:5 }}
      flexDir="column"
      bg={"pink300"}
    >
      <Text
        fontFamily="clash"
        fontSize={{ base: "20px", md: "26px", lg: "32px" }}
        fontWeight={700}
        pb={{ base: "17px", md: "40px" }}
        pt={{ base: "48px", md: "64px" }}
      >
        Our Commitment - SDG 8
      </Text>
      <Text
        fontFamily="manrope"
        fontSize={{ base: "14px", lg: "20px" }}
        fontWeight={600}
        pb={{ base: "16px", md: "40px" }}

      >
        RoadTrip Community's vision of seeing at least 50% of our members earning $10,000 per month aligns with the United Nations Sustainable Development Goal 8 (Decent Work and Economic Growth). Through our support programs, we empower individuals to maximize job opportunities, become financially savvy, and scale their earnings, contributing to creating a more prosperous and equitable society.
      </Text>
    </Flex>
  );
};

export default SecondSDG;
