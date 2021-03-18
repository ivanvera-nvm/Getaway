import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Image from "material-ui-image";
import Button from "@material-ui/core/Button";

import { setProduct } from "../../../state/products";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  foto: {
    height: "300px",
    width: "200px",
    display: "flex",
    justifyContent: "center",
    align: "center",
  },
}));

const AddProduct = () => {
  
  
    const classes = useStyles();


  const [input, setInput] = React.useState({});
  
  
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };
  
  console.log(input)

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, description, image, price, stock } = input
    axios
    .post(`http://localhost:3080/api/products/`, {
        name,
        description,
        image,
        price,
        stock
    })
    .then((res) => console.log(res))
  };


  return (
    <>
      <h1 align="center">Agregá producto</h1>
      <form onSubmit={handleSubmit}>
        <div className={(classes.root, classes.center)}>
          <div>
            <TextField
              id="outlined-full-width"
              label="Nombre"
              name="name"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleChange}
              value={input.name}
              
          
            />
            <TextField
              id="outlined-full-width"
              label="Descripción"
              name= "description"
              style={{ margin: 8 }}
              multiline
              rows={4}
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={input.description}
            />
            <TextField
              id="outlined-full-width"
              label="URL imagen"
              name="image"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleChange}
              value={input.image}
            />
            <TextField
              label="Precio"
              name="price"
              type="number"
              id="outlined-margin-none"
              defaultValue="Default Value"
              className={classes.textField}
              variant="outlined"
              onChange={handleChange}
              value={input.price}
            />
            <TextField
              id="outlined-number"
              label="Stock"
              name="stock"
              type="number"
              inputProps={{ min: 0, max: 1000 }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleChange}
              value={input.stock}
            />
            {/* <TextField
              label="Expira"
              name="expiry"
              id="outlined-margin-none"
              defaultValue="Default Value"
              className={classes.textField}
              variant="outlined"
              defaultValue={product.expiry}
              onChange={handleChange}
              value={input.expiry}
            /> */}
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          align="center"
        >
          Agregar
        </Button>
      </form>
    </>
  );
};

export default AddProduct;
