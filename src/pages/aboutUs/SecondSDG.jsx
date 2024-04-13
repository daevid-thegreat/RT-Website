import { Box, Flex, Text, Image } from "@chakra-ui/react";

const SecondSDG = () => {
  return (
    <Flex
      mt={5}
      p={{ base: 3, lg:5 }}
      flexDir="column"
      bg={"pink300"}
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box>
          <Text
            fontFamily="clash"
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={700}
            // pb={{ base: "17px", md: "40px" }}
            pt={{ base: "48px", md: "20px" }}
            pl={{ base: "none", md: "20px" }}
          >
            Our Commitment - SDG 8
          </Text>

          <Text
            fontFamily={"clash"}
            fontSize={{ base: "12px", md: "16px", lg: "20px" }}
            fontWeight={300}
            pb={"17px"}
            pl={"20px"}
            color={"red"}
          >
            DECENT WORK AND ECONOMIC GROWTH
          </Text>
          
          <Text
            fontFamily="manrope"
            fontSize={{ base: "14px", lg: "20px" }}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
            w={"100%"}
            pl={{ base: "none", md: "20px" }}
            pr={{ base: "none", md: "20px" }}

      >
        RoadTrip Community's vision of seeing at least 50% of our members earning $10,000 per month aligns with the United Nations Sustainable Development Goal 8 (Decent Work and Economic Growth). Through our support programs, we empower individuals to maximize job opportunities, become financially savvy, and scale their earnings, contributing to creating a more prosperous and equitable society.
      </Text>

        </Box>
        
        <Image
            src="/images/SDG8.png"
            alt="Green double couch with wooden legs"
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
            objectFit="cover"
            maxW={"908px"}
            w={"100%"}
            m={"auto"}
            mt={1}
          />

      </Flex>

      
    </Flex>
  );
};

export default SecondSDG;
