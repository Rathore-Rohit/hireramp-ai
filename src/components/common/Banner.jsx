import { Box, Container, Typography, Button } from "@mui/material";
import bannerImage from "../../assets/employersBanner.jpg";
import theme from "../../theme";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "600px",
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
          bgcolor: "rgba(9, 30, 62, 0.7)",
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
              fontWeight: { xs: 500, sm: 500 },
              lineHeight: "52px",
              mt: { xs: 2, md: 4 },
              whiteSpace: "pre-line",
            }}
          >
            {
              "HireRamp.AI connects every piece of the hiring puzzle:\nstrategy, data, and results\nto make quality hires happen"
            }
          </Typography>

          {/* Get a demo button */}
          <Button
            sx={{
              backgroundColor: "#5ce1e6",
              color: "white",
              px: 2.5,
              py: 1,
              mt: 5,
            }}
          >
            GET A DEMO
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
