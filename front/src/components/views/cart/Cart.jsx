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

// Components

const Cart = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  const userOrders = useSelector((state) => state.userOrders);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setUserOrders()).catch((err) => {
      console.log(err);
    });
  }, [dispatch]);

  ///Solo config de Material UI (tremenda pereza refactorizar)
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


  //mterial ui config

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["User"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Order A", "Order B", "Order C", "Order D"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data));
  }, []);




  console.log(userOrders);


  ///La funcion recibe por parametro un array de productos y lo filtra en base al segundo parametro orderId.
  ///Devuelve un objeto con informacion del producto dentro de un array
  /* Ejemplo=> [{"id": 4,"name": "Home Spa","price": 200,"stock": 105,}] */

  /// UPDATE: Le agregue un parametro mas, quantity, para poder mostrar cuantos items hay de cada tipo.

  const productsFilter = (products, orderId, quantity, i) => {
    let filtered = products.filter((elem) => elem.id === orderId);
    return (
      <div key={i}>
        <ListItem button key={filtered.id}>
          <ListItemText
            key={filtered.id}
            primary={`Order ${orderId}: ${filtered[0].name} x${quantity}`}
          />
        </ListItem>
      </div>
    );
  };

  const fillCart = () =>
    userOrders.map((order, i) =>
      productsFilter(products, order.id, order.productQuantity, i)
    );


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
              {userOrders ? (
                <div>
                  <List>
                    <ListItem button key={"FULLFILLED"}>
                      <ListItemText
                        primary={`Cart ID: ${userOrders[0].cartId}`}
                      />
                    </ListItem>
                  </List>
                  <List>{fillCart()}</List>
                </div>
              ) : (
                <div>
                  <ListItem button key={"empty"}>
                    <ListItemText primary={"The cart is empty :("} />
                  </ListItem>
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
