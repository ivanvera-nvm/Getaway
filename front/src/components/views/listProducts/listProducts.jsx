import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, deleteProduct } from "../../../state/products";
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.user && user.user.access === "admin" ? (
        <div>
          <h1 align="center">Gestión de productos</h1>
          <Fab color="primary" aria-label="add">
            <Link to="/admin/addProduct">
              <AddIcon />
            </Link>
          </Fab>
          {products.map((product) => (
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src={product.image}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Id: {product.id}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <DeleteIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            console.log("CLICKK");
                            dispatch(deleteProduct(product.id));
                          }}
                        />
                        <Link to={`/admin/editProduct/${product.id}`}>
                          <EditOutlinedIcon style={{ cursor: "pointer" }} />
                        </Link>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        ${product.price},00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3 style={{ color: "red" }}>ADMIN PRIVATE PAGE</h3>
        </div>
      )}
    </>
  );
};

export default Products;
