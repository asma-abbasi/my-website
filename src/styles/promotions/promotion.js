import { Box, Typography, colors } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme/Theme";




export const PromotionsContainer = styled(Box)(({theme})=>({

    [theme.breakpoints.up('md')]:{
        padding: "15px 0px 15px 0px",
    },
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'5px 0px ',
    overflow:'hidden',
    background:Colors.secondary

}))

export const MessageText = styled(Typography)(({theme})=>({
    fontFamily:"'Montez','cursive'",
    color:Colors.white,
    fontSize:'1rem',
    [theme.breakpoints.up('md')]:{
        fontSize:'2.5rem',
      },
}))