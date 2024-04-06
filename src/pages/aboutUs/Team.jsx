import { Flex, Text, Card, CardBody, Stack, Image, CardFooter, Heading, Button, Divider, SimpleGrid, Box } from "@chakra-ui/react";
import { auTData } from "./TData";

const Team = () => {
  return (
    <>
      <Flex
        p={{ base: 3, lg: 20 }}
        //  p={{ base: 3, lg:5 }}
        flexDir="column"
        bg={"blue300"}
      >
        <Text
          fontFamily={"clash"}
          fontWeight={700}
          color={"black100"}
          fontSize={{ base: "40px", lg: "60px" }}
          // w='100%'
          // mr={{ base: "20px", lg: "150px" }}
        >
          Meet The Team
        </Text>

        <Text
          fontFamily={"manrope"}
          fontSize={{ base: 12, lg: 24 }}
          fontWeight={700}
          color={"black200"}
        >
          The Excos - Meet the passionate leaders driving <br />{" "}
          RoadTrip's mission.
        </Text>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mt={5}
        >
          <Image
            objectFit="cover"
            w={"100%"}
            maxW={{ base: "100%", sm: "200px", lg: "500px" }}
            src="/images/MsVick1.png"
            alt="MsVick"
          />

          <Stack m={{ base: 1, lg: 5 }}>
            <CardBody>
              <Heading fontSize={{ base: 25, lg: 50 }}>
                MSVick
              </Heading>

              <Text
                py="2"
                fontFamily={"manrope"}
                fontSize={{ base: "12px", lg: 25 }}
                fontWeight={600}
                // pb={{ base: "16px", md: "40px" }}
              >
                Founder | Community Lead
              </Text>

              <Divider borderWidth={1} borderColor="black" />

              <Text
                py="5"
                fontFamily={"manrope"}
                fontSize={{ base: "12px", lg: 25 }}
                fontWeight={600}
                // pb={{ base: "16px", md: "40px" }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Facilis iste consequatur quia tempore dolor
                alias eligendi libero cum, itaque quaerat. <br />{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Facilis iste consequatur quia tempore dolor
                alias eligendi libero cum, itaque quaerat. <br />{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Facilis iste consequatur quia tempore dolor
                alias eligendi libero cum, itaque quaerat. <br />{" "}
                <br />
              </Text>
            </CardBody>
          </Stack>
        </Card>

        <SimpleGrid
          minChildWidth="120px"
          spacing="40px"
          mt={10}
        >

          {auTData.map((data, index) => {
            const { image, heading, text } = data;
            return (

              <Box w={"100%"} key={index}>
                <Image objectFit="cover" src={image} alt="MsVick" borderWidth="3px" borderStyle="solid" borderColor="black" />

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
