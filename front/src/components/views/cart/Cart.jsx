import React, { useState, useEffect } from "react";
import {
  ListItemText,
  ListItem,
  Divider,
  Drawer,
  Button,
  List,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Box from "@material-ui/core/Box";

import { setUserOrders } from "../../../state/orders";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import useStyles from "./style";
import clsx from "clsx";
import axios from "axios";

// Components

const Cart = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const userOrders = useSelector((state) => state.userOrders);
  const user = useSelector((state) => state.user);

<<<<<<< HEAD

  
  
  const userId = !user.user ? 99 : user.user.id
 
  useEffect(() => {
    axios
      .post("http://localhost:3080/api/cart/new", { userId })
=======
  const userId = user.user.id;

  useEffect(() => {
    axios
      .post("http://localhost:3080/api/cart/new", { userId })
      .then((newCart) => console.log("carro creado"));
>>>>>>> e3c7fe62db72befa2d6cb490576fb79ba90c77ec
  }, [userId, dispatch]);

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    
    <div>
    {!user.user ? <>
    
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ShoppingCartIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            
            <div
              className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
              })}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Divider />
              {userOrders.lenght < 0 ? (
                <div>
                  <ListItem button key={"empty"}>
                    <ListItemText primary={"The cart is empty :("} />
                  </ListItem>
                </div>
              ) : (
                <div>
                  <List>
                    <ListItem button key={"FULLFILLED"}>
                      <ListItemText primary={`Órdenes de compra`} />
                    </ListItem>
                  </List>
                  <List>
                    {userOrders.map((order) => {
                      return (
                        <ListItem button key={"FULLFILLED"}>
                          <ListItemText
                            primary={`Order: ${order.id} - ${order.nameProduct[0]}  x${order.productQuantity}`}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
              )}
            </div>
            <List>
              <ListItem button key={"FULLFILLED"}>
                <NavLink
                  to={{
                    pathname: "/cartDetails",
                  }}
                >
                  <ListItemText primary={"Go to detail"} />
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      ))}

    </> : <>
    
    {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ShoppingCartIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            
            <div
              className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
              })}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Divider />
              {userOrders.lenght < 0 ? (
                <div>
                  <ListItem button key={"empty"}>
                    <ListItemText primary={"The cart is empty :("} />
                  </ListItem>
                </div>
              ) : (
                <div className={classes.drawer}>
                  <List className={classes.mainList}>
                    <ListItem button key={"FULLFILLED"}>
                      <Box
                        className={classes.name}
                      >{`${user.user.name}'s cart`}</Box>
                    </ListItem>
                  </List>
                  <List className={classes.componentList}>
                    {userOrders.map((order) => {
                      return (
                        <ListItem button key={"FULLFILLED"}>
                          <ListItemText
                            primary={`Order: ${order.id} - ${order.nameProduct[0]}  x${order.productQuantity}`}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
              )}
            </div>
            <List>
              <ListItem className={classes.button} button key={"FULLFILLED"}>
                <NavLink
                  className={classes.purchaseBtn}
                  to={{
                    pathname: "/cartDetails",
                  }}
                >
                  Go to detail
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      ))}

    
    
    </> } 

    </div>
  );
};

export default Cart;
