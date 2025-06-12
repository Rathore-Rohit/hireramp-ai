import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Icons
import SettingsIcon from "@mui/icons-material/Settings"; // Setup Process
import PublicIcon from "@mui/icons-material/Public"; // Reach
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Budget
import BarChartIcon from "@mui/icons-material/BarChart"; // Performance

const comparisonData = [
  {
    title: "Setup Process",
    icon: (
      <SettingsIcon
        sx={{ mr: 2, verticalAlign: "middle", color: "primary.main" }}
      />
    ),
    manual: "Requires manual entry and setup for each platform.",
    programmatic: "Automated setup with job feed integration.",
  },
  {
    title: "Reach",
    icon: (
      <PublicIcon
        sx={{ mr: 2, verticalAlign: "middle", color: "primary.main" }}
      />
    ),
    manual: "Limited to selected platforms.",
    programmatic: "Distributed across multiple platforms automatically.",
  },
  {
    title: "Budget Management",
    icon: (
      <AttachMoneyIcon
        sx={{ mr: 2, verticalAlign: "middle", color: "primary.main" }}
      />
    ),
    manual: "Manual budget distribution and tracking.",
    programmatic: "AI-based real-time optimization for best ROI.",
  },
  {
    title: "Performance Tracking",
    icon: (
      <BarChartIcon
        sx={{ mr: 2, verticalAlign: "middle", color: "primary.main" }}
      />
    ),
    manual: "Requires separate tools and manual effort.",
    programmatic: "Integrated real-time analytics dashboard.",
  },
];

const Accordions = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6, backgroundColor: "#ffffff" }}>
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.main,
          textAlign: "center",
          fontWeight: 500,
          fontSize: { xs: "28px", sm: "32px", md: "36px" },
          mb: 6,
        }}
      >
        Manual vs Programmatic Advertising
      </Typography>

      {comparisonData.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 3,
            boxShadow: "rgba(7, 16, 63, 0.05) 0px 0px 16px 0px",
            py: 0.5,
            borderTop: "none",
            "&:before": {
              display: "none", // 🔥 This removes the unwanted default border
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: theme.palette.text.paragraph }} />
            }
            sx={{ backgroundColor: "#ffffff" }}
          >
            <Typography
              display="flex"
              alignItems="center"
              sx={{
                color: theme.palette.primary.main,
                fontSize: "21px",
                fontWeight: 500,
              }}
            >
              {item.icon}
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  flex: "1 1 50%",
                  backgroundColor: "#f9f9f9",
                  p: 2,
                  borderRadius: 1,
                  //   border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  fontWeight={600}
                  mb={1}
                  sx={{ color: theme.palette.primary.main }}
                >
                  Manual Job Ad Buying
                </Typography>
                <Typography sx={{ color: theme.palette.text.paragraph }}>
                  {item.manual}
                </Typography>
              </Box>

              <Box
                sx={{
                  flex: "1 1 50%",
                  backgroundColor: "#f9f9f9",
                  p: 2,
                  borderRadius: 1,
                  //   border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  fontWeight={600}
                  mb={1}
                  sx={{ color: theme.palette.primary.main }}
                >
                  Programmatic Advertising with AI
                </Typography>
                <Typography sx={{ color: theme.palette.text.paragraph }}>
                  {item.programmatic}
                </Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Accordions;
