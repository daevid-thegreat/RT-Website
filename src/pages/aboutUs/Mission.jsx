import { Flex, Text, Image, Box } from "@chakra-ui/react";

const Mission = () => {
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
            pb={{ base: "17px", md: "40px" }}
            pt={{ base: "48px", md: "20px" }}
            pl={{ base: "none", md: "20px" }}
          >
            The Mission
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
          Build an exclusive space where members set clear-cut goals and receive the support to achieve them. Through accountability partnerships, buddy groups, and various collaborations, we help to nurture personal and professional growth. We aim to catalyze individual success within the design and tech space.
      
        </Text>

        </Box>


      <Image
            src="/images/Mission.png"
            alt="Green double couch with wooden legs"
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
            objectFit="cover"
            maxW={"908px"}
            w={"100%"}
            // h={{ base: "360px", md: "480px" }}
            m={"auto"}
            mt={1}
          />


      </Flex>
    </Flex>
  );
};

export default Mission;
