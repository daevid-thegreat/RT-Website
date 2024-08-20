import { Flex, Text, Image } from "@chakra-ui/react";

const FirstSDG = () => {
  return (
    <Flex flexDir={"column"} mt={5} w={"100%"} maxW={"1200px"} mx={"auto"}>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"20px"}
        alignItems={"center"}
      >
        <Flex
          maxW={['100%', '100%', '100%', '100%', "588px"]}
          h={{ base: "675px", md: "881px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={"40px"}
          bg="#FEF9EC"
          position={'relative'}
        >
          <Text
            fontFamily={"clash"}
            fontSize={{ base: "20px", md: "26px", lg: "32px" }}
            fontWeight={700}
            // pb={"17px"}
            pt={{ base: "48px", md: "64px" }}
          >
            Our Commitment - SDG 4
          </Text>

          <Text
            fontFamily={"manrope"}
            fontSize={"16px"}
            fontWeight={600}
            pb={"17px"}
            // pt={{ base: "48px", md: "64px" }}
            color={"#752A12"}
            textTransform={"uppercase"}
          >
            Quality Education
          </Text>

          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", lg: "16px" }}
            fontWeight={400}
            pb={{ base: "16px", md: "40px" }}
            textAlign={"justify"}
          >
            Aligned with the United Nations Sustainable Development Goal 4
            (Quality Education), RoadTrip Community recognizes the significance
            of continuous education in the tech industry. We aim to raise
            awareness about the importance of education and lifelong learning by
            providing access to resources, networking opportunities, and
            mentorship to help our members achieve their professional goals.
          </Text>

          <Image
            src="/images/SDG4.png"
            alt="Green double couch with wooden legs"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="black"
            objectFit="cover"
            maxW={['90%', "90%", '90%', '90%', '90%', "508px"]}
            w={"100%"}
            h={{ base: "360px", md: "522px" }}
            m={"auto"}
            mt={1}
            position={'absolute'}
            bottom={'20px'}
          />
        </Flex>

        <Flex
          bg={"#FAD5CE"}
          maxW={['100%', '100%', '100%', '100%', "588px"]}
          h={{ base: "675px", md: "881px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={{ base: "48px", md: "40px" }}
          position={'relative'}
        >
          <Text
            fontFamily={"clash"}
            fontSize={{ base: "20px", md: "26px", lg: "32px" }}
            fontWeight={700}
            // pb={"17px"}
            pt={{ base: "48px", md: "64px" }}
          >
            Our Commitment - SDG 5
          </Text>

          <Text
            fontFamily={"manrope"}
            fontSize={"16px"}
            fontWeight={600}
            pb={"17px"}
            // pt={{ base: "48px", md: "64px" }}
            color={"#752A12"}
            textTransform={"uppercase"}
          >
            Gender Equality
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", lg: "16px" }}
            fontWeight={400}
            pb={{ base: "16px", md: "40px" }}
            textAlign={"justify"}
          >
            Dedicated to promoting diversity and inclusion in the tech industry,
            RoadTrip Community aligns with the United Nations Sustainable
            Development Goal 5 (Gender Equality). We strive to create a
            community where everyone feels welcome and respected, breaking down
            gender barriers, and empowering individuals to thrive in the tech
            industry, regardless of their gender or background.
          </Text>
          <Image
            src="/images/SDG5.png"
            alt="Green double couch with wooden legs"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="black"
            objectFit="cover"
            maxW={['90%', "90%", '90%', '90%', '90%', "508px"]}
            w={"100%"}
            h={{ base: "360px", md: "522px" }}
            m={"auto"}
            mt={1}
            position={'absolute'}
            bottom={'20px'}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default FirstSDG;
