import {
  IconButton,
  Typography,
  Avatar,
  Badge,
  Box,
  InputBase,
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";

import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../../state/user";

import Cart from "../cart/Cart";

import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userOrders = useSelector((state) => state.userOrders);

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
    history.push("/"); // Redireccionar a un componente de muchas gracias, vuelva pronto.
    return localStorage.clear();
  };

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
              {!userOrders && user.user.access !== "admin" ? (
                ""
              ) : (
                <div>{total(userOrders)}</div>
              )}
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
          <NavLink
            exact
            to="/cartDetails"
            activeClassName="active"
            className={classes.links}
          >
            Cart Details
          </NavLink>
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
    </div>
  );
};

export default Navbar;
