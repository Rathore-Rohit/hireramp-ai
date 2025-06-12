import { createTheme } from "@mui/material/styles";

const lightBlue = "#5ce1e6";
const paragraphColor = "#6B6A75";
const white = "#FFFFFF";

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue,
    },
    text: {
      paragraph: paragraphColor,
      white,
    },
  },
  typography: {
    fontFamily: "Hero New, sans-serif",
  },
});

export default theme;
