import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  adminPanel: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "35px",
    fontSize: "25px",
  },
  links: {
    backgroundColor: "#f57c00",
    width: "380px",
    height: "120px",
    marginTop: "8px",
    marginBottom: "8px",
    marginLeft: "8px",
    marginRight: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
    borderRadius: "8px",

    "&:hover": {
      fontSize: "17px",
    },
    "&:active": {
      color: "gray",
    },
  },
  icon: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  highlighted: {

    color:"#F50057"
  },
  input:{
    width:"40%", 
    margin:"30px"
  },
  button:{
    display:"block",
    margin:"0 auto"
  }
}));

export default useStyles;
