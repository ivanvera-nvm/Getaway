import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between'
  
  },
  formControl: {
    margin: theme.spacing(3),
    
  },

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  category: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%"
  },

}));

export default useStyles;
