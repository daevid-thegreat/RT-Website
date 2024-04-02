import { Box, Flex } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Flex w={"full"} h={"100vh"} alignItems={"center"}>
      <Flex
        justify={"center"}
        align={"center"}
        // p={p ?? '2rem'}
        w={"full"}
        h={"3rem"}
      >
        <Box w={"40px"} h={"5rem"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="70"
            viewBox="0 0 92 25"
            fill="none"
          >
            {/* <circle cx="5" cy="5" r="5" stroke={appLoading ? "black" : "#FEF9EC"} fill="#FEF9EC"> */}
            <circle cx="5" cy="5" r="5" fill="#F6B847">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 20 ; 0 -20; 0 20"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            {/* <circle cx="19" cy="5" r="5" stroke={appLoading ? "black" : "#FBEECA"} fill="#FBEECA"> */}
            <circle cx="19" cy="5" r="5" fill="#198046">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15 ; 0 -15; 0 15"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            {/* <circle cx="33" cy="5" r="5" stroke={appLoading ? "black" : "#F7DD90"} fill="#F7DD90"> */}
            <circle cx="33" cy="5" r="5" fill="#4D34CC">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 10 ; 0 -10; 0 10"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
            {/* <circle cx="47" cy="5" r="5" stroke={appLoading ? "black" : "#F5CE6F"} fill="#F5CE6F"> */}
            <circle cx="47" cy="5" r="5" fill="#F5B8AC">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
          </svg>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Loader
