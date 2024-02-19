import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const theme = extendTheme({
  colors,
  fonts: {
    clash: "ClashDisplay-Variable",
    manrope: `"Manrope Variable", sans-serif`,
  },
});

export default theme;
