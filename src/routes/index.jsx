import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./baseRoutes";
import AboutUs from "../pages/AboutUs";
import Danfo from "../pages/danfo";
import Nav from "../components/Nav";

const router = createBrowserRouter([
  {
    path: Routes.index,
    element: (
      <>
        <Nav />
        <AboutUs />
      </>
    ),
  },
  {
    path: Routes.danfo,
    element: (
      <>
        <Nav />
        <Danfo />
      </>
    ),
  },
  {
    path: Routes.partner,
    element: (
      <div>
        <Nav />
        Partner with us
      </div>
    ),
  },
  {
    path: Routes.donate,
    element: (
      <div>
        <Nav />
        Donate
      </div>
    ),
  },
]);
export default router;
