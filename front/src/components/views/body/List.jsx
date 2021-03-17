import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { setTotal } from "../../../state/totalProducts";
import { setProducts } from "../../../state/products";
import Container from "@material-ui/core/Container";

import ProductCard from "./ProductCard.jsx";
import Grid from "@material-ui/core/Grid";

const List = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts()).catch((err) => {
      console.log(err);
    });
  }, [dispatch]);
  const totalProducts = products.length;

  dispatch(setTotal(totalProducts));

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed alignitems="stretch">
        <Grid container spacing={2}>
          {products.map((product, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
                <ProductCard product={product} key={product.id} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default List;
