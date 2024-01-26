import React from "react";
import { Box } from "@mui/material";
import DrawerAppBar from "../components/DrawerAppBar";
import Footer from "../components/Footer";
// other imports

function PageLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Full viewport height
      }}
    >
      <DrawerAppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Allows this box to grow and fill available space
          // Add padding or margins as needed
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

export default PageLayout;
