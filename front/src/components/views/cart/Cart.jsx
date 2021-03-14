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

  const [state, setState] = useState({
    right: false,
  });

  useEffect(() => {
    dispatch(setUserOrders()).catch((err) => {
      console.log(err);
    });
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  console.log(userOrders);
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
                    <ListItem button key={'FULLFILLED'}>
                      <ListItemText primary={userOrders[0].cartId} />
                    </ListItem>
                  </List>
                  <List>
                    {userOrders.map(
                      (order, index) => (
                        <ListItem button key={order.id}>
                          <ListItemText primary={order.id} />
                        </ListItem>
                      )
                    )}
                  </List>
                </div>
              ) : (
                <div>
                  <ListItem button key={"empty"}>
                    <ListItemText primary={"Update Cart"} />
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
