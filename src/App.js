import * as React from "react";

import { isProduction } from "./AppConfig";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./components/config/routes";
// MUI
import { ThemeProvider, Container, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// Custom Theme
import { theme } from "./components/store/ThemeProvider";
//Components
import PageLayout from "./components/pages/PageLayout";

import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  console.log("App");
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PageLayout>
            <Container maxWidth="lg">
              <Routes>
                {routes.map((route, index) => {
                  return (
                    <Route
                      key={`${route.name}-${index}`}
                      path={
                        isProduction ? `baby-swim/${route.url}` : `${route.url}`
                      }
                      element={route.component}
                    />
                  );
                })}
                {isProduction ? null : (
                  <Route path="*" element={<NotFound />} />
                )}
              </Routes>
            </Container>
          </PageLayout>
          {/* The rest of your application */}
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
