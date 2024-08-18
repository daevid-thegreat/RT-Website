import { Box, Flex, Text, Image } from "@chakra-ui/react";

const SecondSDG = () => {
  return (
    <Flex
      flexDir="column"
      bg={"pink300"}
      w="100%"
      maxWidth={"1200px"}
      mx={"auto"}
      mt={"1rem"}
      pl={['20px', '40px']}
      pr={'40px'}
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        w="100%"
        py="20px"
        justifyContent={"space-between"}
        
      >
        <Box>
          <Text
            fontFamily="clash"
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={700}
            pt={{ base: "48px", md: "20px" }}
          >
            Our Commitment - SDG 8
          </Text>

          <Text
            fontFamily={"clash"}
            fontSize={'16px'}
            fontWeight={300}
            pb={"17px"}
            color={"#752A12"}
            letterSpacing={'-2%'}
          >
            DECENT WORK AND ECONOMIC GROWTH
          </Text>

          <Text
            fontFamily="manrope"
            fontSize={"16px"}
            fontWeight={400}
            pb={{ base: "16px", md: "40px" }}
            w={['100%', '100%', '100%', '100%', "508px"]}
            pr={{ base: "none", md: "20px" }}
            textAlign={"justify"}
          >
            RoadTrip {"Community's"} vision of seeing at least 50% of our
            members earning $10,000 per month aligns with the United Nations
            Sustainable Development Goal 8 (Decent Work and Economic Growth).
            Through our support programs, we empower individuals to maximize job
            opportunities, become financially savvy, and scale their earnings,
            contributing to creating a more prosperous and equitable society.
          </Text>
        </Box>

        <Image
          src="/images/SDG8.png"
          alt="Green double couch with wooden legs"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="black"
          mt={1}
          w={['100%', '100%', '508px']}
          h="272px"
        />
      </Flex>
    </Flex>
  );
};

export default SecondSDG;
