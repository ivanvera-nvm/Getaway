import React, { useEffect } from "react";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Cart from "../cart/Cart";

import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  /// Dejo preparada esta estructura para cuando toque agregar a favoritos!

  /*  if (user) {
    /// Pedido axios => Post => Ruta de favoritos
    /// then => mensaje cuando lo agrega exitosamente
    /// catch => mesaje cuando no puede agregarlo (posiblemente por no estar logged)
    ///* no olvidar pasarlo a react-redux
  } */

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
        {!user.user ? (
          <>
            Not logged
            <AccountCircle />
          </>
        ) : (
          <>
            <div className={classes.root}>
              <Badge badgeContent={2} color="secondary">
                <Cart />
              </Badge>
            </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {
                history.push(`/profile/${user.user.name}`);
              }}
              color="inherit"
            >
              <div className={classes.root}>
                <Avatar
                  alt={`${user.user.name}`}
                  src={`${process.env.PUBLIC_URL}/avatars/ninja-cat.png`}
                />
                <span>{`${user.user.name}`}</span>
              </div>
            </IconButton>
          </>
        )}
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
          to="/admin"
          activeClassName="active"
          className={classes.links}
        >
          Admin
        </NavLink>
        {!user.user ? (
          <>
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
          </>
        ) : (
          <>
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className={classes.links}
            >
              Logout
            </NavLink>
          </>
        )}
      </Box>
    </div>
  );
};

export default Navbar;
