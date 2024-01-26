import * as React from "react";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./components/config/routes";
// MUI
import { ThemeProvider, Container, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// Custom Theme
import { theme } from "./components/store/ThemeProvider";
//Components
import DrawerAppBar from "./components/DrawerAppBar";

import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  console.log("App");
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DrawerAppBar />
          <Container maxWidth="lg">
            <Paper sx={{ minHeight: "93vh" }}>
              <Routes>
                {routes.map((route) => {
                  return (
                    <Route path={`${route.url}`} element={route.component} />
                  );
                })}
                <Route path="*" element={<NotFound />} />;
              </Routes>
            </Paper>
          </Container>

          {/* The rest of your application */}
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
