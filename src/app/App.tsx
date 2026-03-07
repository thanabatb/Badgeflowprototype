import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  useEffect(() => {
    const saved = window.localStorage.getItem("badgeflow.palette-mode");
    document.documentElement.setAttribute("data-palette", saved === "b" ? "b" : "a");
  }, []);

  return <RouterProvider router={router} />;
}
