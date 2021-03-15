import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../home/Home";
import Body from "../body/Body";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Error from "../error/Error";
import Profile from "../profile/Profile";
import Admin from "../admin/Admin";
import Login from "../login/Login";
import Register from "../register/Register";
import Categories from '../categories/Categories'
import listUsers from '../listUsers/listUsers';
import Product from "../singleProduct/Product";
import List from "../body/List";
import Cart from '../cart/Cart'
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  
  const user = useSelector((state) => state.user);
  
  React.useEffect(()=> {
    console.log('fetch me')
  })


  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/card" component={Card} />
        <Route exact path="/body" component={Body} />
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
        <Route exact path="/products/:id" render={(props)=> <Product id={props.match.params.id}/>} />

        <Route path="/404" component={Error}></Route>
        <Route path="*">
          <Redirect to="/404"></Redirect>
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}
