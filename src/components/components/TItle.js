import React from "react";

import { Grid, Typography, Item, Box, Stack } from "@mui/material";

function TItle(props) {
  const { imgLeft, imgRight, title } = props;
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
      >
        <img
          src={imgLeft}
          alt="Left"
          style={{ width: 60, height: 60 }}
          draggable={false}
        />
        <Typography textAlign="center" variant="h5" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <img
          src={imgRight}
          alt="Right"
          style={{ width: 60, height: 60 }}
          draggable={false}
        />
      </Stack>
    </Box>
  );
}

export default TItle;
