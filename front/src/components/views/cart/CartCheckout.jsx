import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import SimpleDialog from "./Payments";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    height: "215px",
    paddingBottom: "15px",
    marginBottom: "15px",
  },
  container: {
    paddingTop: "14px",
    display: "flex",
    flexDirection: "row",
    height: "160px",
  },
  blockLeft: {
    width: "50%",
    paddingLeft: "14px",
    display: "flex",
    alignItems: "center",
  },
  blockRight: {
    paddingRight: "14px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  checkoutBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "14px",
    marginBottom: "14px",
  },
  checkoutButton: {
    display: "flex",
    width: "800px",
    fontSize: "18px",
    color: "white",
    backgroundColor: "#dd2c00",
  },
  totals: {
    height: "50px",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "right",
  },
  creditCards: {
    textAlign: "right",
  },
  image: {
    width: "40px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  naranja: {
    height: "20px",
  },
  paymentTypes: {},
}));

export default function CartCheckout({ product }) {
  const classes = useStyles();
  const checkout = useSelector((state) => state.userCart);

  console.log("CHECKOUT ====>", checkout);

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
        <Button variant="contained" className={classes.checkoutButton}>
          Comprar
        </Button>
      </Box>
    </Card>
  );
}
