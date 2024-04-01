import { Flex, Text, Card, CardBody, Stack, Image, CardFooter, Heading, Button, Divider, SimpleGrid, Box, ButtonGroup } from "@chakra-ui/react";

const Team = () => {
  return (
    <>
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
          src="/images/MsVick1.png"
          alt='MsVick'
          
        />
        
        <Stack
          m={{ base: 1, lg: 5 }}
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
        </Stack>
      </Card>


      


      <SimpleGrid minChildWidth='120px' spacing='40px' mt={10}>

        {/* FIRST BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/MsVick1.png"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
            fontSize={{ base: 20, lg: 20 }}
            fontWeight={500}
          >
            MSVick
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Founder | Community Lead
          </Text>

        </Box>



         {/* SECOND BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Caveman.png"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 20}}
            fontWeight={500}
            mt={1}
          >
            Caveman
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Executive Assistant
          </Text>

        </Box>




         {/* tHIRD BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Ukdev.jpeg"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
            fontSize={{base: 20, lg: 19}}
            fontWeight={500}
          >
            Marryblessing
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Partnership Manager
          </Text>

        </Box>

        
         {/* FOURTH BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Feyi.jpeg"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 20}}
            fontWeight={500}
          >
            Pelumibot
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Coordinator I, Open Source
          </Text>

        </Box>


         {/* FIFTH BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Feyi.jpeg"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 20}}
            fontWeight={500}
          >
            Gideon
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Coordinator II, Open Source
          </Text>

        </Box>



         {/* SIXTH BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/ashimit.png"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
            
          />

          <Heading
             fontSize={{base: 20, lg: 20}}
            fontWeight={500}
          >
            Ashimi0x
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Coordinator III, Open Source
          </Text>

        </Box>



         {/* SEVENTH BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Caveman.png"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 20}}
            fontWeight={500}
          >
            Alex
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Counselor, Mental Health
          </Text>

        </Box>


         {/* EIGHTETH BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Feyi.jpeg"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 19}}
            fontWeight={500}
          >
            Simplypheyie
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Lead, Buddy Group
          </Text>

        </Box>




         {/* NINETH BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Temipexels.png"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 20}}
            fontWeight={500}
          >
            Temipixel
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Brand Lead & Counselor
          </Text>

        </Box>


         {/* TENTH BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/KDPICS.jpeg"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
            fontSize={{base: 20, lg: 20}}
            fontWeight={500}
          >
            KingDavid
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Counselor, Career Growth
          </Text>

        </Box>


         {/* 11 BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Temipexels.png"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 19}}
            fontWeight={500}
          >
            Exousia
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Counselor, Freelancers
          </Text>

        </Box>


         {/* 12 BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Temipexels.png"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 19}}
            fontWeight={500}
          >
            IBK
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Social Media Team Lead
          </Text>

        </Box>


         {/* 13 BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Nonye.jpeg"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 19}}
            fontWeight={500}
          >
            Nonye
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Coordinator, Book Club
          </Text>

        </Box>


         {/* 14 BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Dami.png"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
            fontSize={{base: 20, lg: 18}}
            fontWeight={500}
          >
            Oluwadamilola
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Lead, Welfare
          </Text>

        </Box>


         {/* 15 BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Zainab.jpeg"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 20}}
            fontWeight={500}
          >
            Zainab
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Welfare Assistant
          </Text>

        </Box>


         {/* 16 BOX */}
        <Box w={'100%'}>
          <Image
          objectFit='cover'
          // w={500}
            // maxW={{ base: '100%', sm: '200px', lg: '500px'}}
            src="/images/Zainab.jpeg"
            alt='MsVick'
            borderWidth="3px"
            borderStyle="solid"
            borderColor="black"
          />

          <Heading
             fontSize={{base: 20, lg: 20}}
            fontWeight={500}
          >
            Ekemini
          </Heading>

          <Text
            fontSize={{ base: 10, lg: 15 }}
            fontWeight={500}
          >
            Welfare Assistant; Grim Reaper
          </Text>

        </Box>
      </SimpleGrid>

      </Flex>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <Flex
        bg={"white"}
        fontFamily={"manrope"}
        // p={{ base: 3, lg: 20 }}
        //  p={{ base: 3, lg:5 }}
        flexDir={{ base: "row", lg: "column" }}
        
      >
        <Box
          w={"75%"}
          flex="1">
          <Text
            fontSize={25}
            fontWeight={500}
          >
            <span className="font-bold">In-house Masterclass Facilitators & Mentors:</span> <br />
            Learn from experienced professionals guiding our members toward success.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur. Scelerisque at et mi eros convallis elementum. Fames imperdiet nulla mauris nisl ultricies sed semper tellus. Pharetra cras lacus id lorem habitant nam. Sit convallis id nunc amet faucibus dignissim. Bibendum vulputate a massa viverra aenean adipiscing at vestibulum feugiat. Mattis ut mauris urna nec aliquet purus. Amet ut facilisis at mollis viverra semper ac. Sed tincidunt enim venenatis feugiat. Auctor dictum eget massa mauris lorem sit tincidunt.
          </Text>

          
          <ButtonGroup>
            <Button bg={"black"} color={"white"} size='lg'>All Role</Button>
            <Button fontWeight={500} colorScheme='black'  size='lg' variant='outline'>Design</Button>
            <Button colorScheme='black' variant='outline' size='lg'>Illustration</Button>
            <Button colorScheme='black' variant='outline' size='lg'>Podcast</Button>
            <Button colorScheme='black' variant='outline'size='lg' >Motion</Button>
            <Button colorScheme='black' variant='outline'size='lg' >UI/UX</Button>
            <Button colorScheme='black' variant='outline'size='lg' >Engineering</Button>
            <Button colorScheme='black' variant='outline'size='lg' >Marketing</Button>
            <Button colorScheme='black' variant='outline'size='lg' >Growth</Button>
            <Button colorScheme='black' variant='outline'size='lg' >Product</Button>
            <Button colorScheme='black' variant='outline'size='lg' >Copywriting</Button>
            <Button colorScheme='black' variant='outline' size='lg'>Marketing</Button>
          </ButtonGroup>
        </Box>

        <Box flex="1">
          <SimpleGrid minChildWidth='120px' spacing='40px' mt={10}>
            
            {/* FIRST IMAGE */}
            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>


            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>

            
            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>


            {/* <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>


            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box>



            <Box w={'100%'}>
              <Image
                objectFit='cover'
                src="/images/Caveman.png"
                alt='MsVick'
                borderWidth="3px"
                borderStyle="solid"
                borderColor="black"
              />
              
              <Heading
                fontSize={{ base: 20, lg: 20 }}
                fontWeight={500}
                mt={1}
              >
                Caveman
              </Heading>
              
              <Text
                fontSize={{ base: 5, lg: 10 }}
                fontWeight={500}
              >
                Executive Assistant
              </Text>
            </Box> */}


          </SimpleGrid>

        </Box>




      </Flex>

    </>
    
  );
};

export default Team;





