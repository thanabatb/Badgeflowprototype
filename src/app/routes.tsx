import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { Registration } from "./pages/Registration";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/register",
    Component: Registration,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/pricing",
    Component: Pricing,
  },
]);
