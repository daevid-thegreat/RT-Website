import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Portfolios = () => {
  const scrollingBoxRef = useRef(null);
  const [isLargerThan768] = useMediaQuery("(min-width:768px)");
  useEffect(() => {
    const container = document.querySelector(".scroll-container2");
    const content = document.querySelector(".scroll-content2");
    // Get the container and content elements

    // Set the scroll amount and interval time
    const scrollAmount = 1; // Adjust this value to control the scroll speed

    // Clone the content and append it to the container
    // if (isLargerThan768) {
    container.appendChild(content.cloneNode(true));
    // }
    // Function to scroll the content horizontally
    function scrollHorizontally() {
      container.scrollLeft += scrollAmount;

      if (container.scrollLeft >= content.offsetWidth) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scrollHorizontally);
    }

    scrollHorizontally();
  }, []);
  const scrollingDivRef = useRef(null);
  useEffect(() => {
    // Get the container and content elements
    const container = document.querySelector(".scroll-container");
    const content = document.querySelector(".scroll-content");

    // Set the scroll amount and interval time
    const scrollAmount = 2; // Adjust this value to control the scroll speed

    // Clone the content and append it to the container
    container.appendChild(content.cloneNode(true));

    // Function to scroll the content horizontally
    function scrollHorizontally() {
      container.scrollLeft += scrollAmount;

      if (container.scrollLeft >= content.offsetWidth) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scrollHorizontally);
    }

    scrollHorizontally();
  }, []);
  return (
    <Flex
      bg={"white"}
      flexDir={"column"}
      // px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Text
        fontFamily={"clash"}
        fontSize={{ base: "40px", lg: "64px" }}
        color={"black100"}
        fontWeight={700}
        px={{ base: "16px", lg: "122px" }}
      >
        Featured portfolios
      </Text>
      <Text
        fontFamily={"manrope"}
        fontSize={{ base: "16px", lg: "24px" }}
        color={"black100"}
        fontWeight={{ base: 500, lg: 400 }}
        pb={"40px"}
        pl={{ base: "61px", lg: "243px" }}
        maxW={{ base: "340px", lg: "690px" }}
        w={"100%"}
        lineHeight={{ base: "19.2px", lg: "28.8px" }}
      >
        Explore impressive portfolios crafted by our talented members,
        showcasing their diverse skills and creativity. Get ready to
        be inspired!
      </Text>
      <Flex
        ref={scrollingDivRef}
        id="containeris"
        className="bg-[white] scroll-container
        overflow-x-hidden"
        h={"27px"}
        overflowY={"hidden"}
        // w={"100%"}
        borderTop={"3px solid #111413"}
        borderBottom={"3px solid #111413"}
        gap={"12px"}
      >
        <Flex className="scroll-content">
          <Flex
            alignItems={"center"}
            className="justify-start flex-nowrap whitespace-nowrap"
          >
            <Text
              fontSize={"16px"}
              fontWeight={700}
              fontFamily={"manrope"}
              pr={"12px"}
            >
              Highlight of our members doings
            </Text>
            <Image
              src={"/images/ellipse.png"}
              mr={"12px"}
              h={"7px"}
              w={"7px"}
            />
          </Flex>
          <Flex
            alignItems={"center"}
            className="justify-start flex-nowrap whitespace-nowrap"
          >
            <Text
              fontSize={"16px"}
              fontWeight={700}
              fontFamily={"manrope"}
              pr={"12px"}
            >
              Highlight of our members doings
            </Text>
            <Image
              src={"/images/ellipse.png"}
              mr={"12px"}
              h={"7px"}
              w={"7px"}
            />
          </Flex>
          <Flex
            alignItems={"center"}
            className="justify-start flex-nowrap whitespace-nowrap"
          >
            <Text
              fontSize={"16px"}
              fontWeight={700}
              fontFamily={"manrope"}
              pr={"12px"}
            >
              Highlight of our members doings
            </Text>
            <Image
              src={"/images/ellipse.png"}
              mr={"12px"}
              h={"7px"}
              w={"7px"}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        ref={scrollingBoxRef}
        id="containeris"
        className={"scroll-container2"}
        overflowX={"hidden"}
        borderBottom={"3px solid #111413"}
        display={{ base: "none", md: "flex" }}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
          className={"scroll-content2"}
        >
          <Flex
            borderRight={{ base: "", md: "3px solid #111413" }}
            // borderLeft={{ base: "", md: "3px solid #111413" }}
            w={{ base: "100%", md: "707px" }}
            // maxW={"707px"}
            borderBottom={{ base: "3px solid #111413", md: "" }}
            h={{ base: "466px", md: "373px" }}
          >
            <Image src={"images/danfo.webp"} />
          </Flex>
          <Flex
            borderRight={{ base: "", md: "3px solid #111413" }}
            w={{ base: "100%", md: "707px" }}
            maxW={"707px"}
            borderBottom={{ base: "3px solid #111413", md: "" }}
            h={{ base: "466px", md: "373px" }}
          >
            b
          </Flex>
          <Flex
            borderRight={{ base: "", md: "3px solid #111413" }}
            w={{ base: "100%", md: "707px" }}
            maxW={"707px"}
            borderBottom={{ base: "3px solid #111413", md: "" }}
            h={{ base: "466px", md: "373px" }}
          >
            c
          </Flex>
          <Flex
            borderRight={{ base: "", md: "3px solid #111413" }}
            w={{ base: "100%", md: "707px" }}
            maxW={"707px"}
            borderBottom={{ base: "3px solid #111413", md: "" }}
            h={{ base: "466px", md: "373px" }}
          >
            d
          </Flex>
          <Flex
            borderRight={{ base: "", md: "3px solid #111413" }}
            w={{ base: "100%", md: "707px" }}
            maxW={"707px"}
            borderBottom={{ base: "3px solid #111413", md: "" }}
            h={{ base: "466px", md: "373px" }}
          >
            e
          </Flex>
        </Flex>
      </Flex>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          display={{ base: "flex", md: "none" }}
        >
          <Flex
            w={"100%"}
            maxW={"707px"}
            borderBottom={"3px solid #111413"}
            h={"466px"}
          >
            <Image src={"images/danfo.webp"} objectFit={'cover'}/>
          </Flex>
          <Flex
            w={"100%"}
            maxW={"707px"}
            borderBottom={"3px solid #111413"}
            h={"466px"}
          >
            b
          </Flex>
          <Flex
            w={"100%"}
            maxW={"707px"}
            borderBottom={"3px solid #111413"}
            h={"466px"}
          >
            c
          </Flex>
          <Flex
            w={"100%"}
            maxW={"707px"}
            borderBottom={"3px solid #111413"}
            h={"466px"}
          >
            d
          </Flex>
          <Flex
            w={"100%"}
            maxW={"707px"}
            borderBottom={"3px solid #111413"}
            h={"466px"}
          >
            e
          </Flex>
        </Flex>
      </Flex>
  );
};
export default Portfolios;
