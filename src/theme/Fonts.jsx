import { Global } from "@emotion/react";

const Fonts = () => {
  <Global
    styles={`
      /* clash display */
//      @font-face {
//        font-family: 'ClashDisplay-Variable';
//       font-weight: 200 700;
//        font-display: swap;
//        font-style: normal;
//         src: url('../fonts/ClashDisplay-Variable.ttf') format('truetype');
// }
      // manrope
      @font-face {
        font-family: "Manrope Variable";
        font-style: normal;
        font-weight: 200 800;
       font-display: swap;
        src: url('../fonts/Manrope-VariableFont_wght.ttf') format('truetype')
      }
    `}
  />;
};
export default Fonts;
