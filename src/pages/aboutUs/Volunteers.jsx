import {
  Flex,
  Text,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import { auVol } from "./Ment";

const Volunteers = () => {
  return (
    <Box py="100px">
      <Heading
        fontSize={["24px", "24px", "32px"]}
        fontWeight={600}
        lineHeight={["29.52px", '29.52px', "39.36px"]}
        fontFamily={"clash"}
        color={"#111413"}
        textAlign={["left", "left", "center"]}
        px="10px"
      >
        Over 40 Facilitators, Mentors and Volunteers{" "}
      </Heading>
      <Text
        fontSize={"16px"}
        fontWeight={400}
        fontFamily={"manrope"}
        color={"#111413"}
        textAlign={["left", "center"]}
        px="10px"
      >
        Some of our dedicated individuals supporting our community initiatives.
      </Text>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        maxW={["100%", '100%', "950px"]}
        mx="auto"
        gap={2}
        mt={'4rem'}
      >
        {auVol.map(({ image, heading }, idx) => (
          <Flex
            minW="139px"
            h="64px"
            alignItems={"center"}
            justifyContent={"center"}
            border={"1px solid #111413"}
            fontSize={"18px"}
            fontWeight={600}
            lineHeight={"24.59px"}
            gap={"8px"}
            fontFamily={"manrope"}
            key={idx}
            px="10px"
            textTransform={'uppercase'}
          >
            <Image src={image} alt={heading} w={"32px"} h="32px" /> {heading}
          </Flex>
        ))}
      </Flex>
      {/* <GridItem area={"image"}>
        <SimpleGrid
          minChildWidth="99px"
          alignContent={"flex-start"}
          justifyContent={"space-around"}
          gap={{ base: "14px", lg: "12px" }}
        >
          {auVol.map((data, index) => {
            const { heading, image, color } = data;
            return (
              <Box
                w={"100%"}
                maxW={"104px"}
                mx={"auto"}
                key={index}
                h={"135px"}
              >
                <Flex
                  border={"1px solid black"}
                  bgColor={color}
                  h={"104px"}
                  cursor={"pointer"}
                  boxShadow={"2px 2px 0 0 #231f20"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mb={"6px"}
                  pos={"relative"}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image src={image} w={"64px"} h={"64px"} />
                  <Flex
                    borderTop={"1px solid #111413"}
                    borderLeft={"1px solid #111413"}
                    pos={"absolute"}
                    right={"0%"}
                    bottom={"0%"}
                    display={{
                      base: "flex",
                      lg: hoveredIndex === index ? "flex" : "none",
                    }}
                    // bgColor={"#f6f7f7"}
                  >
                    <Link
                      borderRight={"1px solid #111413"}
                      px={{ base: "8px", lg: "5px" }}
                    >
                      <Icon as={FaTwitter} fontSize={"10px"} />
                    </Link>
                    <Link px={{ base: "8px", lg: "5px" }}>
                      <Icon as={FaLinkedin} fontSize={"10px"} />
                    </Link>
                  </Flex>
                </Flex>
                <Heading
                  fontSize={"12px"}
                  fontWeight={600}
                  fontFamily={"clash"}
                  textTransform={"capitalize"}
                  pb={"3px"}
                  display={{
                    base: "block",
                    lg: hoveredIndex === index ? "block" : "none",
                  }}
                >
                  {heading}
                </Heading>
              </Box>
            );
          })}
        </SimpleGrid>
      </GridItem>
      <GridItem area={"text"}>
        <Box pb={{ base: "", lg: "33px" }} w={"100%"}>
          <Text fontSize={"24px"} fontWeight={800}>
            Some of Our Volunteers
          </Text>
          <Text fontSize={"16px"} fontWeight={400}>
            Discover the dedicated individuals supporting our
            community initiatives.
          </Text>
          <Flex
            rowGap={"16px"}
            flexWrap={"wrap"}
            columnGap={"8px"}
            mt={{ base: "32px", lg: "24px" }}
          >
            {roles.map((role, index) => {
              return (
                <Button
                  key={index}
                  bg={"transparent"}
                  border={"1px solid #111413"}
                  borderRadius={"40px"}
                  py={"8px"}
                  px={"32px"}
                  text={role}
                  w={""}
                  color={"black200"}
                  hoverColor={"white"}
                  fontFamily={"manrope"}
                />
              );
            })}
          </Flex>
        </Box>
      </GridItem> */}
    </Box>
  );
};
export default Volunteers;
