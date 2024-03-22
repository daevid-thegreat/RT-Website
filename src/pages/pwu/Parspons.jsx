import { Button,Text, Image, useBreakpointValue, Flex } from "@chakra-ui/react";
import React from "react";

const Sponsors = () => {
  const cardWidth = useBreakpointValue({ base: "100%", md: "500px" });

  return (

     <Flex
      bg={"orange"}
      flexDir={"column"}
      px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"20px"}
        alignItems={"center"}
        
      >
        <Flex
          bg={"white"}
          maxW={"588px"}
          h={{ base: "675px", md: "866px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={"40px"}
        >
          <Image
            src="/images/PWU/Ekay_BL.png"
            alt="Green double couch with wooden legs"
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
            // boxSize="600px"
            // maxW={"100%"}
            objectFit="cover"
                        // bg={"#E1E6E3"}
            maxW={"508px"}
            w={"100%"}
            h={{ base: "373px", md: "522px" }}
            // border={"2px solid #000"}
            m={"auto"}
            mt={4}
             />
          
          <Text
            fontFamily={"clash"}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={700}
            pb={"17px"}
            pt={{ base: "18px", md: "20px" }}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Partnerships
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", lg: "16px" }}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            If you are interested in partnering with RoadTrip Community, please reach out to us at{" "} <a href="https://www.figma.com/exit?url=https%3A%2F%2Fpartnerships%40roadtripcommunity.org."> partnerships@roadtripcommunity.org.</a>{" "} We look forward to collaborating with you and creating a positive impact in the design and tech space.
          </Text>
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
        </Flex>
        
        
        <Flex
          bg={"pink200"}
          maxW={"588px"}
          h={{ base: "675px", md: "866px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={"40px"}
        >
          <Image
            src="/images/PWU/mask_BL.png"
            alt="Green double couch with wooden legs"
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
            // boxSize="600px"
            // maxW={"100%"}
            objectFit="cover"
                        // bg={"#E1E6E3"}
            maxW={"508px"}
            w={"100%"}
            h={{ base: "373px", md: "522px" }}
            // border={"2px solid #000"}
            m={"auto"}
            mt={4}
             />
          
          <Text
            fontFamily={"clash"}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={700}
            pb={2}
            pt={2}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Sponsorships
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", lg: "16px" }}
            fontWeight={600}
            pb={8}
            // lineHeight={{ base: "19.2px", md: "28.8px" }}
          >
            Come sponsor our events and initiatives at RoadTrip. With your sponsorship, we will be reaching more creatives in the tech space with tailored resources, and tools for their growth. You can sponsor/donate as an individual or organization. If you like to see our sponsorship tiers, please send a request to hello@roadtripcommunity.com and we'll be happy to get in touch.
          </Text>
        <Button
              // mt={{base:4, lg:2}}
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
        </Flex>

      </Flex>
    </Flex>

  );
};
export default Sponsors;
