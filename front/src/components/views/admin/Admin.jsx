import React from "react";
import {Redirect, useHistory, Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD

=======
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
>>>>>>> e3c7fe62db72befa2d6cb490576fb79ba90c77ec

const Admin = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector((state) => state.user);
<<<<<<< HEAD

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
=======
  const classes = useStyles();
  return (
    <Container fixed alignitems="stretch">
      <Box>
        <Box className={classes.adminPanel}>Admin Panel</Box>

        {user.user && user.user.access === "admin" ? (
          <Box className={classes.container}>
            <Link to="/admin/listUsers" className={classes.links}>
              <h4>Gestión de usuarios</h4>
            </Link>

            <Link to="/admin/listProducts" className={classes.links}>
              <h4>Gestión de productos</h4>
            </Link>
            <Link to="/admin/listProducts" className={classes.links}>
              <h4>Gestión de categorias</h4>
            </Link>
          </Box>
        ) : (
          <Box>
            <h3 style={{ color: "red" }}>ADMIN PRIVATE PAGE</h3>
          </Box>
        )}
      </Box>
    </Container>
>>>>>>> e3c7fe62db72befa2d6cb490576fb79ba90c77ec
  );
};

export default Admin;
