import { Flex, Text, Image, Box } from "@chakra-ui/react";

const Mission = () => {
  return (
    <Flex
      flexDir="column"
      bg={"pink300"}
      w="100%"
      maxWidth={"1200px"}
      mx={"auto"}
      mt={"1rem"}
      pl={'20px'}
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
            pb={{ base: "17px", md: "40px" }}
            pt={{ base: "48px", md: "20px" }}
            pl={{ base: "none", md: "20px" }}
          >
            The Mission
          </Text>

          <Text
            fontFamily="manrope"
            fontSize={"16px"}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
            w={["100%", "100%", '100%', '100%', "508px"]}
            pl={{ base: "none", md: "20px" }}
            pr={{ base: "none", md: "20px" }}
            textAlign={"justify"}
          >
            <strong>
              Build an exclusive space where members set clear-cut goals and
              receive the support to achieve them.
            </strong>{" "}
            Through accountability partnerships, buddy groups, and various
            collaborations, we help to nurture personal and professional growth.
            We aim to catalyze individual success within the design and tech
            space.
          </Text>
        </Box>

        <Image
          src="/images/Mission.png"
          alt="Green double couch with wooden legs"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="black"
          mt={1}
          w={["100%", "100%", "508px"]}
          h="272px"
        />
      </Flex>
    </Flex>
  );
};

export default Mission;
