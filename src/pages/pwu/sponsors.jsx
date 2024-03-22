import { Flex, Text, Box } from "@chakra-ui/react";

const Sponsors = () => {
  return (
    <Flex
      // pt={{ base: "89px", lg: "106px" }}
      pb={{ base: "42px", lg: "40px" }}
      // px={{ base: "20px", lg: "107px" }}
      flexDir={"column"}
      w={"100%"}
      overflowX={"hidden"}
    >
      <Box>
        <Text
          p={{ base: "20px", lg: "80px" }}
          fontFamily={"clash"}
          fontWeight={500}
          color={"black100"}
          backgroundColor={"orange"}
          fontSize={{ base: "20px", lg: "50px" }}
          >
            Thank you for considering a partnership or sponsorship with the RoadTrip Community. By joining forces with us, you are committing to supportingsupport a vibrant and inclusive community in   nurturing talent and fostering success in the design and tech space.
        </Text>
      </Box>
      
    </Flex>
  );
};
export default Sponsors;