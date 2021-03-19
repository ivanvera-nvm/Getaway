import React, {useEffect} from "react";
import {Redirect, useHistory, Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const Admin = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector((state) => state.user);

 useEffect(() => {
  (!user.user ||  user.user.access!== "admin" )&& history.push("/")
    
  }, [dispatch,history,user.user]);


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
            <Link to="/admin/listCategories" className={classes.links}>
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
  );
};

export default Admin;
