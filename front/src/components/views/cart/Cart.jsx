import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "./style";
import clsx from "clsx";
import { setUserOrders } from "../../../state/orders";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// Components

const Cart = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const userOrders = useSelector((state) => state.userOrders);
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);

  const userId = user.user.id;

  useEffect(() => {
    axios
      .post("http://localhost:3080/api/cart/new", { userId })
      .then((newCart) => alert("carro creado"));
      

    dispatch(setUserOrders(userId)).catch((err) => {
      console.log(err);
    });

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

  const productsFilter = (products, orderId, quantity, i) => {
    let filtered = products.filter((product) => {
      return product.id === orderId;
    });

    return (
      <div key={i}>
        {filtered ? (
          <>
            <ListItem button key={filtered.id}>
              <ListItemText
                key={filtered.id}
                primary={`Order ${orderId}: ${filtered[0].name} x${quantity}`}
              />
            </ListItem>
          </>
        ) : (
          <>
            <h1>No products</h1>
          </>
        )}
      </div>
    );
  };
  const fillCart = () =>
    userOrders.map((order, i) => {
      return productsFilter(
        products,
        order.productId,
        order.productQuantity,
        i
      );
    });

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
                  {console.log('ORDENES DE USUARIO =>>>>>',userOrders)}
                  <ListItem button key={"FULLFILLED"}>
                    <ListItemText
                      primary={`${user.user.name}'s cart`}
                    />
                  </ListItem>
                </List>
                <List>{fillCart()}</List>
              </div>
              )}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
