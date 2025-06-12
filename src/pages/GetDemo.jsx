import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Paper,
  Grid,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import theme from "../theme";
import bannerImage from "../assets/bannerContact.webp";

const options = [
  { label: "Request a Demo", value: "demo" },
  { label: "Partnerships", value: "partnership" },
];

const GetDemo = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      jobTitle: "",
      helpType: "",
    },
  });

  const [alert, setAlert] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("company", data.company);
    formData.append("email", data.email);
    formData.append("jobTitle", data.jobTitle);
    formData.append("helpType", data.helpType);

    // Required by FormSubmit
    formData.append("_captcha", "false");
    formData.append("_template", "box");
    formData.append("_subject", "New Contact Form Submission");

    try {
      const res = await fetch(
        "https://formsubmit.co/geetborikar@gmail.com", 
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        setAlert({ type: "success", message: "Form submitted successfully!" });

        reset({
          name: "",
          company: "",
          email: "",
          jobTitle: "",
          helpType: "",
        });

        // Auto-dismiss after 5 sec
        setTimeout(() => setAlert(null), 5000);
      } else {
        setAlert({ type: "error", message: "Submission failed. Try again!" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({ type: "error", message: "Network error. Try again!" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: "740px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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

      {/* Content Wrapper */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 6, sm: 8 },
        }}
      >
        <Grid
          container
          rowSpacing={7}
          columnSpacing={{md: 8, lg: 14}}
          alignItems="center"
          justifyContent="center"
          maxWidth="lg"
          sx={{ mx: "auto", mt: { xs: 14, md: 6 } }}
        >
          {/* Left Side */}
          <Grid size={{ xs: 12, md: 6, lg: 7 }}>
            <Typography
              component="h1"
              sx={{
                color: theme.palette.text.white,
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "30px", sm: "38px", md: "48px" },
                fontWeight: 600,
                lineHeight: { xs: "42px", sm: "52px", md: "60px" },
              }}
            >
              Empower Your Team with the Right Tools
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.white,
                fontSize: { xs: "18px", sm: "20px", md: "22px" },
                fontWeight: 400,
                mt: 3,
                lineHeight: { xs: "30px", sm: "34px", md: "38px" },
              }}
            >
              Tired of slow hiring? HireRamp.AI delivers outcome-driven
              recruiting solutions focused on speed and quality. Let’s connect
              and accelerate your hiring journey.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.white,
                fontSize: { xs: "18px", sm: "20px" },
                mt: 2,
                lineHeight: "32px",
              }}
            >
              HireRamp.AI is your growth partner - let’s elevate hiring
              standards together.
            </Typography>
          </Grid>

          {/* Right Side Form */}
          <Grid size={{ xs: 12, md: 6 , lg: 5 }}>
            <Box
              component={Paper}
              elevation={3}
              borderRadius={2}
              sx={{ p: { xs: 2, sm: 3 }, mt: { xs: 4, md: 0 } }}
            >
              <Typography
                variant="h5"
                mb={3}
                textAlign="center"
                sx={{ color: theme.palette.primary.main }}
              >
                Get a Demo
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {alert && (
                  <Alert severity={alert.type} sx={{ mb: 2 }}>
                    {alert.message}
                  </Alert>
                )}

                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <TextField
                      label="Name"
                      fullWidth
                      margin="normal"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="company"
                  control={control}
                  rules={{ required: "Company is required" }}
                  render={({ field }) => (
                    <TextField
                      label="Company"
                      fullWidth
                      margin="normal"
                      error={!!errors.company}
                      helperText={errors.company?.message}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email format",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      label="Email"
                      fullWidth
                      margin="normal"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="jobTitle"
                  control={control}
                  rules={{ required: "Job Title is required" }}
                  render={({ field }) => (
                    <TextField
                      label="Job Title"
                      fullWidth
                      margin="normal"
                      error={!!errors.jobTitle}
                      helperText={errors.jobTitle?.message}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="helpType"
                  control={control}
                  rules={{ required: "Please select an option" }}
                  render={({ field }) => (
                    <TextField
                      select
                      label="How Can We Help?"
                      fullWidth
                      margin="normal"
                      error={!!errors.helpType}
                      helperText={errors.helpType?.message}
                      {...field}
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.label}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />

                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#5ce1e6",
                    textTransform: "uppercase",
                    color: "white",
                    px: 2,
                    py: 1,
                    mt: 2,
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#4ad4da",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GetDemo;
