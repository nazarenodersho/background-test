import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { Grid } from "./grid/Grid";
import { Grid } from "./newGrid/Grid";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Grid /> */}
    <Grid />
  </StrictMode>
);
