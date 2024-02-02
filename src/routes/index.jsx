import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./baseRoutes";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: Routes.index,
    element: <AboutUs />
  },
  {
    path: Routes.danfo,
    element: <div>Inside danfo bus</div>
  },
  {
    path: Routes.partner,
    element: <div>Partner with us</div>
  },
  {
    path: Routes.donate,
    element: <div>Donate</div>
  }
])
export default router