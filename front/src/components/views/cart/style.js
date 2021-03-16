import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  purchaseBtn: {
    width: "120px",
    fontSize: "12px",
    color: "white",
    backgroundColor: "#f57c00",
  },
  mainList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    
  },
  titleCart: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    
  },
  button: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  drawer: {
    backgroundColor: "#53a318",
  },
  componentList:{
    color: "white",
  },
  name:{
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: "30px",
    marginLeft: "20px"
  }
});

export default useStyles;

