import React from "react";
import {Redirect} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  return (
    <>
      {user.user && user.user.access === "admin" ? (
        <div>
          <h3 style={{ color: "black" }}>BIENVENIDO ADMIN</h3>
          <Link to="/admin/listUsers">
            <h4>Gestión de usuarios</h4>
          </Link> 
          <Link to="/admin/listProducts">
            <h4>Gestión de productos</h4>
          </Link>
        </div>
      ) : (
        <div>
          <h3 style={{ color: "red" }}>ADMIN PRIVATE PAGE</h3>
        </div>
      )}
    </>
  );
};

export default Admin;
