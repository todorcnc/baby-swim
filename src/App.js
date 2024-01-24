import * as React from 'react';
// MUI
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// Custom Theme
import { theme } from "./store/ThemeProvider"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      {/* The rest of your application */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
