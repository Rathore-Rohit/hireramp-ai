import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import theme from "../../theme";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          pt: 6,
          px: { xs: 3, sm: 6, md: 8, lg: 24 },
        }}
      >
        <Grid container rowSpacing={6} justifyContent="center">
          {/* Get in Touch */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#5ce1e6",
                fontSize: { xs: "24px", sm: "22px" },
                fontWeight: 400,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Get in Touch
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link
                component={RouterLink}
                to="/demo"
                underline="none"
                sx={{
                  color: "#6B6A75",
                  fontFamily: theme.typography.fontFamily,
                  fontSize: { xs: "16px", sm: "16px" },
                  "&:hover": {
                    color: "#5ce1e6",
                  },
                }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Employers */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#5ce1e6",
                fontSize: { xs: "24px", sm: "22px" },
                fontWeight: 400,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Employers
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link
                component={RouterLink}
                to="/solutions"
                underline="none"
                sx={{
                  color: "#6B6A75",
                  fontFamily: theme.typography.fontFamily,
                  fontSize: { xs: "16px", sm: "16px" },
                  "&:hover": {
                    color: "#5ce1e6",
                  },
                }}
              >
                Solutions
              </Link>
            </Box>
          </Grid>

          {/* Address */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#5ce1e6",
                fontSize: { xs: "24px", sm: "22px" },
                fontWeight: 400,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Address
            </Typography>
            <Box
              sx={{ mt: 2, display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <LocationOnIcon
                sx={{ color: theme.palette.primary.main, mt: "2px" }}
              />
              <Typography
                sx={{
                  color: "#6B6A75",
                  fontFamily: theme.typography.fontFamily,
                  fontSize: { xs: "16px", sm: "16px" },
                }}
              >
                2600 Ventura Dr APT 312, Plano, TX 75093
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        textAlign="center"
        mt={6}
        sx={{
          py: 3,
          color: "#6B6A75",
          backgroundColor: "#f9f9f9",
          fontFamily: theme.typography.fontFamily,
          fontSize: { xs: "16px", sm: "13px", md: "16px" },
        }}
      >
        © 2025 HireRamp.AI ®
      </Box>
    </>
  );
};

export default Footer;
