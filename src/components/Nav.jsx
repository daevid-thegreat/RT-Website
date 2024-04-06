import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Button from "./Button";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";
import { useState } from "react";

const Nav = ({bg}) => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      w={"100%"}
      pos={"fixed"}
      zIndex={"100"}
      bg={bg}
      bgImage={"images/rough-bg.png"}
      maxW={"1440px"}
      margin={"auto"}
      borderLeft={{
        base: "",
        md: "1px solid #111413",
      }}
    >
      <Flex
        h={"64px"}
        justifyContent={"space-between"}
        borderBottom={{
          base: "3px solid",
          md: "4px solid",
        }}
        borderColor={"black100"}
        // py={"12.52px"}
      >
        <Box
          pl={{ base: "19px", md: "24px" }}
          pr={{ base: "16px", md: "48px" }}
          borderRight={{
            base: "3px solid",
            md: "4px solid",
          }}
          alignItems={"center"}
          borderColor={"black100"}
          display={{ base: showNav ? "none" : "flex", lg: "flex" }}
        >
          <Image
            src="images/rt-logo.png"
            my={"12.52px"}
            onClick={() => navigate(Routes.index)}
            cursor={'pointer'}
          />
        </Box>
        <Box
          display={{ base: showNav ? "flex" : "none", lg: "none" }}
          pl={{ base: "19px", md: "24px" }}
          alignItems={"center"}
        >
          <Text
            fontSize={"1rem"}
            fontFamily={"clash"}
            fontWeight={600}
          >
            Menu
          </Text>
        </Box>
        <Flex
          fontFamily={"manrope"}
          fontSize={"1rem"}
          fontWeight={500}
          color={"black100"}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderLeft={"4px solid"}
          borderColor={"black100"}
          pl={"24px"}
          display={{ base: "none", lg: "flex" }}
        >
          <Text
            pr={"24px"}
            cursor={"pointer"}
            onClick={() => navigate(Routes.index)}
          >
            Home
          </Text>

          <Image src={"/images/ellipse.png"} pr={"24px"} />

          <Text
            pr={"24px"}
            cursor={"pointer"}
            onClick={() => navigate(Routes.about)}
          >
            About Us
          </Text>
          <Image src={"/images/ellipse.png"} pr={"24px"} />

          <Text
            pr={"24px"}
            cursor={"pointer"}
            onClick={() => navigate(Routes.danfo)}
          >
            Inside Danfo Bus
          </Text>
          <Image src={"/images/ellipse.png"} pr={"24px"} />

          <Text
            pr={"24px"}
            cursor={"pointer"}
            onClick={() => navigate(Routes.partner)}
          >
            Partner With Us
          </Text>

          <Button
            text={"DONATE"}
            cursor={"pointer"}
            onClick={() => navigate(Routes.donate)}
          />
        </Flex>

        <Flex
          borderLeft={"3px solid"}
          borderColor={"black10"}
          px={"24px"}
          alignItems={"center"}
          display={{ base: "flex", lg: "none" }}
        >
          {showNav ? (
            <CloseIcon
              h={"1rem"}
              w={"1rem"}
              onClick={() => setShowNav(false)}
            />
          ) : (
            <HamburgerIcon
              h={"2rem"}
              w={"2rem"}
              onClick={() => setShowNav(true)}
            />
          )}
        </Flex>
      </Flex>
      {showNav && (
        <Flex
          justifyContent={"space-between"}
          flexDir={"column"}
          h={"calc(100vh - 64px)"}
          display={{ base: "flex", lg: "none" }}
        >
          <Flex
            flexDir={"column"}
            fontSize={"2rem"}
            fontWeight={600}
            fontFamily={"clash"}
            color={"black200"}
          >
            <Flex
              py={"40px"}
              borderBottom={"3px solid"}
              borderColor={"black200"}
              w={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                onClick={() => {
                  navigate(Routes.index);
                  setShowNav(false);
                }}
              >
                Home
              </Text>
            </Flex>

            <Flex
              py={"40px"}
              borderBottom={"3px solid"}
              borderColor={"black200"}
              w={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                onClick={() => {
                  navigate(Routes.about);
                  setShowNav(false);
                }}
              >
                About Us
              </Text>
            </Flex>

            <Flex
              py={"40px"}
              borderBottom={"3px solid"}
              borderColor={"black200"}
              w={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                onClick={() => {
                  navigate(Routes.danfo);
                  setShowNav(false);
                }}
              >
                Inside Danfo Bus
              </Text>
            </Flex>

            <Flex
              py={"40px"}
              borderBottom={"3px solid"}
              borderColor={"black200"}
              w={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                onClick={() => {
                  navigate(Routes.partner);
                  setShowNav(false);
                }}
              >
                Partner With Us
              </Text>
            </Flex>
          </Flex>
          <Flex onClick={() => navigate(Routes.danfo)}>
            <Button text={"DONATE"} w={"100%"} maxW={"100rem"} />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
export default Nav;
