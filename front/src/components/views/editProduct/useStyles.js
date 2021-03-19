
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: 1200,
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
    media: {
      width: 800,
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
    },
    header: {
      fontSize: 35,
    },
    boxInfo: {
      width: 400,
      fontSize: 22,
    },
    price: {
      paddingTop: 20,
      paddingBottom: 20,
      width: 400,
      fontSize: 35,
      color: "#66bb6a",
    },
    description: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    boxSize: {
        
    }
  }));

  export default useStyles