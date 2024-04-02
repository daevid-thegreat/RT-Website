import {
  Flex,
  Text,
  Link,
  Card,
  CardBody,
  Stack,
  Image,
  CardFooter,
  Heading,
  Divider,
  SimpleGrid,
  Box,
  ButtonGroup,
  Grid,
  Icon,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../../components/Button";

const Mentors = () => {
  const roles = [
    "All roles",
    "Design",
    "Illustration",
    "Podcast",
    "Motion",
    "UI/UX",
    "Growth",
    "Engineering",
    "Marketing",
    "Product",
    "Copywriting",
  ];
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "repeat(2, 1fr)",
      }}
      // flexDir={{ base: "column", lg: "row" }}
      // flexBasis={0}
      // flexGrow={1}
      // minW={0}
      gap={"36px"}
      bg={"white"}
      fontFamily={"manrope"}
      py={{ base: "80px", lg: "43px" }}
      px={{ base: 3, lg: 20 }}
    >
      <Box
        pt={{ base: "", lg: "44px" }}
        pb={{ base: "", lg: "33px" }}
        // maxW={"591px"}
        w={"100%"}
      >
        <Text fontSize={"24px"} fontWeight={500}>
          <span className="font-bold">
            In-house Masterclass Facilitators & Mentors:
          </span>
          <br />
          Learn from experienced professionals guiding our members
          toward success.
        </Text>
        <Text pt={"24px"} fontSize={"16px"}>
          Lorem ipsum dolor sit amet consectetur. Scelerisque at et mi
          eros convallis elementum. Fames imperdiet nulla mauris nisl
          ultricies sed semper tellus. Pharetra cras lacus id lorem
          habitant nam. Sit convallis id nunc amet faucibus dignissim.
          Bibendum vulputate a massa viverra aenean adipiscing at
          vestibulum feugiat. Mattis ut mauris urna nec aliquet purus.
          Amet ut facilisis at mollis viverra semper ac. Sed tincidunt
          enim venenatis feugiat. Auctor dictum eget massa mauris
          lorem sit tincidunt.
        </Text>
        <Flex rowGap={"16px"} flexWrap={"wrap"} columnGap={"8px"} mt={{base:'32px', lg:'24px'}}>
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
        // flexWrap={"wrap"}
        alignContent={'flex-start'}
        justifyContent={'space-around'}
        // flexBasis={0}
        // flexGrow={1}
        // minW={0}
        // w={"100%"}
        gap={{ base: "19px", lg: "12px" }}
        // justifyItems={"center"}
      >
        <Box w={"100%"} maxW={"99px"} m={'auto'}>
          <Flex
            bgImage={"images/Dami.png"}
            bgColor={"#f6f7f7"}
            bgSize={"cover"}
            border={"1px solid black"}
            h={"102px"}
            boxShadow={"2px 2px 0 0 #231f20"}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            mb={"6px"}
          >
            <Flex
              borderTop={"1px solid #111413"}
              borderLeft={"1px solid #111413"}
              mb={"2.7px"}
              mr={"2.7px"}
              bgColor={"#f6f7f7"}
            >
              <Link
                borderRight={"1px solid #111413"}
                px={{ base: "8px", lg: "7px" }}
              >
                <Icon
                  as={FaTwitter}
                  w={{ base: "10px", lg: "10px" }}
                  h={"auto"}
                />
              </Link>
              <Link px={{ base: "8px", lg: "7px" }}>
                <Icon
                  as={FaLinkedin}
                  w={{ base: "10px", lg: "10px" }}
                  h={"auto"}
                />
              </Link>
            </Flex>
          </Flex>
          <Heading
            fontSize={{ base: "13px", lg: "8px" }}
            fontWeight={700}
            fontFamily={"clash"}
            pb={"3px"}
          >
            Alex
          </Heading>
          <Text
            fontSize={{ base: "10px", lg: "6px" }}
            fontWeight={600}
            fontFamily={"clash"}
          >
            Counselor, Mental Health
          </Text>
        </Box>
        <Box w={"100%"} maxW={"99px"} m={'auto'}>
          <Flex
            bgImage={"images/Dami.png"}
            bgColor={"#f6f7f7"}
            bgSize={"cover"}
            border={"1px solid black"}
            h={"102px"}
            boxShadow={"2px 2px 0 0 #231f20"}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            mb={"6px"}
          >
            <Flex
              borderTop={"1px solid #111413"}
              borderLeft={"1px solid #111413"}
              mb={"2.7px"}
              mr={"2.7px"}
              bgColor={"#f6f7f7"}
            >
              <Link
                borderRight={"1px solid #111413"}
                px={{ base: "8px", lg: "7px" }}
              >
                <Icon
                  as={FaTwitter}
                  w={{ base: "10px", lg: "10px" }}
                  h={"auto"}
                />
              </Link>
              <Link px={{ base: "8px", lg: "7px" }}>
                <Icon
                  as={FaLinkedin}
                  w={{ base: "10px", lg: "10px" }}
                  h={"auto"}
                />
              </Link>
            </Flex>
          </Flex>
          <Heading
            fontSize={{ base: "13px", lg: "8px" }}
            fontWeight={700}
            fontFamily={"clash"}
            pb={"3px"}
          >
            Alex
          </Heading>
          <Text
            fontSize={{ base: "10px", lg: "6px" }}
            fontWeight={600}
            fontFamily={"clash"}
          >
            Counselor, Mental Health
          </Text>
        </Box>
        <Box w={"100%"} maxW={"99px"} m={'auto'}>
          <Flex
            bgImage={"images/Dami.png"}
            bgColor={"#f6f7f7"}
            bgSize={"cover"}
            border={"1px solid black"}
            h={"102px"}
            boxShadow={"2px 2px 0 0 #231f20"}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            mb={"6px"}
          >
            <Flex
              borderTop={"1px solid #111413"}
              borderLeft={"1px solid #111413"}
              mb={"2.7px"}
              mr={"2.7px"}
              bgColor={"#f6f7f7"}
            >
              <Link
                borderRight={"1px solid #111413"}
                px={{ base: "8px", lg: "7px" }}
              >
                <Icon
                  as={FaTwitter}
                  w={{ base: "10px", lg: "10px" }}
                  h={"auto"}
                />
              </Link>
              <Link px={{ base: "8px", lg: "7px" }}>
                <Icon
                  as={FaLinkedin}
                  w={{ base: "10px", lg: "10px" }}
                  h={"auto"}
                />
              </Link>
            </Flex>
          </Flex>
          <Heading
            fontSize={{ base: "13px", lg: "8px" }}
            fontWeight={700}
            fontFamily={"clash"}
            pb={"3px"}
          >
            Alex
          </Heading>
          <Text
            fontSize={{ base: "10px", lg: "6px" }}
            fontWeight={600}
            fontFamily={"clash"}
          >
            Counselor, Mental Health
          </Text>
        </Box>
       
        <Box w={"100%"} maxW={"99px"} m={'auto'}>
          <Flex
            bgImage={"images/Dami.png"}
            bgColor={"#f6f7f7"}
            bgSize={"cover"}
            border={"1px solid black"}
            h={"102px"}
            boxShadow={"2px 2px 0 0 #231f20"}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            mb={"6px"}
          >
            <Flex
              borderTop={"1px solid #111413"}
              borderLeft={"1px solid #111413"}
              mb={"2.7px"}
              mr={"2.7px"}
              bgColor={"#f6f7f7"}
            >
              <Link
                borderRight={"1px solid #111413"}
                px={{ base: "8px", lg: "7px" }}
              >
                <Icon
                  as={FaTwitter}
                  w={{ base: "10px", lg: "10px" }}
                  h={"auto"}
                />
              </Link>
              <Link px={{ base: "8px", lg: "7px" }}>
                <Icon
                  as={FaLinkedin}
                  w={{ base: "10px", lg: "10px" }}
                  h={"auto"}
                />
              </Link>
            </Flex>
          </Flex>
          <Heading
            fontSize={{ base: "13px", lg: "8px" }}
            fontWeight={700}
            fontFamily={"clash"}
            pb={"3px"}
          >
            Alex
          </Heading>
          <Text
            fontSize={{ base: "10px", lg: "6px" }}
            fontWeight={600}
            fontFamily={"clash"}
          >
            Counselor, Mental Health
          </Text>
        </Box>

      </SimpleGrid>
    </Grid>
  );
};
export default Mentors;
