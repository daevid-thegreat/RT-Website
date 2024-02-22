import { Flex, Text, GridItem, Grid } from "@chakra-ui/react";

const Bus = () => {
  return (
    <Flex
      bg={"white"}
      flexDir={"column"}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Text
        fontFamily={"clash"}
        fontSize={{ base: "40px", lg: "64px" }}
        color={"black100"}
        fontWeight={700}
        px={{ base: "16px", lg: "122px" }}
      >
        The Danfo Bus Experience
      </Text>
      <Text
        fontFamily={"manrope"}
        fontSize={{ base: "16px", lg: "24px" }}
        color={"black100"}
        fontWeight={{ base: 500, lg: 400 }}
        pb={"40px"}
        pl={{ base: "61px", lg: "243px" }}
        maxW={{ base: "340px", lg: "690px" }}
        w={"100%"}
        lineHeight={{ base: "19.2px", lg: "28.8px" }}
      >
        Explore impressive portfolios crafted by our talented members,
        showcasing their diverse skills and creativity. Get ready to
        be inspired!
      </Text>
      <Grid
        templateColumns={"1fr 1fr"}
        display={{ base: "flex", md: "grid" }}
        flexDir={"column"}
      >
        <GridItem
          flexDir={"column"}
          justifyContent={"flex-end"}
          w={"100%"}
          // maxW={{ base: "", lg: "558px" }}
          bg="yellow200"
          borderTop={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          borderBottom={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          borderRight={{
            base: "",
            md: "4px solid #111413",
          }}
          color={"black100"}
          h={{ base: "268px", lg: "282px" }}
          px={{ base: "16px", lg: "120px" }}
          pb={{ base: "24px", lg: "28px" }}
          display={"flex"}
          fontWeight={600}
        >
          <Text
            lineHeight={{ base: "39.36px", md: "49.2px" }}
            pb={"8px"}
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily={"clash"}
          >
            Masterclass
          </Text>
          <Text
            lineHeight={"21.86px"}
            pb={"8px"}
            fontSize={"16px"}
            fontFamily={"manrope"}
          >
            No filter, no holding back, ask your fellow roadtrippers
            burning questions
          </Text>
        </GridItem>
        <GridItem
          flexDir={"column"}
          justifyContent={"flex-end"}
          w={"100%"}
          // maxW={{ base: "", lg: "558px" }}
          bg="green300"
          borderTop={{
            base: "",
            md: "4px solid #111413",
          }}
          borderBottom={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          color={"black100"}
          h={{ base: "268px", lg: "282px" }}
          px={{ base: "16px", lg: "120px" }}
          pb={{ base: "24px", lg: "28px" }}
          display={"flex"}
          fontWeight={600}
        >
          <Text
            lineHeight={{ base: "39.36px", md: "49.2px" }}
            pb={"8px"}
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily={"clash"}
          >
            Spotlight
          </Text>
          <Text
            lineHeight={"21.86px"}
            pb={"8px"}
            fontSize={"16px"}
            fontFamily={"manrope"}
          >
            No filter, no holding back, ask your fellow roadtrippers
            burning questions
          </Text>
        </GridItem>
        <GridItem
          flexDir={"column"}
          justifyContent={"flex-end"}
          w={"100%"}
          // maxW={{ base: "", lg: "558px" }}
          bg="lilac200"
          // borderTop={{
          //   base: "2px solid #111413",
          //   md: "4px solid #111413",
          // }}
          borderBottom={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          borderRight={{
            base: "",
            md: "4px solid #111413",
          }}
          color={"black100"}
          h={{ base: "268px", lg: "282px" }}
          px={{ base: "16px", lg: "120px" }}
          pb={{ base: "24px", lg: "28px" }}
          display={"flex"}
          fontWeight={600}
        >
          <Text
            lineHeight={{ base: "39.36px", md: "49.2px" }}
            pb={"8px"}
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily={"clash"}
          >
            Hotseat Session
          </Text>
          <Text
            lineHeight={"21.86px"}
            pb={"8px"}
            fontSize={"16px"}
            fontFamily={"manrope"}
          >
            No filter, no holding back, ask your fellow roadtrippers
            burning questions
          </Text>
        </GridItem>
        <GridItem
          flexDir={"column"}
          justifyContent={"flex-end"}
          w={"100%"}
          bg="pink100"
          // borderTop={{
          //   base: "",
          //   md: "4px solid #111413",
          // }}
          borderBottom={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          color={"black100"}
          h={{ base: "268px", lg: "282px" }}
          px={{ base: "16px", lg: "120px" }}
          pb={{ base: "24px", lg: "28px" }}
          display={"flex"}
          fontWeight={600}
        >
          <Text
            lineHeight={{ base: "39.36px", md: "49.2px" }}
            pb={"8px"}
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily={"clash"}
          >
            AMA Session
          </Text>
          <Text
            lineHeight={"21.86px"}
            pb={"8px"}
            fontSize={"16px"}
            fontFamily={"manrope"}
          >
            No filter, no holding back, ask your fellow roadtrippers
            burning questions
          </Text>
        </GridItem>
        <GridItem
          flexDir={"column"}
          justifyContent={"flex-end"}
          w={"100%"}
          // maxW={{ base: "", lg: "558px" }}
          bg="blue200"
          // borderTop={{
          //   base: "2px solid #111413",
          //   md: "4px solid #111413",
          // }}
          borderBottom={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          borderRight={{
            base: "",
            md: "4px solid #111413",
          }}
          color={"black100"}
          h={{ base: "268px", lg: "282px" }}
          px={{ base: "16px", lg: "120px" }}
          pb={{ base: "24px", lg: "28px" }}
          display={"flex"}
          fontWeight={600}
        >
          <Text
            lineHeight={{ base: "39.36px", md: "49.2px" }}
            pb={"8px"}
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily={"clash"}
          >
            Book Club
          </Text>
          <Text
            lineHeight={"21.86px"}
            pb={"8px"}
            fontSize={"16px"}
            fontFamily={"manrope"}
          >
            No filter, no holding back, ask your fellow roadtrippers
            burning questions
          </Text>
        </GridItem>
        <GridItem
          flexDir={"column"}
          justifyContent={"flex-end"}
          w={"100%"}
          bg="lilac200"
          // borderTop={{
          //   base: "",
          //   md: "4px solid #111413",
          // }}
          borderBottom={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          color={"black100"}
          h={{ base: "268px", lg: "282px" }}
          px={{ base: "16px", lg: "120px" }}
          pb={{ base: "24px", lg: "28px" }}
          display={"flex"}
          fontWeight={600}
        >
          <Text
            lineHeight={{ base: "39.36px", md: "49.2px" }}
            pb={"8px"}
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily={"clash"}
          >
            Social Media Pod
          </Text>
          <Text
            lineHeight={"21.86px"}
            pb={"8px"}
            fontSize={"16px"}
            fontFamily={"manrope"}
          >
            No filter, no holding back, ask your fellow roadtrippers
            burning questions
          </Text>
        </GridItem>
        <GridItem
          flexDir={"column"}
          justifyContent={"flex-end"}
          w={"100%"}
          bg="green200"
          borderBottom={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          borderRight={{
            base: "",
            md: "4px solid #111413",
          }}
          color={"black100"}
          h={{ base: "268px", lg: "282px" }}
          px={{ base: "16px", lg: "120px" }}
          pb={{ base: "24px", lg: "28px" }}
          display={"flex"}
          fontWeight={600}
        >
          <Text
            lineHeight={{ base: "39.36px", md: "49.2px" }}
            pb={"8px"}
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily={"clash"}
          >
            Open Source
          </Text>
          <Text
            lineHeight={"21.86px"}
            pb={"8px"}
            fontSize={"16px"}
            fontFamily={"manrope"}
          >
            No filter, no holding back, ask your fellow roadtrippers
            burning questions
          </Text>
        </GridItem>
        <GridItem
          flexDir={"column"}
          justifyContent={"flex-end"}
          w={"100%"}
          bg="yellow200"
          // borderTop={{
          //   base: "",
          //   md: "4px solid #111413",
          // }}
          borderBottom={{
            base: "2px solid #111413",
            md: "4px solid #111413",
          }}
          color={"black100"}
          h={{ base: "268px", lg: "282px" }}
          px={{ base: "16px", lg: "120px" }}
          pb={{ base: "24px", lg: "28px" }}
          display={"flex"}
          fontWeight={600}
        >
          <Text
            lineHeight={{ base: "39.36px", md: "49.2px" }}
            pb={"8px"}
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily={"clash"}
          >
            Playlist
          </Text>
          <Text
            lineHeight={"21.86px"}
            pb={"8px"}
            fontSize={"16px"}
            fontFamily={"manrope"}
          >
            No filter, no holding back, ask your fellow roadtrippers
            burning questions
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
};
export default Bus;
