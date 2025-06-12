import React from "react";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: "#5ce1e6",
              animation: "bounce 1.4s infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </Box>

      {/* Keyframes animation using global styles */}
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            } 
            40% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Loader;
