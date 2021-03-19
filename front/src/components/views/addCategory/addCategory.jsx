import React, { useEffect , useState} from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
import {setCategoryId, setEditCategory} from "../../../state/categories"
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const AddCategory = ({id}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
      dispatch(setCategoryId(id));
    }, [dispatch]);
    
    
    const [input, setInput] = useState("");
    
    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
    };
    
    const category = useSelector((state) => state.category);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const categoryUpdates = e.target.value
      axios
        .put(`http://localhost:3080/api/categories/${id}`, {
          categoryUpdates
        })
        .then((res) => history.push("/admin/listCategories"));
    };
  


  return (
    <>
      <h1 align="center">Agregar una Categoría</h1>
      <Container fixed alignitems="stretch" >

      <Box className={classes.adminPanel}>
      {/* <Typography variant="body2" color="textSecondary" align="center">
        </Typography> */}
        {console.log("---------------------",category.name)}
       
        <TextField
          id="standard-helperText"
          value={input}
          placeholder="Nombre Categoría"
          onChange={handleChange}
          className={classes.input}

        />
      </Box>
         <Button variant="contained" color="secondary" onClick={handleSubmit} className={classes.button}>
       Agregar
      </Button>
      </Container>
    </>
  
  )};
export default AddCategory;
