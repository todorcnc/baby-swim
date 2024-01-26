import React from "react";

import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        boxShadow: "0 -4px 8px -2px rgba(0, 0, 0, 0.2)",
        mt: 3,
        p: 6,
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="h6" color="white" align="center" gutterBottom>
        Footer Title
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Typography variant="body2" color="white" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://yourwebsite.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Footer;
