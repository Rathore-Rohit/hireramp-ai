import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/bannerPartners.jpg";
import PartnershipGif from "../assets/partnershipGif.gif";
import theme from "../theme";

const Partners = () => {
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
            bgcolor: "rgba(9, 30, 62, 0.4)",
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
              Partner With HireRamp.AI
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
              We collaborate with job boards, Data driven media agencies,
              top-tier ATS, CRM, data enrichment providers, and recruitment
              marketing agencies to deliver maximum value to both our partners
              and customers.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 3, sm: 4 }, py: 6, backgroundColor: "#fff" }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Side - Static Image */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              component="img"
              src={PartnershipGif}
              alt="Partner Network"
              sx={{
                width: "100%",
                maxWidth: 500,
                display: "block",
                mx: "auto",
                borderRadius: 2,
                mb: 3.5,
              }}
            />
          </Grid>

          {/* Right Side - Text & CTA */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: "32px",
                  fontWeight: 500,
                }}
              >
                Become a Partner
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.paragraph,
                  fontSize: "17px",
                  pr: { xs: 0, sm: 14 },
                  lineHeight: "32px",
                }}
              >
                If you're interested in becoming an integration partner with
                HireRamp.AI, our dedicated partnership team would be excited to
                connect with you!
              </Typography>
              <Button
                onClick={() => navigate("/demo")}
                sx={{
                  maxWidth: "175px",
                  py: 1.2,
                  px: 1,
                  fontSize: "15.2px",
                  color: theme.palette.text.white,
                  backgroundColor: theme.palette.primary.main,
                  mt: 1.5,
                }}
              >
                Partner With Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 12 },
          py: 12,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          sx={{
            color: "#5ce1e6",
            fontSize: { xs: "28px", sm: "32px", md: "32px" },
            fontWeight: 400,
            fontFamily: theme.typography.fontFamily,
            textAlign: "center",
          }}
        >
          Transform recruiting with AI and partner with HireRamp.AI to drive
          digital adoption
        </Typography>
        <Button
          onClick={() => navigate("/demo")}
          sx={{
            backgroundColor: "#5ce1e6",
            color: "white",
            px: 2,
            py: 1,
            mt: 5,
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </>
  );
};

export default Partners;
