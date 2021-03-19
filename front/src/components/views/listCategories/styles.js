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
    marginBottom: "50px",
    fontSize: "35px",
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
    transition:"0.8s",

    "&:hover": {
      fontSize: "22px",
    },
    "&:active": {
      color: "gray",
    },
  },
  icon:{
    display:"flex",
    margin:"10px"
  }
}));

export default useStyles;
