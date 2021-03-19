import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import Home from "../home/Home";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Error from "../error/Error";
import Profile from "../profile/Profile";
import Admin from "../admin/Admin";
import Login from "../login/Login";
import Register from "../register/Register";
import Categories from "../categories/Categories";
import listUsers from "../listUsers/listUsers";
import listProducts from "../listProducts/listProducts";
import EditProduct from "../editProduct/editProduct";
import addProduct from "../addProduct/addProduct";
import Product from "../singleProduct/Product";
import List from "../body/List";
import Cart from "../cart/Cart";
import { fetchMe } from "../../../state/user";
import { setUserOrders } from "../../../state/orders";
import { setUser } from "../../../state/user";
import { setUserCart, setHistoryOrders } from "../../../state/cart";
import { setTotal } from "../../../state/totalProducts";
import CartList from "../cart/CartList";

//Ruta para la Order Confirmation
import OrderContainer from "../orders/OrderContainer";

import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const total = useSelector((state) => state.products).length;

  const dispatch = useDispatch();
  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const user = getUser();

  const product = useSelector((state) => state.product);

  console.log('====>',product)

  useEffect(() => {
    dispatch(fetchMe());
    if (user !== null) {
      dispatch(setUserCart(user.user.id));
      dispatch(setUserOrders(user.user.id));
      dispatch(setTotal(total));
      // traer ordenes historicas
      dispatch(setUser(user));
/*       dispatch(setHistoryOrders(user.user.id));
 */    } else {
      return function () {
        return null;
      };
    }
  }, [dispatch, total, user, product]);

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/sidebar" component={Sidebar} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/users" component={listUsers} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={List} />
          <Route exact path="/cartDetails" component={CartList} />

          <Route exact path="/orderConfirmation" component={OrderContainer} />

          <Route
            exact
            path="/products/:id"
            render={(props) => <Product id={props.match.params.id} />}
          />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/admin/listUsers" component={listUsers} />
          <Route exact path="/admin/listProducts" component={listProducts} />
          <Route
            exact
            path="/admin/editProduct/:id"
            render={(props) => <EditProduct id={props.match.params.id} />}
          />
          <Route path="/admin/addProduct" component={addProduct} />
          <Route path="/404" component={Error}></Route>
          <Route path="*">
            <Redirect to="/404"></Redirect>
          </Route>
        </Switch>
        <Footer style={{ backgroundColor: "lightblue" }} />
      </SnackbarProvider>
    </>
  );
}
