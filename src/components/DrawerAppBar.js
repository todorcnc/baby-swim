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

const drawerWidth = 240;
const navItems = [
  { name: "За нас", url: "about" },
  { name: "Курсове", url: "courses" },
  { name: "Ивенти", url: "events" },
  { name: "Галерия", url: "gallery" },
  { name: "Аксесояри за плуване", url: "accessories" },
  { name: "Контакти", url: "contacts" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigationClicked = (e, item) => {
    console.log(item);
    navigate(item.url);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.url}>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(e) => handleNavigationClicked(e, item)}
            >
              <ListItemText primary={item.name} />
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
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            MUI
          </Typography>
          <Container>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                alignContent: "center",
                textAlign: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.url}
                  sx={{
                    color: "#fff",
                    marginLeft: "8px",
                    marginRight: "8px",
                  }}
                  onClick={(e) => handleNavigationClicked(e, item)}
                >
                  {item.name}
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
