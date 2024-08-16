import "./index.css";

import { ChakraProvider, Flex } from "@chakra-ui/react";

import Fonts from "./theme/Fonts";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import theme from "./theme/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <Flex maxW={"1640px"} margin={"auto"} flexDir={"column"} w={"100%"}>
        <RouterProvider router={router} />
        {/* <ScrollRestoration/> */}
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { ChakraProvider, Flex } from "@chakra-ui/react";
// import { BrowserRouter as Router, ScrollRestoration } from "react-router-dom";
// import theme from "./theme/index.jsx";
// import Fonts from "./theme/Fonts";
// import PageRoute from "./routes/index.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       <Fonts />
//       <Flex
//         maxW={"1440px"}
//         margin={"auto"}
//         flexDir={"column"}
//         w={"100%"}
//       >
//         <Router>
//           <ScrollRestoration />
//           <PageRoute />
//         </Router>
//       </Flex>
//     </ChakraProvider>
//   </React.StrictMode>
// );
