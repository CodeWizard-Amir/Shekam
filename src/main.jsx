import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import './assets/globalStyle.css'
createRoot(document.getElementById("root")).render(
  <StrictMode>
  <RouterProvider router={appRoutes} />
  </StrictMode>
);
