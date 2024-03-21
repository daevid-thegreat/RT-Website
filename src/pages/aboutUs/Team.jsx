import { Flex, Text, Card, CardBody, Stack, Image, CardFooter, Heading, Button, Divider } from "@chakra-ui/react";

const Team = () => {
  return (
     <Flex
      p={{base:3, lg: 20}}
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
        fontSize={{base: 12, lg: 24}}
        fontWeight={700}
        color={"black200"}
        >
          The Excos - Meet the passionate leaders driving <br /> RoadTrip's mission.
        </Text>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        mt={5}
      >
        <Image
          objectFit='cover'
          w={"100%"}
          maxW={{ base: '100%', sm: '200px', lg: '500px'}}
          src="/public/images/MsVick1.png"
          alt='MsVick'
        />
        
        <Stack
          m={{base:1, lg:5}}
        >
          <CardBody>
            <Heading
              fontSize={{ base: 25, lg: 50 }}
            >
              MSVick
            </Heading>
            
            <Text
              py='2'
              fontFamily={"manrope"}
              fontSize={{ base: "12px", lg:25 }}
              fontWeight={600}
              // pb={{ base: "16px", md: "40px" }}
            >
              Founder | Community Lead 
            </Text>

            <Divider borderWidth={1} borderColor="black" />
            
            <Text
              py='5'
              fontFamily={"manrope"}
              fontSize={{ base: "12px", lg:25 }}
              fontWeight={600}
              // pb={{ base: "16px", md: "40px" }}
            >

             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste consequatur quia tempore dolor alias eligendi libero cum, itaque quaerat. <br /> <br />
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste consequatur quia tempore dolor alias eligendi libero cum, itaque quaerat. <br /> <br />
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iste consequatur quia tempore dolor alias eligendi libero cum, itaque quaerat. <br /> <br />
            </Text>
            
          </CardBody>
          
          {/* <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              Buy Latte
            </Button>
          </CardFooter> */}
        </Stack>
      </Card>

      





      {/* CONTINUE HERE */}
     </Flex>
  );
};

export default Team;





