import React from "react";
import {
 
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar/appbar";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./action";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  const {setShowSearchBox} = useUIContext();

  return (
    
    <AppbarContainer>
      <AppbarHeader> My Bage</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={()=>setShowSearchBox(true)} />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
    
  );
}
