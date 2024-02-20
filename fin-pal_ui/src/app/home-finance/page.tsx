"use client";

import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";

export default function HomeFinance() {
   return (
      <ThemeProvider theme={theme}>
         <Button>Click Home Finance!</Button>
      </ThemeProvider>
   );
}
