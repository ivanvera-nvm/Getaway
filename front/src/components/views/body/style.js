import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    // width:"300px",
    height:"530px",
    margin:"0 30px",
    marginBottom:"20px",
    "&:hover": {
      boxShadow: "5px 1px 33px -18px rgba(0,0,0,0.75)",
    },
  },
  position:{
    marginTop:"30px"
  },
  header: {
    height: "80px",
    paddingTop: 16,
    paddingLeft: 20,
  },
  title: {
    textAlign:"center",
    textDecoration:"none",
    color:"black",
    // width: "70%",
    fontSize: "22px",
    margin:"7px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  fullHeightCard: {
    height: "100%",
  },
  cardHeaderHeight: {
    height: "120px",
  },
  description: {
    height: "80px",
  },
  interact: {
    display: "flex",
    justifyContent: "space-around",
  },
  rating: {
    alignItems: "center",
  },
  fav: {},
  price: {
    fontSize: 20,
    color: "#",
    fontWeight: 150,
  },
  purchaseBtn: {
    // width: "80px",
    fontSize: "12px",
    color: "white",
    backgroundColor: "#dd2c00",
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
  icon :{
    backgroundColor:"#f56d05",
   
  }

}));

export default useStyles