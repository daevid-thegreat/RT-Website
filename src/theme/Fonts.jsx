import { Global } from "@emotion/react";

const Fonts = () => {
  <Global
    styles={`
      // clash display
      @font-face {
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/ClashDisplay-Medium.otf') format('opentype'), url('./fonts/ClashDisplay-Regular.otf') format('opentype')
      }
    `}
  />;
};
export default Fonts;
