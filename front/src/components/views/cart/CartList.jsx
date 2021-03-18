import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import CartItem from "./CartItem.jsx";
import CartCheckout from "./CartCheckout.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { setUserOrders } from "../../../state/orders";

import axios from "axios";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  cartTitle: {
    fontSize: "25px",
    paddingTop: "16px",
    width: "100%",
  },
  grid: {
    paddingTop: "16px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  checkout: {
    paddingTop: "5px",

    display: "flex",
    flexDirection: "column",
  },
});

const List = (props) => {
  const orders = useSelector((state) => state.userOrders);
  const user = useSelector((state) => state.user);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        fixed
        alignItems="stretch"
        backgroundColor="white"
        className={classes.root}
      >
        <Box className={classes.cartTitle}>Your Cart</Box>
        <Grid container spacing={2} className={classes.grid}>
          {user.user &&
            user.user.id &&
            orders[0] &&
            orders.map((order, i) => {
              return (
                <Grid>
                  <CartItem order={order} key={i} />
                </Grid>
              );
            })}
          <CartCheckout />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default List;
