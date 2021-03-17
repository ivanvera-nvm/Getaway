import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";

import TextField from "@material-ui/core/TextField";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "80px",
    marginBottom: "5px",
  },
  product: {
    paddingLeft: "12px",
    width: "60%",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "550",
  },
  action: {
    width: "40%",
    display: "flex",
    flexdirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  qty: {
    width: "50%",
    display: "flex",
    flexdirection: "row",
    justifyContent: "space-around",
  },
  price: {
    width: "30%",
    textAlign: "center",
    fontWeight: "550",
    fontSize: "20px",
  },
  trashIcon: {
    width: "20%",
  },
  inputQty: {
    width: "100px",
  },
  txtField: {
    textAlign: "center",
  },
}));

export default function ProductCard(order) {

  const classes = useStyles();


 /*  const removeItem = () => {

    axios.post("http://localhost:3080/api/")

  }
 */
  return (
    <Card className={classes.root}>
      <Box display="flex" className={classes.product}>
        {order.order.id ? (
          <Box>{`${order.order.nameProduct[0]} x ${order.order.productQuantity}`}</Box>
        ) : (
          <Box>{"No products"}</Box>
        )}
      </Box>
      <Box className={classes.action}>
        <Box className={classes.qty}>
          <Box className={classes.inputQty}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="number"
              inputProps={{
                min: 0,
                style: {
                  textAlign: "center",
                  height: "15px",
                  fontWeight: "600",
                },
              }} // the change is here
            />
          </Box>
        </Box>
        {order.order.id ? (
          <Box className={classes.price}>{`$${order.order.subtotal}`} </Box>
        ) : (
          <Box></Box>
        )}

        <Box className={classes.trashIcon}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
