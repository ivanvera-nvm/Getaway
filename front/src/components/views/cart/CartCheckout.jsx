import React from "react";
import Card from "@material-ui/core/Card";

import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import SimpleDialog from "./Payments";

import useStyles from "./style";
import { setCartCheckout, updateCartStatus } from "../../../state/cart";
import {useHistory} from 'react-router-dom'

export default function CartCheckout({ product }) {
  const classes = useStyles();
  const checkout = useSelector((state) => state.userCart);
  const user = useSelector((state) => state.user);
  const history = useHistory()
  const dispatch = useDispatch();
  
  console.log("CHECKOUT ID ====>", checkout.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCartCheckout(checkout.id)).then(() =>
      dispatch(updateCartStatus(checkout.id, user.user.email))
    );
    history.push('/orderConfirmation')
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.blockLeft}>
          <SimpleDialog c lassName={classes.paymentTypes} />
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
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            variant="contained"
            className={classes.checkoutButton}
          >
            Comprar
          </Button>
        </form>
      </Box>
    </Card>
  );
}
