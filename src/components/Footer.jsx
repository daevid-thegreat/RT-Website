import { Link, Flex, Text, Image, Icon } from "@chakra-ui/react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      px={{ base: "24px", xl: "120px" }}
      py={{ base: "56px", lg: "56px" }}
      color={"white"}
      bg={"black100"}
      fontFamily={"clash"}
      fontWeight={400}
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={{ base: "", lg: "space-between" }}
    >
      <Flex flexDir={"column"}>
        <Image
          src="images/rt-logo-white.webp"
          maxW={{ base: "139px", lg: "192px" }}
          h={{ base: "47px", lg: "65.04px" }}
          mb={{ base: "23px", lg: "32px" }}
        />
        <Flex gap={"32px"} pb={{ base: "40px", lg: "26.96px" }}>
          <Link to={""}>
            <Icon
              as={FaInstagram}
              h={{ base: "17px", lg: "24px" }}
              w={{ base: "17px", lg: "24px" }}
            />
          </Link>
          <Link to={""}>
            <Icon
              as={FaTwitter}
              h={{ base: "17px", lg: "24px" }}
              w={{ base: "17px", lg: "24px" }}
            />
          </Link>
          <Link to={""}>
            <Icon
              as={FaYoutube}
              h={{ base: "17px", lg: "24px" }}
              w={{ base: "17px", lg: "24px" }}
            />
          </Link>
          <Link to={""}>
            <Icon
              as={FaLinkedinIn}
              h={{ base: "17px", lg: "24px" }}
              w={{ base: "17px", lg: "24px" }}
            />
          </Link>
        </Flex>
        <Text
          fontSize={"14px"}
          fontWeight={500}
          display={{ base: "none", lg: "block" }}
        >
          Copyright © RoadTrippers & Co 2024
        </Text>
      </Flex>
      <Flex flexDir={"column"} pb={{ base: "40px", lg: "" }}>
        <Text
          fontSize={"24px"}
          fontWeight={{ base: 600, lg: 400 }}
          pb={{ base: "24px", lg: "32px" }}
        >
          About Us
        </Text>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Who We Are
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Our Commitments
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Meet the Team
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Onboarding Seasons
        </Link>
      </Flex>
      <Flex flexDir={"column"} pb={{ base: "40px", lg: "" }}>
        <Text
          fontSize={"24px"}
          fontWeight={{ base: 600, lg: 400 }}
          pb={{ base: "24px", lg: "32px" }}
        >
          Inside Danfo Bus
        </Text>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          RT Stories
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Featured Portfolios
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          The Danfo Bus Experience
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Value Proposition
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Support System
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Our Footprints
        </Link>
      </Flex>
      <Flex flexDir={"column"} pb={{ base: "40px", lg: "" }}>
        <Text
          fontSize={"24px"}
          fontWeight={{ base: 600, lg: 400 }}
          pb={{ base: "24px", lg: "32px" }}
        >
          Partner With Us
        </Text>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Our Partners
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Members’ Startups
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Sponsorships & Grants
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          Donations
        </Link>
        <Link
          to={""}
          fontSize={{ base: "12px", md: "16px" }}
          pb={"12px"}
        >
          RT Swags
        </Link>
      </Flex>
      <Flex
        display={{ base: "block", lg: "none" }}
        mt={"40px"}
        pt={"34px"}
        w={"100%"}
        borderTop={"2px solid #198046"}
      >
        <Text fontSize={"14px"} fontWeight={500}>
          Copyright © RoadTrippers & Co 2024
        </Text>
      </Flex>
    </Flex>
  );
};
export default Footer;
