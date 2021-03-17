import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import useStyles from "./style";

export default function ProductCard({ product }) {
  const user = useSelector((state) => state.user);

  const classes = useStyles();
  const cartId = useSelector((state) => state.userCart).id;
  const productId = product.id;

  const addItem = async () => {
    if (user.token) {
      try {
        await axios.post("http://localhost:3080/api/cart/product", {
          productId,
          cartId,
        });
        alert("Added to cart!");
      } catch (err) {
        console.log(err);
      }
      console.log("CLICK ADD PRODUCT");
    } else {
      alert("Necesitas estar logueado");
    }
  };

  return (
    <Card className={classes.root}>
      <Box display="flex" className={classes.header}>
        <Box className={classes.title}>{product.name}</Box>
        <Box>
          {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        </Box>
      </Box>
      <Link to={`/products/${product.id}`}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title="Paella dish"
        />
      </Link>
      <CardContent>
        <Typography
          className={classes.description}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {product.description}
        </Typography>

        <Box className={classes.interact}>
          <Rating
            name="read-only"
            value={3}
            readOnly
            className={classes.rating}
          />
          <IconButton className={classes.fav} aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardContent>

      <CardActions className={classes.action}>
        <Box className={classes.price}>${product.price},00</Box>
        <Button
          variant="contained"
          className={classes.purchaseBtn}
          onClick={addItem}
        >
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
