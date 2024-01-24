import { createTheme } from '@mui/material/styles';
import { green, purple, blue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
    },
    secondary: {
      main: green[500],
    },
  },
});