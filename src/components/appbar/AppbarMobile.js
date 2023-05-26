import React from "react";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar/appbar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./action";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen ,setShowSearchBox} = useUIContext();
  return (
    <>
      <AppbarContainer>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <AppbarHeader textAlign={"center"} variant="h4">
          My Bags
        </AppbarHeader>
        <IconButton>
          <SearchIcon onClick={()=> setShowSearchBox(true)} />
        </IconButton>
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
}
