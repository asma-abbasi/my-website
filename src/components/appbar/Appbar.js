import React from "react";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDesktop";

export default function Appbar() {
  const theme = createTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}
