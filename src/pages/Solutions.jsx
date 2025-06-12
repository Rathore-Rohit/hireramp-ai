import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import bannerImage from "../assets/bannerSolutions.webp";
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupIcon from "@mui/icons-material/Group";
import theme from "../theme";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "620px",
        }}
      >
        {/* Background Image */}
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
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Container>
            <Typography
              component="h1"
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "30px", sm: "44px", md: "51px", lg: "40px" },
                fontWeight: { xs: 500, sm: 700 },
                lineHeight: { xs: "46px", sm: "60px", md: "66px", lg: "64px" },
                mt: { xs: 2, md: 0 },
                whiteSpace: "pre-line",
              }}
            >
              {
                "The future of recruitment marketing automated by AI scaled by programmatic from click to hire with AI and programmatic in perfect sync"
              }
            </Typography>
          </Container>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{ px: { xs: 3, sm: 8 }, py: 12, backgroundColor: "#f9f9f9" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: "28px", sm: "32px", md: "36px" },
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Discover How HireRamp.AI Can Accelerate Your Hiring Strategy
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            color: theme.palette.text.paragraph,
            fontSize: { xs: "18px", sm: "17px", md: "20px", lg: "18px" },
            mt: 4,
            mb: 6,
          }}
        >
          From smarter recruitment ads to an intelligent talent marketplace -
          we've got you covered.
        </Typography>

        <Grid container rowSpacing={6} columnSpacing={8}>
          {/* Recruitment Advertising */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: 3,
                boxShadow: "rgba(7, 16, 63, 0.06) 0px 0px 16px 0px",
                transition: "0.3s",
                p: 4,
                // '&:hover': { boxShadow: 6 },
                cursor: "default",
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <CampaignIcon fontSize="large" color="primary" />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "22px",
                    lineHeight: "32px",
                  }}
                >
                  Recruitment Advertising
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.paragraph,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Leverage AI-powered bidding to maximize your job ad performance
                with precision targeting.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "primary.main",
                  mt: 2,
                  fontSize: "17px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/employers/recruitment-advertising")}
              >
                Learn More →
              </Typography>
            </Box>
          </Grid>

          {/* Talent Marketplace */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: 3,
                boxShadow: "rgba(7, 16, 63, 0.06) 0px 0px 16px 0px",
                transition: "0.3s",
                p: 4,
                // '&:hover': { boxShadow: 6 },
                cursor: "default",
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <GroupIcon fontSize="large" color="primary" />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "22px",
                    lineHeight: "32px",
                  }}
                >
                  Talent Marketplace
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.paragraph,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Connect with top talent faster using AI recommendations and
                real-time availability.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "primary.main",
                  mt: 2,
                  fontSize: "17px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/employers/talent-marketplace")}
              >
                Learn More →
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Solutions;
