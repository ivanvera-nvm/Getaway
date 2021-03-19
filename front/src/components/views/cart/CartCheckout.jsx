import React from "react";
import Card from "@material-ui/core/Card";

import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import SimpleDialog from "./Payments";
import { NavLink, useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import useStyles from "./style";

import axios from "axios";

export default function CartCheckout({ product }) {
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const checkout = useSelector((state) => state.userCart);
  const cartId = checkout.id;

  const history = useHistory();
  const email = JSON.parse(localStorage.getItem("user")).user.email;

  const sendOrder = async () => {
    try {
      await axios.put("http://localhost:3080/api/cart/status", {
        cartId,
        email,
      });
      enqueueSnackbar("La compra se ha realizado exitosamente", {
        variant: "success",
      });
      history.push("/orderConfirmation");
    } catch (err) {
      enqueueSnackbar("No se pudo efectuar la compra", { variant: "error" });
    }
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.blockLeft}>
          <SimpleDialog className={classes.paymentTypes} />
        </Box>
        <Box className={classes.blockRight}>
          <Box className={classes.totals}> ${checkout.total}</Box>
          <Box className={classes.creditCards}>
            <Box> ¡Cuotas sin interés con bancos seleccionados!</Box>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/visa-27-565046.png"
              alt=""
              className={classes.image}
            />
            <img
              src="https://image.flaticon.com/icons/png/128/196/196561.png"
              alt=""
              className={classes.image}
            />
            <img
              src="https://cdn0.iconfinder.com/data/icons/IS_credit-cards-full_final/512/american_express.png"
              alt=""
              className={classes.image}
            />
          </Box>
        </Box>
      </Box>

      <Box className={classes.checkoutBox}>
        {/*       <NavLink to='/orderConfirmation'> */}
        <Button
          variant="contained"
          className={classes.checkoutButton}
          onClick={sendOrder}
        >
          Comprar
        </Button>
        {/*   </NavLink> */}
      </Box>
    </Card>
  );
}
