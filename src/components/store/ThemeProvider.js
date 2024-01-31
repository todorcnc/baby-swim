import { createTheme } from "@mui/material/styles";
import { green, purple, blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0d8bb1",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Cuprum",
      textTransform: "none",
      fontSize: 18,
    },
  },
});
