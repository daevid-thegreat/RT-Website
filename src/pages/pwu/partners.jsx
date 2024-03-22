import { SimpleGrid, Card,CardHeader, CardBody, CardFooter, Flex, Divider, Text, Image, Heading } from "@chakra-ui/react";

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
      
      <SimpleGrid spacing={10} columns={{ base: 1, md: 2, lg: 3 }} px={{ base: "20px", lg: "107px" }} py={{ base: "89px", lg: "106px" }}>
        

        {/* FIRST CARD*/}
        <Card maxW='lg' borderWidth={1} borderColor="black">
          <CardHeader>
            <Image src="/images/PWU/propel.png" w={130} />
          </CardHeader>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardBody>
            <Text
              paddingTop={{ base: "60px", lg: "200px" }}
              fontSize={{ base: "16px", lg:"20px" }}
            fontWeight={500}>
              RoadTrip Community is a verified community partner with Propel, a talent tech startup focused on connecting African tech talent to the best global opportunities through its community-powered ecosystem.
            </Text>
          </CardBody>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardFooter>
            <Text color={"blue"} fontSize={'20px'}>
              <a href="https://www.withpropel.com/" target=""> withpropel.com </a>
            </Text>
          </CardFooter>
        </Card>
      
      {/* SECOND CARD */}
       <Card maxW='lg' borderWidth={1} borderColor="black">
          <CardHeader>
            <Image src="/images/PWU/Omol.png" w={130} />
          </CardHeader>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardBody>
           <Text
              paddingTop="60px"
              fontSize={{base:"16px", lg:"20px "}} 
            fontWeight={500}>
              RoadTrip Community is in partnership with Omoi, an emotional intelligence community committed to bringing the knowledge and practice of Emotional Intelligence to the forefront of conversations among tech stakeholders across Africa.
              
              <br />  
              <br />
              
              Omoi is Founded by one of our Admins and Counsellor on Mental Health for the RoadTrip Community, Alex Oyebade
            </Text>
          </CardBody>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardFooter>
            <Text color={"blue"} fontSize={'20px'}>
              <a href="https://twitter.com/theomoiclan" target=""> twitter.com/theomoiclan </a>
            </Text>
          </CardFooter>
        </Card>

        {/* THIRD CARD */}
        
       <Card maxW='lg' borderWidth={1} borderColor="black">
          <CardHeader>
            <Image src="/images/PWU/Asael&Eden.png" w={150} />
          </CardHeader>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardBody>
           <Text
              paddingTop={{ base: "60px", lg: "150px" }}
              fontSize={{ base: "16px", lg:"20px" }}
            fontWeight={500}>
              Asael&Eden doesn't just create e-learning solutions, we facilitate change. This is why we are excited to partner with the RoadTrip Community to deliver bespoke, user-friendly e-learning experiences that will help them achieve their wildest ambitions.
            </Text>
          </CardBody>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardFooter>
            <Text color={"blue"} fontSize={'20px'}>
              <a href="https://www.withpropel.com/" target=""> withpropel.com </a>
            </Text>
          </CardFooter>
        </Card>

        {/* Fourth CARD */}
        
       <Card maxW='lg' borderWidth={1} borderColor="black">
          <CardHeader>
            <Image src="/images/PWU/Perxels.png" w={150} />
          </CardHeader>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardBody>
            <Text
              paddingTop={{ base: "60px", lg: "150px" }}
              fontSize={{ base: "16px", lg:"20px" }}
            fontWeight={500}>
              Accredited by The American Council of Training and Development, Perxels Design School is primarily focused on equipping talents with core design skills and soft skills needed to become a more proficient designer, navigate through the job market and advance in their career.
            </Text>
          </CardBody>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardFooter>
            <Text color={"blue"} fontSize={'20px'}>
              <a href="https://www.perxels.com/" target=""> perxels.com </a>
            </Text>
          </CardFooter>
        </Card>


        {/* Fifth CARD */}
        
       <Card maxW='lg' borderWidth={1} borderColor="black">
          <CardHeader>
            <Image src="/images/PWU/enoverlab.png" w={150} />
          </CardHeader>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardBody>
            <Text
              paddingTop={{ base: "60px", lg: "150px" }}
              fontSize={{ base: "16px", lg:"20px" }}
            fontWeight={500}>
             Enoverlab is a training institute that provides product management training to individuals and corporate organizations. At Enoverlab, talents are groomed with the knowledge, skills, tools and experience they need to function effectively in the role of a product manager.
            </Text>
          </CardBody>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardFooter>
            <Text color={"blue"} fontSize={'20px'}>
              <a href="https://www.enoverlab.com/" target=""> enoverlab.com </a>
            </Text>
          </CardFooter>
        </Card>


        {/* SIXTH CARD */}
        
       <Card maxW='lg' borderWidth={1} borderColor="black">
          <CardHeader>
            <Image src="/images/PWU/edukarma.png" w={150} />
          </CardHeader>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardBody>
           <Text
              paddingTop={{ base: "60px", lg: "150px" }}
              fontSize={{ base: "16px", lg:"20px" }}
            fontWeight={500}>
           Accredited by The American Council of Training and Development, Perxels Design School is primarily focused on equipping talents with core design skills and soft skills needed to become a more proficient designer, navigate through the job market and advance in their career.
            </Text>
          </CardBody>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardFooter>
            <Text color={"blue"} fontSize={'20px'}>
              <a href="https://edukarma.org/" target=""> edukarma.com </a>
            </Text>
          </CardFooter>
        </Card>

        {/* SEVENTH CARD */}
        
       <Card maxW='lg' borderWidth={1} borderColor="black">
          <CardHeader>
            <Image src="/images/PWU/kr8tivepen.png" w={150} />
          </CardHeader>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardBody>
            <Text
              paddingTop={{ base: "60px", lg: "150px" }}
              fontSize={{ base: "16px", lg:"20px" }}
            fontWeight={500}>
           Kre8tive Pen’s mission is to cultivate and nurture the artistic potential within young minds, providing a dynamic and affordable platform for learning. They are dedicated to fostering a creative community where students can thrive, express themselves, and acquire valuable skills without the burden of financial constraints.
            </Text>
          </CardBody>
          
          <Divider borderWidth={1} borderColor="black" />
          
          <CardFooter>
            <Text color={"blue"} fontSize={'20px'}>
              <a href="https://kre8tivepen.com.ng/" target=""> kre8tivepen.com </a>
            </Text>
          </CardFooter>
        </Card>
      
      </SimpleGrid>

      
    </Flex>
  );
};
export default partners;