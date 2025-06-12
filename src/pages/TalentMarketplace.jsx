import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/bannerTalentMp.webp";
import WhatMakesUsDiff from "../assets/whatMakesDiff.webp";
import image1 from "../assets/talentMp1.webp";
import theme from "../theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const points = [
  {
    title: "Only the Best - Verified, Vetted, and Ready",
    description:
      "Quality you can count on. Every talent is reviewed and approved by our team.",
  },
  {
    title: "Where HireRamp.AI Innovation Meets Global Talent",
    description: "A truly global marketplace, used in over 100 countries.",
  },
  {
    title: "AI finds the fit. Humans build the future",
    description:
      "Your perfect match, powered by AI. No guesswork. Just great talent, on demand.",
  },
];

const statsData = [
  {
    value: "150k",
    label: "Top-rated, highly skilled global talent pool",
  },
  {
    value: "$50,000",
    label: "Cost savings per talent hired through HireRamp.AI",
  },
  {
    value: "80%",
    label: "Faster Time to Hire",
  },
  {
    value: "50%",
    label: "Faster Project Delivery",
  },
];

const TalentMarketplace = () => {
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
        <Box
          component="img"
          src={bannerImage}
          alt="BannerImage"
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
            bgcolor: "rgba(9, 30, 62, 0.6)",
            zIndex: 1,
          }}
        />

        {/* Content */}
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
              width: { xs: "100%", sm: "730px", md: "780px", lg: "890px" },
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
                pr: { xs: 0, sm: 6, md: 4, lg: 0 },
              }}
            >
              Put Every Role and Every Project on the Fast Track
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
              There are more than 150,000 highly skilled tech professionals on
              our roster. Most of them come from largely untapped markets. They
              are ready to be placed quickly and effectively.
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

      {/* Stats Section (Outside the Banner, Overlapping It) */}
      <Box
        component="section"
        sx={{
          mt: { xs: "-42px", md: "-72px", lg: "-62px" },
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          pb: 8,
          px: 3,
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "340px", sm: "650px", md: "950px", lg: "1200px" },
            backgroundColor: "white",
            px: 4,
            py: 3,
            borderRadius: 1.5,
            boxShadow: "rgba(39, 17, 78, 0.08) 0px 0px 10px 0px",
          }}
        >
          <Grid
            container
            rowSpacing={6}
            columnSpacing={8}
            justifyContent="center"
          >
            {statsData.map((stat, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: "#5ce1e6" }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#6B6A75" }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          px: { xs: 3, sm: 6, md: 12, lg: 28 },
          py: 12,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 300,
            lineHeight: "39px",
            color: theme.palette.text.paragraph,
          }}
        >
          Talent isn’t found. It’s connected, vetted, and activated. We are not
          just a talent marketplace. We are an intelligent hiring ecosystem.
          Using AI-driven insights, verified profiles, and real-time performance
          signals, we connect companies with the right talent faster, more
          reliably, and at scale. Our difference lies not only in who we find,
          but in how we match.
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          px: { xs: 3, sm: 5, md: 6, lg: 12 },
          py: 8,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontSize: "32px",
            fontWeight: 400,
            textAlign: "center",
            fontFamily: theme.typography.fontFamily,
            mb: 8,
          }}
        >
          What Makes Us Different?
        </Typography>

        <Grid
          container
          rowSpacing={6}
          columnSpacing={12}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
        >
          {/* Image - Right on Desktop, Top on Mobile */}
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Box
              component="img"
              src={WhatMakesUsDiff}
              alt="Image"
              width="100%"
              borderRadius={3}
              sx={{ maxHeight: 400, objectFit: "cover" }}
            />
          </Grid>

          {/* Content */}
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
            {points.map((point, i) => (
              <Box key={i} display="flex" mb={3}>
                <CheckCircleIcon
                  sx={{ color: theme.palette.primary.main, mr: 2, mt: 0.5 }}
                />
                <Box>
                  <Typography
                    sx={{ fontSize: "22px", color: theme.palette.primary.main }}
                  >
                    {point.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      color: theme.palette.text.paragraph,
                      mt: 0.5,
                    }}
                  >
                    {point.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box
        component="section"
        sx={{
          backgroundColor: "#f9f9f9",
          px: { xs: 3, sm: 5, md: 12 },
          py: 12,
        }}
      >
        <Grid container rowSpacing={6} columnSpacing={6}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src={image1}
              alt="Image"
              width="100%"
              borderRadius={3}
              sx={{ maxHeight: 400, objectFit: "cover" }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: "28px",
                fontWeight: 500,
              }}
            >
              Empowering Smart Hiring with Global Reach
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.paragraph,
                fontSize: "17px",
                lineHeight: "28px",
                mt: 2,
                pr: { xs: 0, md: 0, lg: 6 },
                textAlign: "justify",
              }}
            >
              At HireRamp.AI, we go beyond traditional staffing by connecting
              you with pre-vetted, highly skilled professionals from emerging
              and established tech hubs around the world. Whether you're scaling
              your team quickly or seeking niche expertise for a critical
              project, our intelligent hiring platform ensures you find the
              right talent faster, smarter, and more efficiently. From
              short-term roles to long-term strategic hires, tap into a global
              talent ecosystem built for agility, quality, and speed.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TalentMarketplace;
