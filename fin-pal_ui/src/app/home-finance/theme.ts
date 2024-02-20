"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   subsets: ["latin"],
   display: "swap",
});

const theme = createTheme({
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               backgroundColor: "yellow",
            },
         },
      },
   },
});

export default theme;