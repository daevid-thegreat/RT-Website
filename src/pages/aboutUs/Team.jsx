import {
  Flex,
  Text,
  Card,
  CardBody,
  Stack,
  Image,
  Link,
  Icon,
  Heading,
  Divider,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { auTData } from "./TData";
import { firstauTData } from "./STData";
import React, { useState } from "react";

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <>
      <Flex p={{ base: 3, lg: 20 }} flexDir="column" bg={"#DFE4FF"} mt="3rem">
        <Text
          fontFamily={"clash"}
          fontWeight={700}
          color={"black100"}
          fontSize={["40px", "40px", "64px"]}
          textAlign={"center"}
        >
          Meet The Team
        </Text>

        <Text
          fontFamily={"manrope"}
          fontSize={["16px", "16px", "24px"]}
          fontWeight={700}
          color={"black200"}
          textAlign={"center"}
          mb="4rem"
          lineHeight={"21.86px"}
        >
          Passionate leaders driving our community’s mission
        </Text>

        <Flex w={["100%", '100%', "556px"]} mx={"auto"} minH="304px">
          {firstauTData.map((data, index) => {
            const { text2, Xlink, Llink, image, heading, text } = data;
            return (
              <Card
                direction={["column", "column", "row"]}
                overflow="hidden"
                mt={5}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(index)}
                display={hoveredIndex === index ? "flex" : "none"}
                h="100%"
                borderRadius={"none"}
                border={"1px solid #111413"}
              >
                <Image
                  w={["100%", '100%', "200px"]}
                  objectFit={"cover"}
                  src={image}
                  alt="MsVick"
                  display={hoveredIndex === index ? "block" : "none"}
                />

                <Stack m={{ base: 1, lg: 5 }} w={["100%", "356px", "100%"]}>
                  <CardBody display={hoveredIndex === index ? "block" : "none"}>
                    <Heading
                      fontSize={"24px"}
                      fontFamily={"clash"}
                      fontWeight={600}
                    >
                      {heading}
                    </Heading>

                    <Text
                      fontFamily={"manrope"}
                      fontSize={"16px"}
                      fontWeight={600}
                      mb="10px"
                    >
                      {text}
                    </Text>

                    <Divider borderWidth={1} borderColor="black" />

                    <Text
                      py="5"
                      fontFamily={"manrope"}
                      fontSize={"12px"}
                      fontWeight={400}
                    >
                      {text2}
                    </Text>

                    <Flex alignItems={"center"} gap={"10px"}>
                      <Flex
                        mb={"2.7px"}
                        mr={"2.7px"}
                        bgColor={"#f6f7f7"}
                        alignItems={"center"}
                        gap={"10px"}
                      >
                        <Link
                          px={{ base: "8px", lg: "7px" }}
                          href={Xlink}
                          isExternal
                          border={"0.74px solid #111413"}
                          h="40px"
                          w={"40px"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          bg={"transparent"}
                        >
                          <Icon as={FaTwitter} w={"24px"} h={"20px"} />
                        </Link>
                        <Link
                          borderRight={"1px solid #111413"}
                          px={"8px"}
                          py={"10px"}
                          href={Llink}
                          isExternal
                          border={"0.74px solid #111413"}
                          h="40px"
                          w={"40px"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Icon as={FaLinkedin} w={"24px"} h={"20px"} />
                        </Link>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Stack>
              </Card>
            );
          })}
        </Flex>

        <Box
          mt={"6rem"}
          w="100%"
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          mx="auto"
        >
          <Flex
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap={["nowrap", "nowrap", "wrap", "wrap", "wrap"]}
            gap="10px"
            minWidth="min-content"
            pb="10px" // Add some padding at the bottom to ensure visibility
          >
            {auTData.map((data, index) => {
              const { image, heading, text, Xlink, Llink } = data;
              return (
                <Box flexShrink={0} w="140px" h="182px" key={index}>
                  <Flex
                    bgImage={image}
                    bgColor="#f6f7f7"
                    bgSize="cover"
                    border="1px solid black"
                    h="108px"
                    boxShadow="2px 2px 0 0 #231f20"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                    mb="6px"
                    alt="MsVick"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(index)}
                  >
                    {/* ... rest of the Flex content ... */}
                  </Flex>

                  <Heading
                    fontSize="16px"
                    fontWeight={600}
                    fontFamily="clash"
                    mt="1rem"
                  >
                    {heading}
                  </Heading>

                  <Text fontSize="10px" fontWeight={600} fontFamily="manrope">
                    {text}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Team;
