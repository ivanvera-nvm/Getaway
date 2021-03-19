import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Avatar from "@material-ui/core/Avatar";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../../state/user";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSnackbar } from "notistack";

import Cart from "../cart/Cart";

import useStyles from "./style";
import { setProducts } from "../../../state/products";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const userOrders = useSelector((state) => state.userOrders);
  let changeStatus = false;
console.log("-------------ACA ----------", userOrders);
// const quantityItems = () => {userOrders.forEach(( e => acum+=e.productQuantity))}
  // const quantityItems = Object.keys(userOrders).length
  const products = useSelector((state) => state.products);

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

  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  let arr = products.map((product) => {
    return { ...product, name: product.name.toLowerCase() };
  });

  const filterProducts = arr.filter((product) =>
    product.name.toLowerCase().match(search)
  );

  useEffect(() => {
    dispatch(setProducts(filterProducts));
   
  }, [search]);

  return (
    <div className={classes.stack}>
      <Box className={classes.navMain}>
        <Typography className={classes.title} variant="h5" noWrap>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/81/81227.svg?token=exp=1615952427~hmac=5555c0bb1a31de82e804d7ca58d231ef"
            className={classes.logo}
            alt="Logo"
          />
          GetAway
        </Typography>
        <form>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />

          <SearchIcon />
        </form>

        {user.user && user.user.access !== "admin" && (
          <div className={classes.root}>
            <div>{total(userOrders)}</div>
          </div>
        )}
        {!user.user && (
          <>
            <ShoppingCartIcon
              onClick={() =>{
                enqueueSnackbar(
                  "Debes loguearte para poder cargar tu carrito",
                  { variant: "error" }
                )
                
              }
              }
            />
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
