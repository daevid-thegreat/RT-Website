// import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Routes } from "./baseRoutes";
import {
  Route,
  Routes as RouteWrapper,
  Navigate,
} from "react-router-dom";
// import Danfo from "../pages/danfo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import AboutUs from "../pages/aboutUs";
// import PartnerWithUs from "../pages/pwu";
// import HomeP from "../pages/homeP";
// import AboutUs from "../pages/aboutUs";
import Loader from "./loader";
const Danfo = lazy(async () => await import("../pages/danfo"));
const AboutUs = lazy(async () => await import("../pages/aboutUs"));
const PartnerWithUs = lazy(async () => await import("../pages/pwu"));
const HomeP = lazy(async () => await import("../pages/homeP"));
// const Donate = lazy(async () => await import("../pages/homeP"));

const PageRoute = () => {
  return (
    // Make this better later
    <Suspense fallback={<Loader />}>
      <RouteWrapper>
        <Route
          path={Routes.index}
          element={
            <>
              <Nav bg={"#f6b847"} />
              <HomeP />
              <Footer />
            </>
          }
        />
        <Route
          path={Routes.about}
          element={
            <>
              <Nav bg={"#f6b847"} />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path={Routes.danfo}
          element={
            <>
              <Nav bg={"#f6b847"} />
              <Danfo />
              <Footer />
            </>
          }
        />
        <Route
          path={Routes.partner}
          element={
            <>
              <Nav bg={"#f6b847"} />
              <PartnerWithUs />
              <Footer />
            </>
          }
        />
        {/* <Route path={Routes.donate} element={<>
        <Nav bg={"#f6b847"} />
        <Donate />
      </>}/> */}
      </RouteWrapper>
    </Suspense>
  );
};

export default PageRoute;
