import { SimpleGrid, Box, Card, CardBody, CardFooter, Button, Stack, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Sponsors = () => {
  const cardWidth = useBreakpointValue({ base: "100%", md: "500px" });

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{base:10, md: 250, lg:500}}
      px={{ base: "20px", lg: "107px" }}
      pb={{ base: "42px", lg: "40px" }}
      flexDir={"column"}
      w={"100%"}
      overflowX={"hidden"}
      backgroundColor={"orange"}
    >
      <Box m={{base:1, lg:10}} width={cardWidth} mt={8}>
        <Card maxW="lg">
          <CardBody>
            <Image
              src="/images/PWU/Ekay_BL.png"
              alt="Green double couch with wooden legs"
              borderWidth="3px"
              borderStyle="solid"
              borderColor="black"
              // boxSize="600px"
              maxW={"100%"}
              objectFit="cover"
            />
            <Stack mt="6" spacing="3">
              <Heading size="lg" fontFamily="clash">
                Partners
              </Heading>
              <Text
                fontFamily={"manrope"}
                fontSize={{ base: 14, md: 20, lg: 26}}
                fontWeight={500}
              >
                If you are interested in partnering with RoadTrip Community, please reach out to us at{" "}
                <a href="https://www.figma.com/exit?url=https%3A%2F%2Fpartnerships%40roadtripcommunity.org.">
                  partnerships@roadtripcommunity.org.
                </a>{" "}
                We look forward to collaborating with you and creating a positive impact in the design and tech space.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button
              mt={{base:4, lg:32}}
              size={{base:14, lg:20}}
              height="48px"
              width="100%"
              border="2px"
              borderWidth={3}
              borderColor="black.500"
              variant="solid"
              color={"black"}
            >
              START A CONVERSATION
            </Button>
          </CardFooter>
        </Card>
      </Box>

      {/* Second Card */}
      <Box m={{base:1, lg:10}} width={cardWidth}>
        <Card maxW="lg" pt={10}>
          <CardBody>
            <Image
              src="/images/PWU/mask_BL.png"
              alt="Green double couch with wooden legs"
              borderWidth="3px"
              borderStyle="solid"
              borderColor="black"
              maxW={"100%"}
              // boxSize="600px"
              objectFit="cover"
            />
            <Stack mt="6" spacing="3">
              <Heading size="lg" fontFamily="clash">
                Sponsorships
              </Heading>
              <Text
                fontFamily={"manrope"}
                fontSize={{ base: 14, md: 20, lg: 24}}
                fontWeight={500}>
                Come sponsor our events and initiatives at RoadTrip. With your sponsorship, we will be reaching more creatives in the tech space with tailored resources, and tools for their growth.
                
                You can sponsor/donate as an individual or organization.
                
                If you like to see our sponsorship tiers, please send a request to hello@roadtripcommunity.com and we'll be happy to get in touch.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button
             mt={{base:4, lg:2}}
              size={{base:14, lg:20}}
              height="48px"
              width="100%"
              border="2px"
              borderWidth={3}
              borderColor="black.500"
              variant="solid"
              color={"black"}
            >
              START A CONVERSATION
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </SimpleGrid>
  );
};
export default Sponsors;
