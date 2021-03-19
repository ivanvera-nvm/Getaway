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

const EditCategories = ({id}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
      dispatch(setCategoryId(id));
    }, []);
    
    const category = useSelector((state) => state.category);
    
    const [input, setInput] = useState("");
    
    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
    };
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
    console.log("---------MIRAAA ",input)
        dispatch(setEditCategory(id,input))
        history.push("/admin/listCategories")
    }

  return (
    <>
      <h1 align="center">Editar Categoría : <span className={classes.highlighted}>{category.name}</span></h1>
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
       Guardar
      </Button>
      </Container>
    </>
  
  )};
export default EditCategories;
