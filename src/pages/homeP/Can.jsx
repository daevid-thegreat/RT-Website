import { Center, Flex, Heading, Text } from "@chakra-ui/react";

const Can = () => {
  return (
    <Flex
      as="section"
      pt={{ base: "89px", lg: "106px" }}
      justifyContent="center" // Changed to use Chakra UI's justifyContent prop directly
    >
      <Flex
        flexDir={{ base: "column", md: "row", lg: "row" }}
        justifyContent="center" // Changed to use Chakra UI's justifyContent prop directly
        alignItems="center" // Added alignItems prop to center items vertically
        textAlign="Center"
        margin={10}
        mb={20}
        pr={10}
        pb={10}

      >
        <div
        m={30}
        >
          <Heading
          fontFamily="clash"
          fontSize={{ base: "45px", lg: "60px" }}
          fontWeight={700}
          >
            400+
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "14px", lg: "25px" }}
            pl={{base:"15px" ,lg:"30px"}}
            pr={30}
          
          >
            <strong>Community members</strong> with multi-disciplinary interests and skills across various Design and Tech professions
          </Text>
        </div>

        <div>
          <Heading
            fontFamily="clash"
            fontSize={{ base: "45px", lg: "60px" }}
            fontWeight={700}
            pt={{ base: "30px", lg: "none" }}
          >
            30+
          </Heading>


          <Text
            fontSize={{ base: "18px", lg: "25px" }}
            pl={{base:"15px" ,lg:"30px"}}
            pr={30}
          >
            active pairs of <strong>Accountability Partners</strong> with solid feedback on growth and career progress
          </Text>
        </div>

        <div>
          <Heading
          fontFamily="clash"
          fontSize={{ base: "45px", lg: "60px" }}
          fontWeight={700}
          pt={{ base: "30px", lg: "none" }}
          >
            20%
          </Heading>
          
          <Text
            fontSize={{ base: "18px", lg: "22px" }}
            pl={{base:"15px" ,lg:"30px"}}
            pr={30}
          >
            of <strong>newly onboarded members</strong> land their first gig/ internship/ job in the first 6 months of joining the closed community
          </Text>
        </div>
      </Flex>
    </Flex>
  );
};

export default Can;
