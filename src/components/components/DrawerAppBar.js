import * as React from "react";

import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
//Routes
import { routes } from "../config/routes";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigationClicked = (e, route) => {
    navigate(route.url);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Button
        onClick={(e) => {
          handleNavigationClicked(e, { url: "" });
        }}
      >
        <Typography variant="h6" sx={{ my: 2, color: "white" }}>
          MUI
        </Typography>
      </Button>
      <Divider />
      <List>
        {routes.map((route) => (
          <ListItem key={route.url}>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(e) => handleNavigationClicked(e, route)}
            >
              <ListItemText primary={route.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Container>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },

                alignItems: "center", // Align items vertically in the center
                justifyContent: "space-between", // Distribute space between items
              }}
            >
              <Button
                textAlign="left"
                onClick={(e) => {
                  handleNavigationClicked(e, { url: "" });
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      color: "white",
                    },
                  }}
                >
                  MUI
                </Typography>
              </Button>
              {routes.map((route) => (
                <Button
                  key={route.url}
                  sx={{
                    color: "#fff",
                    marginLeft: "4px",
                    marginRight: "4px",
                    fontSize: "14px",
                  }}
                  onClick={(e) => handleNavigationClicked(e, route)}
                >
                  {route.label}
                </Button>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;