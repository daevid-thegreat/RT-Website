import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import theme from "./theme/index.jsx";
import Fonts from "./theme/Fonts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <Flex
        maxW={"1440px"}
        margin={"auto"}
        flexDir={"column"}
        w={"100%"}
      >
        <RouterProvider router={router} />
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
