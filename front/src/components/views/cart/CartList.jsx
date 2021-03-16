import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import CartItem from "./CartItem.jsx";
import CartCheckout from "./CartCheckout.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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

const List = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:3080/api/products")
      .then((res) => {
        console.log(res.data);
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log("Error");
      });
  }, []);

  console.log(products);
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
          {products.map((product, i) => {
            return (
              <Grid>
                <CartItem product={product} key={i} />
              </Grid>
            );
          })}
          <CartCheckout />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

<<<<<<< HEAD
export default List;
=======
export default List;
>>>>>>> 74e4f448bbb53eefcbc252d953e2f2110347c10a
