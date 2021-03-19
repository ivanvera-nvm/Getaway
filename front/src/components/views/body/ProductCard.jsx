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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

//MENSAJES

import { useSnackbar } from "notistack";

import useStyles from "./style";

export default function ProductCard({ product }) {
 
  const { enqueueSnackbar } = useSnackbar();

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
        await axios.post(`http://localhost:3080/api/cart/submit`, { cartId });
        enqueueSnackbar(`${product.name} agregado!`, { variant: 'success'});


      } catch (err) {
        console.log(err);
      }
    } else {
      enqueueSnackbar('Necesitas estar logueado!', { variant: 'error'});
    }
  };

  return (
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
      <Link to={`/products/${product.id}`} className={classes.title}>
        <Box >{product.name}</Box>
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

      </CardContent>
        <Box className={classes.interact}>
          <Rating
            name="read-only"
            value={3}
            readOnly
            className={classes.rating}
          />
         
        </Box>

      <CardActions className={` ${classes.action} ${classes.position}`}>
        <Box className={classes.price}>${product.price},00</Box>
        <Button
          variant="contained"
          className={`${classes.purchaseBtn} ${classes.icon}`}
          onClick={addItem}
        >
          <AddShoppingCartIcon className={classes.icon} />
        </Button>
      </CardActions>
    </Card>
  );
}
