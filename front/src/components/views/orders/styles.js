import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
    root: {
      width: 1200,
      height: 460,
    },
    container: {
      marginTop: "15px",
      marginBottom: "8px",
      marginLeft: "15px",
      marginRight: "8px",
      display: "flex",
      flexDirection: "column",
    },
    title: {
      fontSize: "25px",
      fontWeight: "bold",
      width: "100%",
    },
    message: {
      marginTop: "12px",
      width: "100%",
    },
    details: {
      marginTop: "12px",
      width: "100%",
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
  }));

  export default useStyles;