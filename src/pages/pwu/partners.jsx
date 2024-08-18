import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Divider,
  Text,
  Image,
  Heading,
  Link,
  Box,
} from "@chakra-ui/react";
import { pwuData } from "./data";
import "./partners.css";

const partners = () => {
  return (
    <Flex
      // pt={{ base: "89px", lg: "106px" }}
      pb={{ base: "42px", lg: "40px" }}
      // px={{ base: "20px", lg: "107px" }}
      flexDir={"column"}
      w={"100%"}
      overflowX={"hidden"}
      borderTop="2px solid #111413"
      pt="4rem"
    >
      <Box maxW={"1200px"} w="100%" mx="auto">
        <Heading
          as={"h2"}
          fontFamily={"clash"}
          fontWeight={700}
          color={"black100"}
          fontSize={{ base: "32px", lg: "60px" }}
          px={{ base: "10px", lg: "10px" }}
          mb="4rem"
        >
          Our Partners
        </Heading>
      </Box>

      <Flex className="rotate-container" w="100%" mx={"auto"}>
        <Box className="rotate-content" gap="40px">
          {pwuData.map((data, index) => {
            const { image, text, text2, link, linkText } = data;
            return (
              <Card
                minW={["343px", "343px", "589px"]}
                minH={"501px"}
                borderWidth={4}
                borderColor="black"
                key={index}
                borderRadius={"none"}
              >
                <CardHeader
                  alignItems={"center"}
                  h={117}
                  display={"flex"}
                  borderBottom={"4px solid black"}
                >
                  <Image src={image} w={130} />
                </CardHeader>
                {/* <Divider borderWidth={4} borderColor="black" /> */}
                <CardBody
                  position={"relative"}
                  minH="319px"
                  p="20px"
                  paddingBottom={["50px"]}
                >
                  <Text
                    fontSize={{ base: "16px", lg: "20px" }}
                    fontWeight={500}
                    position={"absolute"}
                    bottom={"0"}
                  >
                    {text}
                    <br />
                    <br />
                    {text2}
                  </Text>
                </CardBody>
                {/* <Divider borderWidth={1} borderColor="black" /> */}
                <CardFooter borderTop={"4px solid black"}>
                  <Link
                    href={link}
                    color={"black"}
                    fontWeight={600}
                    textDecor={"underline"}
                    fontSize={"20px"}
                    fontFamily={"manrope"}
                    isExternal
                  >
                    {linkText}
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </Box>
      </Flex>
    </Flex>
  );
};
export default partners;
