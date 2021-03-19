import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from 'axios'
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CategoriesList(ids) {
  let [state, setState] = React.useState({
    1: false,
    2: false,
    3: false,
  });



  const handleChange = (event) => {
    console.log(event.target.name);
    setState({ ...state, [event.target.name]: event.target.checked });
  };



  console.log('estado actuak',state)

  const byCategoty = () => {

    let selection = Object.keys(state);
    console.log(selection)
    axios.post('http://localhost:3080/api/products/category/search', {categories: selection})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

  }



  return (
    <div style={{ marginBottom: "5rem" }}>
      <FormGroup row>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedA}
              onChange={handleChange}
              name="1"
            />
          }
          label="Aventura"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedB}
              onChange={handleChange}
              name="2"
            />
          }
          label="Escapadas"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedC}
              onChange={handleChange}
              name="3"
            />
          }
          label="Show time"
        />
        <button onClick={byCategoty} >Search by category</button>
      </FormGroup>
    </div>
  );
}
