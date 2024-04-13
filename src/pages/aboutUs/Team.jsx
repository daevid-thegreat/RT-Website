import { Flex, Text, Card, CardBody, Stack, Image, Link, Icon, Heading, Divider, SimpleGrid, Box } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { auTData } from "./TData";
import { firstauTData } from "./STData";
import React, { useState } from "react";

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Flex p={{ base: 3, lg: 20 }} flexDir="column" bg={"blue300"}>
        <Text
          fontFamily={"clash"}
          fontWeight={700}
          color={"black100"}
          fontSize={{ base: "40px", lg: "60px" }}
        >
          Meet The Team
        </Text>

        <Text
          fontFamily={"manrope"}
          fontSize={{ base: 12, lg: 24 }}
          fontWeight={700}
          color={"black200"}
        >
          The Excos - Meet the passionate leaders driving <br /> RoadTrip's mission.
        </Text>

        <Flex
        // display={{base:"none", lg:"flex"} }
        >
          {firstauTData.map((data, index) => {
            const { text2, Xlink, Llink, image, heading, text } = data;
            return (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                mt={5}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                display={hoveredIndex===index ?"flex" : "none"}
              >
                <Image
                  objectFit="cover"
                  w={"100%"}
                  maxW={{ base: "100%", sm: "200px", lg: "500px" }}
                  src={image}
                  alt="MsVick"
                  display={hoveredIndex===index ?"block" : "none"}
                />

                <Stack m={{ base: 1, lg: 5 }}>
                  <CardBody display={hoveredIndex === index ? "block" : "none"}>
                    <Heading fontSize={{ base: 25, lg: 50 }}>{heading}</Heading>

                    <Text
                      py="2"
                      fontFamily={"manrope"}
                      fontSize={{ base: "12px", lg: 25 }}
                      fontWeight={600}
                    >
                      {text}
                    </Text>

                    <Divider borderWidth={1} borderColor="black" />

                    <Text
                      py="5"
                      fontFamily={"manrope"}
                      fontSize={{ base: "12px", lg: 25 }}
                      fontWeight={600}
                    >
                      {text2}
                    </Text>

                    <Flex>
                      <Flex
                        mb={"2.7px"}
                        mr={"2.7px"}
                        bgColor={"#f6f7f7"}
                      >
                        <Link
                          borderRight={"1px solid #111413"}
                          px={{ base: "8px", lg: "7px" }}
                          href={Llink}
                          isExternal
                        >
                          <Icon as={FaLinkedin} w={{ base: "20px", lg: "30px" }} h={"auto"} />
                        </Link>
                        <Link
                          px={{ base: "8px", lg: "7px" }}
                          href={Xlink}
                          isExternal
                        >
                          <Icon as={FaTwitter} w={{ base: "20px", lg: "30px" }} h={"auto"} />
                        </Link>
                      </Flex>
                    </Flex>

                  </CardBody>
                </Stack>
              </Card>
            );
          })}
        </Flex>

        <SimpleGrid minChildWidth="120px" spacing="40px" mt={10}>
          {auTData.map((data, index) => {
            const { image, heading, text, Xlink, Llink } = data;
            return (
              <Box w={"100%"} key={index}>
                <Flex
                  bgImage={image}
                  bgColor={"#f6f7f7"}
                  bgSize={"cover"}
                  border={"1px solid black"}
                  h={"108px"}
                  boxShadow={"2px 2px 0 0 #231f20"}
                  alignItems={"flex-end"}
                  justifyContent={"flex-end"}
                  mb={"6px"}
                  alt={"MsVick"}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={()=> setHoveredIndex(null)}// Reset hoveredIndex when entering SimpleGrid
                >
                  <Flex
                    borderTop={"1px solid #111413"}
                    borderLeft={"1px solid #111413"}
                    mb={"2.7px"}
                    mr={"2.7px"}
                    bgColor={"#f6f7f7"}
                    display={{base:"flex", lg:"none"}}
                  >
                    <Link borderRight={"1px solid #111413"} px={{ base: "8px", lg: "7px" }} href={Llink} isExternal>
                      <Icon as={FaLinkedin} w={{ base: "10px", lg: "10px" }} h={"auto"} />
                    </Link>

                    <Link px={{ base: "8px", lg: "7px" }} href={Xlink} isExternal>
                      <Icon as={FaTwitter} w={{ base: "10px", lg: "10px" }} h={"auto"} />
                    </Link>
                  </Flex>
                </Flex>

                <Heading fontSize={{ base: 20, lg: 18 }} fontWeight={500}>
                  {heading}
                </Heading>

                <Text fontSize={{ base: 10, lg: 15 }} fontWeight={500}>
                  {text}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Team;
