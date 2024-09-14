import React from "react";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1">Likelion UCSD</Typography>
    </Box>
  );
}