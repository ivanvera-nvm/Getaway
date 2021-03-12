import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";

import { fade, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import InputBase from "@material-ui/core/InputBase";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { useHistory, NavLink } from "react-router-dom";

import Cart from "../cart/Cart";

import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  ///CONFIG

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.stack}>
      <Box className={classes.navMain}>
        <Typography className={classes.title} variant="h6" noWrap>
          GetAway
        </Typography>

        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />

        <IconButton aria-label="show 2 new notifications" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <Cart />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={() => {
            history.push("/profile/algunUser");
          }}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box className={classes.navLinks}>
        <NavLink
          exact
          to="/"
          activeClassName="active"
          className={classes.links}
        >
          Home
        </NavLink>

        <NavLink
          exact
          to="/user"
          activeClassName="active"
          className={classes.links}
        >
          User
        </NavLink>

        <NavLink
          exact
          to="/login"
          activeClassName="active"
          className={classes.links}
        >
          Login
        </NavLink>

        <NavLink
          exact
          to="/register"
          activeClassName="active"
          className={classes.links}
        >
          Register
        </NavLink>

        <NavLink
          exact
          to="/admin"
          activeclassName="active"
          className={classes.links}
        >
          Admin
        </NavLink>
      </Box>
    </div>
  );
};

export default Navbar;
