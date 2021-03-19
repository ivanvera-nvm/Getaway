import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CategoriesList() {
  const [state, setState] = React.useState({
    1: false,
    2: false,
    3: false,
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
      </FormGroup>
    </div>
  );
}
