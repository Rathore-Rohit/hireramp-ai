import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import WhiteLogo from "../../assets/logoWhite.png";
import Logo from "../../assets/logo.png";

const navItems = [
  {
    label: "Employers",
    path: "/",
    submenu: [
      {
        label: "Solutions",
        path: "/solutions",
        subtitle: "Hire Quality, Faster",
      },
      {
        label: "Recruitment Advertising",
        path: "/employers/recruitment-advertising",
        subtitle: "Let AI bid smarter to maximize job ad results",
      },
      {
        label: "Talent Marketplace",
        path: "/employers/talent-marketplace",
        subtitle: "Hire Fast with AI",
      },
    ],
  },
  { label: "Partners", path: "/partners" },
  { label: "Resources", path: null },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const [scrolled, setScrolled] = useState(false);
  const logoSrc = scrolled ? Logo : WhiteLogo;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event, label) => {
    if (label === "Employers") {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const location = useLocation();

  useEffect(() => {
    const matchedItem = navItems.find((item) => {
      if (item.submenu) {
        return (
          item.submenu.find((sub) => location.pathname === sub.path) ||
          location.pathname === item.path
        );
      }
      return location.pathname === item.path;
    });

    if (matchedItem) {
      setActiveTab(matchedItem.label);
    }
  }, [location.pathname]);

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        backgroundColor: scrolled ? "white" : "transparent",
        backdropFilter: scrolled ? "blur(2px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(2px)" : "none",
        boxShadow: scrolled ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "none" : ".8px solid rgba(255, 255, 255, 0.1)", //".8px solid rgba(255, 255, 255, 0.1)
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 10, flexGrow: 1 }}
        >
          <Box
            component="img"
            src={logoSrc}
            alt="Jawam Infotech Logo"
            sx={{ width: 150, ml: { md: 2.8 }, cursor: "pointer" }}
          />

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              {navItems.map(({ label, path, submenu }) => (
                <Box
                  key={label}
                  component={Link}
                  to={path}
                  onClick={() => setActiveTab(label)}
                  onMouseEnter={(e) => handleMouseEnter(e, label)}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    textDecoration: "none",
                    position: "relative",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    height: "65px",
                    color:
                      activeTab === label
                        ? "#5ce1e6"
                        : scrolled
                        ? "black"
                        : "white",
                    fontWeight: activeTab === label ? "bold" : "normal",
                    "&:hover": {
                      color: "#5ce1e6",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">
                      {label.toUpperCase()}
                    </Typography>
                    {activeTab === label && (
                      <Box
                        sx={{
                          height: 2.5,
                          width: "100%",
                          backgroundColor: "#5ce1e6",
                          borderRadius: 1,
                          position: "absolute",
                          bottom: 0,
                        }}
                      />
                    )}
                  </Box>

                  {/* Dropdown menu if submenu exists */}
                  {submenu && (
                    <Box
                      onMouseEnter={() => setAnchorEl(true)}
                      onMouseLeave={handleMouseLeave}
                      sx={{
                        display: anchorEl ? "flex" : "none",
                        position: "absolute",
                        top: "65px",
                        left: 0,
                        backgroundColor: "white",
                        minWidth: 600,
                        boxShadow: 3,
                        zIndex: 10,
                        p: 2,
                        gap: 4,
                      }}
                    >
                      {/* Left Column: Featured Item */}
                      <Box
                        component={Link}
                        to={submenu[0].path}
                        sx={{
                          flex: 1,
                          borderRight: "1px solid #ddd",
                          pr: 2,
                          "&:hover .label": { color: "#5ce1e6" },
                          "&:hover .subtitle": { color: "#5ce1e6" },
                          textDecoration: "none",
                        }}
                      >
                        <Typography
                          className="label"
                          variant="body1"
                          color="black"
                        >
                          {submenu[0].label}
                        </Typography>
                        <Typography
                          className="subtitle"
                          variant="body2"
                          color="text.secondary"
                        >
                          {submenu[0].subtitle}
                        </Typography>
                      </Box>

                      {/* Right Column: Remaining Items */}
                      <Box sx={{ flex: 2 }}>
                        {submenu.slice(1).map((sub) => (
                          <Box
                            key={sub.label}
                            component={Link}
                            to={sub.path}
                            onClick={() => setAnchorEl(null)}
                            sx={{
                              display: "block",
                              mb: 2,
                              color: "black",
                              textDecoration: "none",
                              "&:hover .title": { color: "#5ce1e6" },
                              "&:hover .subtitle": { color: "#5ce1e6" },
                            }}
                          >
                            <Typography className="title" variant="body1">
                              {sub.label}
                            </Typography>
                            <Typography
                              className="subtitle"
                              variant="body2"
                              color="text.secondary"
                            >
                              {sub.subtitle}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {isMobile ? (
          <>
            <IconButton
              sx={{ color: scrolled ? "black" : "#5ce1e6" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box sx={{ width: 280, p: 2 }}>
                <List>
                  {navItems.map(({ label, path, submenu }) => (
                    <Box key={label}>
                      <ListItem
                        button
                        component={Link}
                        to={path}
                        onClick={() => {
                          setActiveTab(label);
                          setDrawerOpen(false);
                        }}
                        sx={{ color: "black" }}
                      >
                        <ListItemText primary={label} />
                      </ListItem>

                      {/* Submenu items */}
                      {submenu && (
                        <Box sx={{ pl: 3 }}>
                          {submenu.map((sub) => (
                            <ListItem
                              key={sub.label}
                              button
                              component={Link}
                              to={sub.path}
                              onClick={() => setDrawerOpen(false)}
                              sx={{ color: "black", mb: 1 }}
                            >
                              <ListItemText
                                primary={sub.label}
                                secondary={sub.subtitle}
                                primaryTypographyProps={{ fontSize: "0.9rem" }}
                                secondaryTypographyProps={{
                                  fontSize: "0.75rem",
                                  color: "text.secondary",
                                }}
                              />
                            </ListItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}

                  {/* GET A DEMO button */}
                  <Box sx={{ mt: 2, px: 2 }}>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: "#5ce1e6",
                        color: "white",
                        px: 2,
                        py: 1,
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "#4ad4da",
                        },
                      }}
                      onClick={() => {
                        navigate("/demo");
                        setDrawerOpen(false);
                      }}
                    >
                      GET A DEMO
                    </Button>
                  </Box>

                  {/* LOGIN button */}
                  <Box sx={{ mt: 2, px: 2 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<LoginIcon />}
                      sx={{
                        color: "#5ce1e6",
                        border: "0.8px solid #5ce1e6",
                        px: 2,
                        py: 1,
                        textTransform: "none",
                        fontWeight: 500,
                        "&:hover": {
                          borderColor: "#4ad4da",
                          color: "#4ad4da",
                        },
                      }}
                      onClick={() => {
                        setDrawerOpen(false);
                        // navigate("/login")
                      }}
                    >
                      LOGIN
                    </Button>
                  </Box>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3, mr: 6 }}>
            <Button
              sx={{ backgroundColor: "#5ce1e6", color: "white", px: 2, py: 1 }}
              onClick={() => navigate("/demo")}
            >
              GET A DEMO
            </Button>
            <Button
              sx={{
                color: scrolled ? "#5ce1e6" : "white",
                border: scrolled ? ".8px solid #5ce1e6" : ".8px solid white",
                px: 2,
              }}
              startIcon={<LoginIcon />}
            >
              LOGIN
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
