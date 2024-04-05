import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Flex, Divider, Text, Image, Heading, Link,} from "@chakra-ui/react";
import { pwuData } from "./data";

const partners = () => {
  return (
    <Flex
      // pt={{ base: "89px", lg: "106px" }}
      pb={{ base: "42px", lg: "40px" }}
      // px={{ base: "20px", lg: "107px" }}
      flexDir={"column"}
      w={"100%"}
      overflowX={"hidden"}
    >
      <Text
        fontFamily={"clash"}
        fontWeight={700}
        color={"black100"}
        fontSize={{ base: "32px", lg: "60px" }}
        px={{ base: "10px", lg: "10px" }}
      >
        Meet our Wonderful <br />
        Partners
      </Text>

      <SimpleGrid
        spacing={10}
        columns={{ base: 1, md: 2, lg: 3 }}
        px={{ base: "20px", lg: "107px" }}
        py={{ base: "89px", lg: "106px" }}
      >
        {pwuData.map((data, index) => {
          const { image, text, text2, link, linkText } = data;
          return (
            <Card maxW="lg" borderWidth={1} borderColor="black" key={index}>
              <CardHeader
                alignItems={"center"}
                h={117}
                display={"flex"}
              >
                <Image src={image} w={130} />
              </CardHeader>
              <Divider borderWidth={1} borderColor="black" />
              <CardBody>
                <Text
                  paddingTop={{ base: "60px", lg: "200px" }}
                  fontSize={{ base: "16px", lg: "20px" }}
                  fontWeight={500}
                >
                  {text}
                  <br />
                  <br />
                  {text2}
                </Text>
              </CardBody>
              <Divider borderWidth={1} borderColor="black" />
              <CardFooter>
                <Link
                  href={link}
                  color={"blue"}
                  fontSize={"20px"}
                  isExternal
                >
                  {linkText}
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
export default partners;
