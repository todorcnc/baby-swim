import * as React from "react";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// MUI
import { ThemeProvider, Container, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// Custom Theme
import { theme } from "./components/store/ThemeProvider";
// Components
import DrawerAppBar from "./components/DrawerAppBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Accessories from "./components/pages/Accessories/Accessories";
import Contacts from "./components/pages/Contacts/Contacts";
import Courses from "./components/pages/Courses/Courses";
import Events from "./components/pages/Events/Events";
import Gallery from "./components/pages/Gallery/Gallery";

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
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<NotFound />} />
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
