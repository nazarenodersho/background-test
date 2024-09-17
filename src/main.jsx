import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Grid } from "./home/Grid";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Grid />
  </StrictMode>
);
