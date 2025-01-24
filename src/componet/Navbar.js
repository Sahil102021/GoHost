import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Grid2,
  IconButton,
  Menu,
  MenuIcon,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
  Tooltip,
  Typography,
  MenuItem,
  colors,
  Drawer,
} from "@mui/material";
import PercentIcon from "@mui/icons-material/Percent";
import logo from "../img/logo.png";
import CallIcon from "@mui/icons-material/Call";
import "./Navbar.css";
import btishflag from "../img/united-kingdom.png";
import { Image } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import MenuItem_1 from "@mui/material/MenuItem";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CancelIcon from "@mui/icons-material/Cancel";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  ///  top 50Gb plane baner
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  /// saide Navbar
  const [abc, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="side-manu"
    >
      <ul className="manu">
        <Link sx={{ textDecoration: "none" }} to="/Home">
          <li>Home</li>
        </Link>
        <li>
          Domains
          <ul>
            <li>Domain Registration</li>
            <li>Domain Transfer</li>
          </ul>
        </li>
        <li>
          Hostin <ArrowDropDownIcon className="down" />
          <ul>
            <li>Domain Registration</li>
            <li>Domain Transfer</li>
          </ul>
        </li>
        <Link sx={{ textDecoration: "none" }} to="/WebsiteB">
          <li>Website Builder</li>
        </Link>
        <Link sx={{ textDecoration: "none" }} to="/WebSecurity">
          <li>Web Security</li>
        </Link>
        <Link sx={{ textDecoration: "none" }} to="/Email">
          <li>Email</li>
        </Link>
        <li>Other</li>
      </ul>
    </Box>
  );

  return (
    <div
      style={{
        position: "static",
        top: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Box width="100%">
        <AppBar
          position="static"
          sx={{
            top: "0",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <PercentIcon sx={{ color: "lightgreen" }} />
            <Typography
              variant="h7"
              sx={{
                paddingLeft: "10px",
                flexGrow: 1,
                fontSize: isSmallScreen ? "10px" : "14px", // Smaller font size on small screens
                textAlign: isSmallScreen ? "center" : "left", // Center the text on small screens
              }}
            >
              50 GB plan with free matching domain.
            </Typography>
            <Stack
              direction={isSmallScreen ? "column" : "row"} // Stack buttons vertically on small screens
              spacing={1}
              sx={{ justifyContent: isSmallScreen ? "center" : "flex-end" }} // Align buttons based on screen size
            >
              <Button
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  fontSize: isSmallScreen ? "10px" : "12px", // Smaller button text on small screens
                  fontWeight: "bolder",
                }}
              >
                About
              </Button>
              <Button
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  fontWeight: "bolder",
                }}
              >
                Content
              </Button>
              <Button
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  fontWeight: "bolder",
                }}
              >
                Sitemap
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>

      <Box width="100%">
        <AppBar
          position="static"
          sx={{
            minHeight: "100px",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            boxShadow: "none",
            borderBottom: "0.5px solid #EEEEEE",
          }}
        >
          <Toolbar>
            <Box width="100%">
              <Grid2 container spacing={1}>
                {/* Logo Section */}
                <Grid2 size={4}>
                  <Box width={isSmallScreen ? "120px" : "175px"}>
                    {" "}
                    {/* Resize logo on small screens */}
                    <img src={logo} width="100%" alt="Logo" />
                  </Box>
                </Grid2>

                {/* Button and Info Section */}
                <Grid2
                  size={8}
                  sx={{
                    fontSize: isSmallScreen ? "12px" : "14px", // Smaller font size on mobile
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    gap: isSmallScreen ? "10px" : "20px", // Adjust spacing on small screens
                    flexDirection: "row", // Stack buttons vertically on small screens
                    alignItems: isSmallScreen ? "center" : "flex-end",
                  }}
                >
                  {/* Contact Information */}
                  <Typography
                    className="t1"
                    sx={{
                      display: isSmallScreen ? "none" : "flex",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <CallIcon /> (20) 123 456 7890
                  </Typography>

                  {/* Cart Button */}
                  <Button
                    className="btn1"
                    variant="outlined"
                    sx={{
                      textTransform: "capitalize",
                      color: "black",
                      borderColor: "#bdbdbd",
                      fontWeight: "bold",
                      padding: { xs: "5px", md: "10px 20px" },
                    }}
                  >
                    View Cart 0
                  </Button>

                  {/* Sign In Button */}
                  <Button
                    className="btn2"
                    sx={{
                      backgroundColor: "blue",
                      color: "white",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      padding: { xs: "5px", md: "10px 20px" },
                    }}
                  >
                    Sign In
                  </Button>

                  {/* Language Dropdown */}
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      textTransform: "capitalize",
                      gap: "5px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <img src={btishflag} width="20px" alt="Language Icon" />{" "}
                    language <ArrowDropDownIcon />
                  </Button>

                  {/* Language Menu */}
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                    sx={{ textTransform: "capitalize" }}
                  >
                    <MenuItem onClick={handleClose}>Hindi</MenuItem>
                    <MenuItem onClick={handleClose}>Gujarati</MenuItem>
                    <MenuItem onClick={handleClose}>English</MenuItem>
                  </Menu>
                </Grid2>
              </Grid2>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        <AppBar
          className="NavMenu"
          position="static"
          sx={{
            boxShadow: "none",
            backgroundColor: "#fff",
            borderBottom: "0.5px solid #EEEEEE",
          }}
        >
          <Toolbar>
            <Box width="100%">
              <Grid2 container>
                <Grid2 size={{ sm: 8, md: 10 }} sx={{ flexGrow: "1" }}>
                  <Box className="main-manu">
                    <ul className="manu">
                      <Link sx={{ textDecoration: "none" }} to="/Home">
                        <li>Home</li>
                      </Link>
                      <li>
                        Domains
                        <ul>
                          <li>Domain Registration</li>
                          <li>Domain Transfer</li>
                        </ul>
                      </li>
                      <li>
                        Hostin <ArrowDropDownIcon className="down" />
                        <ul>
                          <li>Domain Registration</li>
                          <li>Domain Transfer</li>
                        </ul>
                      </li>
                      <Link sx={{ textDecoration: "none" }} to="/WebsiteB">
                        <li>Website Builder</li>
                      </Link>
                      <Link sx={{ textDecoration: "none" }} to="/WebSecurity">
                        <li>Web Security</li>
                      </Link>
                      <Link sx={{ textDecoration: "none" }} to="/Email">
                        <li>Email</li>
                      </Link>
                      <li>Other</li>
                    </ul>
                  </Box>
                  <div id="Mobile">
                    <Button onClick={toggleDrawer(true)}>
                      <DensityMediumIcon />{" "}
                    </Button>
                    <Drawer open={abc} onClose={toggleDrawer(false)}>
                      {DrawerList}
                    </Drawer>
                  </div>
                </Grid2>
                <Grid2
                  size={{ sm: 4, md: 2 }}
                  sx={{
                    color: "black",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <LanguageIcon />
                    <p className="t1">Register a New Domain</p>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
