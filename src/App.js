import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme/Theme";
import Appbar from "./components/appbar/Appbar";
import Banner from "./components/banner/Banner";
import Promotions from "./components/promotions/Promotions";
import Products from "./components/products/Product";
import Footer from "./components/footer/Footer";
import AppDrawer from "./components/drawer/AppDrawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/search/Search";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
