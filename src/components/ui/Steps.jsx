import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UploadJobsGif from "../../assets/uploadJobsGif.gif";
import SetGoalsGif from "../../assets/setGoalsGif.gif";
import AiOptimizationGif from "../../assets/aiOptimizationGif.gif";
import QualityApplicantsGif from "../../assets/qualityApplicantsGif.gif";

const steps = [
  {
    title: "Upload Jobs",
    description:
      "Upload through XML file, connect ATS, or manually add jobs. Amplify listings with top channels and media agencies.",
    image: UploadJobsGif,
    description2: "",
    bgColor: "#ffffff",
    gifWidth: "68%",
  },
  {
    title: "Set Goals",
    description:
      "Choose budget, targeting, and hiring priorities. Drive visibility with proven digital marketing strategies.",
    description2: "",
    image: SetGoalsGif,
    bgColor: "#f9f9f9",
    gifWidth: "80%",
  },
  {
    title: "AI Optimization",
    description:
      "Automated bidding and real-time performance tuning. Maximize ROI with smart automation.",
    description2: "",
    image: AiOptimizationGif,
    bgColor: "#ffffff",
    gifWidth: "68%",
  },
  {
    title: "Quality Applicants",
    description:
      "1. Track real-time results. Get ROI-focused insights backed by data-driven digital expertise.",
    description2: "2. AI adjusts bids dynamically.",
    image: QualityApplicantsGif,
    bgColor: "#f9f9f9",
    gifWidth: "68%",
  },
];

const HeroSteps = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Box component="section" sx={{ backgroundColor: "#ffffff", pt: 2 }}>
      <Typography
        sx={{
          mt: 8,
          mb: 6,
          textAlign: "center",
          color: theme.palette.primary.main,
          fontWeight: 500,
          fontSize: { xs: "28px", sm: "32px", md: "36px" },
          px: { xs: 2, sm: 0 },
        }}
      >
        Smarter Hiring Workflow with AI
      </Typography>

      {steps.map((step, index) => {
        const isEven = (index + 1) % 2 === 0;

        return (
          <Box
            key={index}
            sx={{
              py: 8,
              px: { xs: 2, sm: 4, md: 10 },
              backgroundColor: step.bgColor,
              position: "relative",
              overflow: "hidden",
            }}
            data-aos="fade-up"
          >
            {/* Step Number - Top-Left (even) or Top-Right (odd) */}
            <Typography
              sx={{
                position: "absolute",
                top: 16,
                left: isEven ? 16 : "unset",
                right: isEven ? "unset" : 16,
                fontSize: { xs: "50px", md: "100px" },
                fontWeight: "bold",
                color: "#000",
                opacity: 0.05,
                zIndex: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              0{index + 1}
            </Typography>

            {/* Always Image Left, Text Right (alternate manually) */}
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction={isMobile ? "column" : isEven ? "row-reverse" : "row"}
              sx={{ position: "relative", zIndex: 2 }}
            >
              <Grid size={{ xs: 12, sm: 5 }}>
                <Box
                  component="img"
                  src={step.image}
                  alt="Partner Network"
                  width={step.gifWidth}
                  sx={{
                    maxWidth: 500,
                    display: "block",
                    mx: "auto",
                    borderRadius: 14,
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 7 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    fontSize: { xs: "26px", sm: "32px" },
                    mb: 1.5,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.paragraph,
                    fontWeight: 400,
                    fontSize: "17px",
                  }}
                >
                  {step.description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.paragraph,
                    fontWeight: 400,
                    fontSize: "17px",
                    mt: 0.8,
                  }}
                >
                  {step.description2}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default HeroSteps;
