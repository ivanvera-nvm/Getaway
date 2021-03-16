import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.user && user.user.access === "user" ? (
        <div>
          <h3 style={{ color: "red" }}>ADMIN PRIVATE PAGE</h3>
        </div>
      ) : (
        <div>
          <h3 style={{ color: "black" }}>BIENVENIDO ADMIN</h3>
          <Link to="/listUsers">
            <h4>Gestión de usuarios</h4>
          </Link>
        </div>
      )}
    </>
  );
};

export default Admin;
