import {
  Flex,
  Text,
  Link,
  Heading,
  SimpleGrid,
  Box,
  Grid,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../../components/Button";
import { auMent, roles } from "./Ment";
import { useState } from "react";

const Mentors = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "repeat(2, 1fr)",
      }}
      gap={"36px"}
      bg={"white"}
      fontFamily={"manrope"}
      py={{ base: "80px", lg: "43px" }}
      px={{ base: 3, lg: 20 }}
    >
      <Box
        pb={{ base: "", lg: "33px" }}
        w={"100%"}
      >
        <Text fontSize={"24px"} fontWeight={800}>
          In-house Masterclass Facilitators & Mentors:
        </Text>
        <Text fontSize={"16px"} fontWeight={400}>
          Meet our experienced professionals guiding our members
          toward success.
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
      <SimpleGrid
        minChildWidth="99px"
        alignContent={"flex-start"}
        justifyContent={"space-around"}
        gap={{ base: "14px", lg: "12px" }}
      >
        {auMent.map((data, index) => {
          const { heading, image, color } = data;
          return (
            <Box
              w={"100%"}
              maxW={"104px"}
              mx={"auto"}
              key={index}
              h={{lg:"118px"}}
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
                // pb={"3px"}
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
    </Grid>
  );
};
export default Mentors;
