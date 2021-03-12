import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./useStyles";
import { useState, useEffect } from "react";
import { setProduct } from "../../state/products";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

export default function Product({ id }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3080/api/products/${id}`)
      .then((res) => res.data)
      .then((product) => dispatch(setProduct(product)))
      .catch((error) => console.log(error));
  }, []);

  console.log("productttttttttttt", product);
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
                      <ListItemText primary={product.expiry} />
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
