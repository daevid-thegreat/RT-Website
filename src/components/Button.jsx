import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({
  w,
  // minW,
  maxW,
  px,
  py,
  bg,
  borderRadius,
  color,
  isDisabled,
  onClick,
  text,
  hover,
  fontSize,
  fontFamily,
  fontWeight,
  type,
  mb,
  h
}) => {
  return (
    <ChakraButton
      w={w ?? "100%"}
      h={h ?? '100%'}
      // minW={minW ?? "1.5rem"}
      maxW={maxW ?? "11.56rem"}
      mb={mb}
      px={px ?? "64px"}
      py={py ?? "20px"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={bg ?? "black100"}
      color={color ?? "pink300"}
      isDisabled={isDisabled ?? false}
      onClick={onClick}
      cursor={"pointer"}
      borderRadius={borderRadius ?? '0px'}
      _hover={{ bg: hover ?? "#242323" }}
      _disabled={{
        bg: "#DDD",
        color: "#3A3B3D",
        cursor: "not-allowed",
      }}
      fontSize={fontSize ?? "1rem"}
      fontFamily={fontFamily ?? "clash"}
      fontWeight={fontWeight ?? 600}
      type={type}
    >
      {text}
    </ChakraButton>
  );
};
export default Button;
