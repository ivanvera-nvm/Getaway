import React from "react";
import Card from "@material-ui/core/Card";

import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

import useStyles from "./style";

export default function CartCheckout({ product }) {
  const classes = useStyles();
  const checkout = useSelector((state) => state.userCart);

  console.log("CHECKOUT ====>", checkout);

  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.blockLeft}></Box>
        <Box className={classes.blockRight}>
          <Box className={classes.totals}> ${checkout.total}</Box>
          <Box className={classes.creditCards}>
            <Box> Medios de pago</Box>
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
        <Button variant="contained" className={classes.checkoutButton}>
          Comprar
        </Button>
      </Box>
    </Card>
  );
}
