import React, { useEffect } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { setCategories } from "../../../state/categories";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const ListCategories = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  // const history = useHistory();
  const categories = useSelector((state) => state.categories);

 

  useEffect(() => {
    dispatch(setCategories());
  }, []);

  return (
    <>
      <Container fixed alignitems="stretch">
        <Box>
          <Box className={classes.adminPanel}>Manejo de Categorías</Box>
          {console.log(categories)}
          {
            categories.map((category) => {
              return (
                <Box className={classes.container} key={category.id}>
                  <Link
                    to={`/admin/listCategories`}
                    className={classes.links}
                  >
                    <h4>{category.name}</h4>
                  </Link>
                  <Link
                    to={`/admin/addCategory/${category.id}`}
                    // className={classes.links}
                  >
                  <Fab
                    color="default"
                    aria-label="add"
                    className={classes.icon}
                  >
                    <AddIcon />
                  </Fab>
                  </Link>
                  <Link
                    to={`/admin/editCategory/${category.id}`}
                    // className={classes.links}
                  >
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    className={classes.icon}
                  >
                    <EditIcon />
                  </Fab>
                  </Link>
                </Box>
              );
            })}
        </Box>
      </Container>
    </>
  );
};
export default ListCategories;
