import React from "react";
import {Redirect, useHistory, Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Admin = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
  (!user.user ||  user.user.access!== "admin" )&& history.push("/")
    
  }, [dispatch,history,user.user]);


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
