import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./baseRoutes";
import Danfo from "../pages/danfo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AboutUs from "../pages/aboutUs";

const router = createBrowserRouter([
  {
    path: Routes.index,
    element: (
      <>
        <Nav bg={"#f6b847"} bgImage={'images/rough-bg.png'} />
        <AboutUs />
        <Footer />
      </>
    ),
  },
  {
    path: Routes.danfo,
    element: (
      <>
        <Nav bg={'white'} />
        <Danfo />
        <Footer />
      </>
    ),
  },
  {
    path: Routes.partner,
    element: (
      <div>
        <Nav />
        Partner with us
        <Footer />
      </div>
    ),
  },
  {
    path: Routes.donate,
    element: (
      <div>
        <Nav />
        Donate
        <Footer />
      </div>
    ),
  },
]);
export default router;
