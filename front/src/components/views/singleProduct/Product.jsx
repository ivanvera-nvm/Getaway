import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProduct } from "../../../state/products"
import { useHistory } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import useStyles from "./useStyles";

export default function Product({ id }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const history = useHistory();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const total = useSelector((state) => state.totalProducts);

  useEffect(() => {
    if (id < total) {
      dispatch(setProduct(id)).catch((error) => console.log(error));
    } else history.push("/404");
  }, []);


  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box display="flex" justifyContent="center">
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={<Box className={classes.header}>{product.name}</Box>}
              subheader="September 14, 2016"
            />
            <Box display="flex" className={classes.boxSize}>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />

              <Box className={classes.boxInfo}>
                <CardContent>
                  <Box className={classes.boxInfo}>{product.name}</Box>
                  <Box className={classes.price}>${product.price}</Box>

                  <Button variant="contained" color="secondary">
                    Comprar
                  </Button>

                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.description}
                  </Typography>

                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <List component="nav" aria-label="main mailbox folders">
                      <ListItemIcon>Cantidad:</ListItemIcon>
                      <ListItemText primary={product.quantity} />

                      <ListItemIcon>Stock:</ListItemIcon>
                      <ListItemText primary={product.stock} />
                    </List>
                    <Divider />
                    <List
                      component="nav"
                      aria-label="secondary mailbox folders"
                    >
                      <ListItemIcon>Expira:</ListItemIcon>
                      <ListItemText primary={Date(product.expiry)} />
                    </List>
                  </Typography>

                  <Rating name="read-only" value="3" readOnly />
                </CardContent>
              </Box>
            </Box>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}
