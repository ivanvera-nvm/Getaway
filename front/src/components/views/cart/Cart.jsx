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
  
  const userId = user.user.id;
=======

  const userId = user.user.id;



>>>>>>> 1e059e604d500c299c1e1b339d9a00ff5f27d274
  useEffect(() => {
    axios
      .post("http://localhost:3080/api/cart/new", { userId })
      .then((newCart) => alert("carro creado"));
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
                      <ListItemText primary={`${user.user.name}'s cart`} />
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
    </div>
  );
};

export default Cart;
