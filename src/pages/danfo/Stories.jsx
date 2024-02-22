import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

const Stories = () => {
  return (
    <Flex
      bg={"lilac200"}
      flexDir={"column"}
      px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Text
        fontFamily={"clash"}
        fontSize={{ base: "40px", lg: "64px" }}
        color={"black100"}
        fontWeight={700}
      >
        RT Stories
      </Text>
      <Text
        fontFamily={"manrope"}
        fontSize={{ base: "16px", md: "24px" }}
        color={"black100"}
        fontWeight={{ base: 500, md: 400 }}
        pb={"40px"}
        pl={{ base: "45px", md: "121px" }}
        maxW={{ base: "340px", md: "690px" }}
        w={"100%"}
        lineHeight={{ base: "19.2px", md: "28.8px" }}
      >
        Discover inspiring stories, showcasing the journeys and
        successes of our community members.
      </Text>
      <Grid
        templateColumns={"repeat(6, 1fr)"}
        display={{ base: "flex", lg: "grid" }}
        gap={"16px"}
        flexDir={"column"}
      >
        <GridItem
          w={"100%"}
          // maxW={{ base: "", lg: "558px" }}
          bg="green100"
          colSpan={3}
          border={"4px solid #111413"}
          color={"white"}
          fontSize={{ base: "24px", md: "40px" }}
          fontFamily={"clash"}
          fontWeight={600}
          h={{ base: "230px", lg: "293px" }}
          px={{ base: "24px", lg: "56px" }}
          pb={{ base: "32px", lg: "56px" }}
          alignItems={"flex-end"}
          display={"flex"}
        >
          <Text
            maxW={{ base: "", lg: "352px" }}
            w={"100%"}
            lineHeight={{ base: "19.2px", md: "44px" }}
          >
            Life of a techie in the trenches
          </Text>
        </GridItem>
        <GridItem
          w={"100%"}
          // maxW={{ base: "", lg: "558px" }}
          bg="yellow100"
          colSpan={3}
          border={"4px solid #111413"}
          color={"black100"}
          h={{ base: "230px", lg: "293px" }}
          px={{ base: "24px", lg: "56px" }}
          pb={{ base: "32px", lg: "56px" }}
          alignItems={"flex-end"}
          display={"flex"}
        >
          <Text
            maxW={{ base: "", lg: "386px" }}
            w={"100%"}
            fontSize={{ base: "24px", md: "40px" }}
            fontFamily={"clash"}
            fontWeight={600}
            lineHeight={{ base: "19.2px", md: "44px" }}
          >
            What it is like blooming late in tech
          </Text>
        </GridItem>
        <GridItem
          w={"100%"}
          // maxW={{ base: "", lg: "1196px" }}
          colSpan={6}
          bg="lilac100"
          border={"4px solid #111413"}
          color={"black100"}
          fontSize={{ base: "24px", md: "40px" }}
          fontFamily={"clash"}
          fontWeight={600}
          h={{ base: "230px", lg: "293px" }}
          px={{ base: "24px", lg: "56px" }}
          pb={{ base: "32px", lg: "56px" }}
          alignItems={"flex-end"}
          display={"flex"}
        >
          <Text
            maxW={{ base: "", lg: "552px" }}
            w={"100%"}
            lineHeight={{ base: "19.2px", md: "44px" }}
          >
            What you didn’t know about RoadTrip Community
          </Text>
        </GridItem>
        <GridItem
          w={"100%"}
          // maxW={{ base: "", lg: "558px" }}
          bg="blue100"
          colSpan={4}
          border={"4px solid #111413"}
          color={"white"}
          fontSize={{ base: "24px", md: "40px" }}
          fontFamily={"clash"}
          fontWeight={600}
          h={{ base: "230px", lg: "293px" }}
          px={{ base: "24px", lg: "56px" }}
          pb={{ base: "32px", lg: "56px" }}
          alignItems={"flex-end"}
          display={"flex"}
        >
          <Text
            maxW={{ base: "", lg: "352px" }}
            w={"100%"}
            lineHeight={{ base: "19.2px", md: "44px" }}
          >
            Life of a techie in the trenches
          </Text>
        </GridItem>
        <GridItem
          w={"100%"}
          // maxW={{ base: "", lg: "558px" }}
          bg="pink100"
          border={"4px solid #111413"}
          color={"black100"}
          colSpan={2}
          fontFamily={"clash"}
          fontWeight={600}
          h={{ base: "230px", lg: "293px" }}
          px={{ base: "24px", lg: "56px" }}
          pb={{ base: "32px", lg: "56px" }}
          alignItems={"flex-end"}
          display={"flex"}
        >
          <Text
            w={"100%"}
            lineHeight={{ base: "19.2px", md: "44px" }}
            fontSize={{ base: "24px", md: "40px" }}
          >
            Moms in tech
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
};
export default Stories;
