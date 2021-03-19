import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";

import Avatar from "@material-ui/core/Avatar";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../../state/user";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Cart from "../cart/Cart";

import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userOrders = useSelector((state) => state.userOrders);
  /*  const products = useSelector((state) => state.products); */

  const total = (userOrders) => {
    let totalItems = 0;
    userOrders.forEach((order) => {
      totalItems += order.productQuantity;
    });

    return (
      <Badge badgeContent={totalItems} color="secondary">
        <Cart />
      </Badge>
    );
  };

  const loggout = () => {
    dispatch(clearUser());
    history.push("/"); // Redireccionar a un componente de muchas gracias, vuelva prontos.
    return localStorage.clear();
  };

  return (
    <div className={classes.stack}>
      <Box className={classes.navMain}>
        <Typography className={classes.title} variant="h6" noWrap>
          <img
            src="https://as2.ftcdn.net/jpg/02/93/02/35/500_F_293023546_xhageEnCMIzNnfWr9QhnwP4rGZTW2TYp.jpg"
            className={classes.logo}
            alt="Logo"
          />
          GetAway
        </Typography>
        {user.user && user.user.access !== "admin" && (
          <div className={classes.root}>
            <div>{total(userOrders)}</div>
          </div>
        )}
        {!user.user && (
          <>
            <ShoppingCartIcon />
          </>
        )}

        {!user.user ? (
          <AccountCircle />
        ) : (
          <>
            <div className={classes.root}>
              {!userOrders && user.user.access !== "admin" ? (
                <IconButton />
              ) : (
                ""
              )}
            </div>
            <Box
              className={classes.userContainer}
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {
                history.push(`/profile/${user.user.name}`);
              }}
              color="inherit"
            >
              <Avatar aria-label="recipe" className={classes.orange}>
                {user.user.name[0]}
              </Avatar>

              <Box>{`${user.user.name} ${user.user.lastName}`}</Box>
            </Box>
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
        {user.user && user.user.access === "admin" ? (
          <NavLink
            exact
            to="/admin"
            activeClassName="active"
            className={classes.links}
          >
            Admin
          </NavLink>
        ) : (
          <>
            <NavLink
              exact
              to="/cartDetails"
              activeClassName="active"
              className={classes.links}
            >
              Cart Details
            </NavLink>
          </>
        )}

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
              to="/"
              activeClassName="active"
              className={classes.links}
              onClick={loggout}
            >
              Logout
            </NavLink>
          </>
        )}
      </Box>

      <Box className={classes.category}></Box>
    </div>
  );
};

export default Navbar;
