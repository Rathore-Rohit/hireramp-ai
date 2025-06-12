// components/StatsSection.jsx
import React from "react";
import { Box, Typography, Grid, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HiringGif from "../assets/hiringGif.gif";
import ResponseGif from "../assets/responseGif.gif";
import QualityHiringGif from "../assets/qualityHiringGif.gif";
import HappyCustomerGif from "../assets/happyCustomerGif.gif";
import bannerImage from "../assets/bannerEmployers.webp";

const statsData = [
  {
    value: "30%",
    label: "Optimized hiring spend",
    src: HiringGif,
  },
  {
    value: "50%",
    label: "Improvement in Response rate",
    src: ResponseGif,
  },
  {
    value: "70%",
    label: "Increase in Quality of Hire",
    src: QualityHiringGif,
  },
  {
    value: "5000+",
    label: "Happy Customers",
    src: HappyCustomerGif,
  },
];

const Employers = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "680px",
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={bannerImage}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(9, 30, 62, 0.5)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "730px", md: "780px", lg: "780px" },
              pl: { xs: 2, sm: 4, md: 6, lg: 9 },
              pr: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "32px", sm: "44px", md: "52px", lg: "48px" },
                fontWeight: 600,
                lineHeight: { xs: "46px", sm: "60px", md: "66px", lg: "64px" },
                mt: { xs: 2, md: 0 },
                pr: { xs: 0, sm: 6, md: 4, lg: 8 },
              }}
            >
              Smarter Job Advertising with AI for Effective Results
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "20px", sm: "21px", md: "24px", lg: "22px" },
                fontWeight: 400,
                lineHeight: { xs: "34px", sm: "36px", md: "40px", lg: "36px" },
                color: theme.palette.text.white,
                mt: 3,
                pr: { xs: 1, sm: 0, md: 0, lg: 0 },
              }}
            >
              HireRamp.AI connects every piece of the hiring puzzle by aligning
              strategy, data, and results to make quality hires happen.
            </Typography>
            <Button
              sx={{
                backgroundColor: "#5ce1e6",
                color: "white",
                px: 2.5,
                py: 1,
                mt: 5,
                fontSize: "16px",
              }}
              onClick={() => navigate("/demo")}
            >
              Get a Demo
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          py: 12,
          px: { xs: 3, sm: 6, md: 8, lg: 12 },
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#5ce1e6",
            fontSize: { xs: "28px", sm: "32px", md: "36px" },
            fontWeight: 500,
            px: { xs: 0, sm: 8, md: 0 },
          }}
        >
          Get the most from your job ads with AI-optimized <br /> and
          performance-led solutions
        </Typography>
        <Typography
          sx={{
            color: "#6B6A75",
            fontSize: { xs: "18px", sm: "17px", md: "20px", lg: "18px" },
            mt: 4,
            mb: { xs: 6, sm: 8 },
          }}
        >
          Smarter hiring starts with AI-powered bidding
        </Typography>

        <Grid
          container
          rowSpacing={{ xs: 4, md: 6 }}
          columnSpacing={{ xs: 0, sm: 6, md: 0 }}
          justifyContent="center"
        >
          {statsData.map((stat, index) => (
            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              key={index}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                color="primary"
                fontWeight="bold"
                sx={{
                  color: "#5ce1e6",
                  fontSize: { xs: "48px", sm: "40px", md: "52px" },
                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  color: "#6B6A75",
                  fontSize: { xs: "18px", sm: "17px", md: "20px", lg: "18px" },
                }}
              >
                {stat.label}
              </Typography>
              <Box
                component="img"
                src={stat.src}
                sx={{
                  width: { xs: "60%", sm: "70%" },
                  borderRadius: 2,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Employers;
