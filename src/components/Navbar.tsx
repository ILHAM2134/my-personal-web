import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppContext } from "@/state/RootContext";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  { name: "About", id: "#about" },
  { name: "Projects", id: "#projects" },
  { name: "Training", id: "#training" },
  { name: "Experience", id: "#experience" },
];

export default function Navbar(props: Props) {
  const [context, setContext] = useAppContext();
  const { window, isDarkMode, setIsDarkMode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        style={{
          background: "transparent",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1100,
            width: "100%",
            display: {
              sm: "flex",
            },
            justifyContent: {
              xs: "space-between",
              sm: "end",
            },
            my: {
              md: 4,
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: { xs: 2, sm: 0 },
              display: { sm: "none" },
              fontSize: "1em",
              fontWeight: 700,
            }}
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            <CheckCircleOutlineIcon />
            MyPersonalWeb
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: { xs: 1, sm: 0 }, display: { sm: "none" } }}
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "block", fontSize: "1.5rem" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ fontSize: "1.5rem", ml: { md: 3 } }}
                href={item.id}
              >
                {item.name}
              </Button>
            ))}
            <IconButton
              sx={{ ml: { md: 5 } }}
              style={{ color: isDarkMode ? "white" : "black" }}
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                setContext((prev: { darkMode: boolean }) => ({
                  ...prev,
                  darkMode: !prev.darkMode,
                }));
              }}
            >
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 200,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              <CheckCircleOutlineIcon />
              MyPersonalWeb
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }} href={item.id}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
