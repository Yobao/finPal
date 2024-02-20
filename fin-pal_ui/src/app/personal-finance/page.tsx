"use client";

import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

export default function PersonalCosts() {
   return (
      <ThemeProvider theme={theme}>
         <Button>Click Personal Costs!</Button>
      </ThemeProvider>
   );
}
