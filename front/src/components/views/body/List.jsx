import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { setTotal } from "../../../state/totalProducts";
import { setProducts, setProduct } from "../../../state/products";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Checkbox from "@material-ui/core/Checkbox";

import ProductCard from "./ProductCard.jsx";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style.js";

import CategoriesList from "../categories/CategoriesList";

const List = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = useSelector((state) => state.product);

  const totalProducts = products.length;

  //funcion filtro
  dispatch(setTotal(totalProducts));
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
    dispatch(setProducts());
    dispatch(setProduct(product.id));
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed alignitems="stretch">
        <Container>
          <form style={{ marginBottom: "5rem" }}>
            <InputBase
              onChange={handleChange}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIcon />
          </form>
       <CategoriesList/>
        </Container>

        <Grid container spacing={2}>
          {filterProducts.map((product, i) => {
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
