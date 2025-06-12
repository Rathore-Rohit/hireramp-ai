import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/bannerRecruitmentAd.jpeg";
import VerifiedIcon from "@mui/icons-material/Verified";
import SettingsIcon from "@mui/icons-material/Settings";
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HandshakeIcon from "@mui/icons-material/Handshake";
import theme from "../theme";

// MUI Icons
import Steps from "../components/ui/Steps";
import Accordions from "../components/ui/Accordion";

const statsData = [
  {
    icon: (
      <VerifiedIcon
        sx={{ color: theme.palette.primary.main, fontSize: "50px" }}
      />
    ),
    value: "Simplicity",
    label:
      "Our product is built to be incredibly easy to use, with every feature thoughtfully serving a purpose and every interaction carefully designed for clarity, quality, and speed.",
  },
  {
    icon: (
      <HandshakeIcon
        sx={{ color: theme.palette.primary.main, fontSize: "50px" }}
      />
    ),
    value: "Trust & Transparency",
    label:
      "We build lasting trust through honest communication, ethical practices, and by being open, consistently accountable, and genuinely responsive in every interaction.",
  },
  {
    icon: (
      <SettingsIcon
        sx={{ color: theme.palette.primary.main, fontSize: "50px" }}
      />
    ),
    value: "Innovation",
    label:
      "We innovate by listening closely, solving real problems, and pushing boundaries. We focus on outcome-based hiring, because good products evolve and great ones lead.",
  },
];

const RecruitmentAd = () => {
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
          {/* <Box sx={{ width: "700px", ml: 9 }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "30px", sm: "44px", md: "51px", lg: "48px" },
                fontWeight: 600,
                lineHeight: "64px",
                mt: { xs: 2, md: 0 },
                whiteSpace: "pre-line",
              }}
            >
              Boost job ad performance with AI powered programmatic bidding
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "34px",
                color: theme.palette.text.white,
                mt: 3,
                pr: 12,
              }}
            >
              HireRamp.AI optimizes your job ads using intelligent programmatic
              bidding. It helps you reach the right candidates faster and with
              less effort.
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
            >
              Boost Your Hiring
            </Button>
          </Box> */}
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
              Boost job ad performance with AI powered programmatic bidding
            </Typography>

            {/* Sub Title */}
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
              HireRamp.AI optimizes your job ads using intelligent programmatic
              bidding. It helps you reach the right candidates faster and with
              less effort.
            </Typography>
            <Button
              sx={{
                backgroundColor: "#5ce1e6",
                color: "white",
                // textTransform: "capitalize",
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
          HireRamp.AI has driven innovation in the recruitment advertising
          space. We were founded on the idea that the Internet could drive
          better hiring outcomes with AI-based bidding strategies.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 300,
            lineHeight: "39px",
            color: theme.palette.text.paragraph,
            mt: 2.5,
          }}
        >
          Today thousands of organizations rely on HireRamp.AI to optimize and
          execute their recruitment advertising campaigns. We distribute
          millions of job advertisements monthly to tens of thousands of
          websites, reaching and engaging millions of job seekers.
        </Typography>
      </Box>

      <Steps />

      <Box
        component="section"
        sx={{ px: { xs: 3, sm: 6, md: 12, lg: 28 }, py: 12 }}
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
          Our Programmatic solution is built to maximize the performance of your
          recruiting ads ensuring you get the best possible return for every
          dollar spent.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 300,
            lineHeight: "39px",
            color: theme.palette.text.paragraph,
            mt: 2.5,
          }}
        >
          Unlike traditional programmatic advertising, our approach is deeply
          personalized. We combine real-time optimization, data-driven insights
          with AI, and your ongoing feedback to target the most relevant talent
          with precision and impact.
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          px: { xs: 3, sm: 5, md: 12 },
          py: 12,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: "28px", sm: "32px", md: "36px" },
            fontWeight: 400,
            textAlign: "center",
            fontFamily: theme.typography.fontFamily,
          }}
        >
          What Matters To Us
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.paragraph,
            fontSize: { xs: "17px", sm: "16px" },
            fontWeight: 400,
            textAlign: "center",
            fontFamily: theme.typography.fontFamily,
            mt: 6,
          }}
        >
          Our goal is to empower the individual and the organization to achieve
          the success. We do this through our guiding philosophies.
        </Typography>
        <Grid container spacing={8} justifyContent="center" mt={8}>
          {statsData.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <Box
                sx={{
                  height: { xs: "340px", sm: "310px", md: "290px" },
                  px: { xs: 3, sm: 4 },
                  py: { xs: 4, sm: 2, md: 0 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "rgba(7, 16, 63, 0.05) 0px 0px 16px 0px",
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                {stat.icon}
                <Typography
                  sx={{
                    color: "#5ce1e6",
                    fontFamily: theme.palette.primary.main,
                    fontSize: { xs: "22px", sm: "21px" },
                    mt: 2,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    color: "#6B6A75",
                    fontSize: { xs: "17px", sm: "16px" },
                    mt: 2,
                    whiteSpace: "pre-line",
                    textAlign: "center",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Accordions />

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
          Start your hiring transformation with HireRamp.AI
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
          Let's Connect
        </Button>
      </Box>
    </>
  );
};

export default RecruitmentAd;
