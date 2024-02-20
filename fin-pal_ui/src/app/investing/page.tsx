"use client";

import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";

export default function Investing() {
   return (
      <ThemeProvider theme={theme}>
         <Button>Click Investing!</Button>
      </ThemeProvider>
   );
}
