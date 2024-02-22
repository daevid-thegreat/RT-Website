import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./baseRoutes";
import AboutUs from "../pages/AboutUs";
import Danfo from "../pages/danfo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const router = createBrowserRouter([
  {
    path: Routes.index,
    element: (
      <>
        <Nav />
        <AboutUs />
        <Footer />
      </>
    ),
  },
  {
    path: Routes.danfo,
    element: (
      <>
        <Nav />
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
