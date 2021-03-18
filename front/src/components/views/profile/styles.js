import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#cfe8fc",
    height: "100vh",
  },

  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    flexDirection: "row",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#f57c00",
    textTransform: "uppercase",
    width: "120px",
    height: "120px",
    fontSize: "50px",
  },
  contenedor: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    display: "flex",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    display: "flex",
    width: "60%",
  },
  edit: {
    width: "10%",
  },
  buttonColor: {
    backgroundColor: "#f57c00",
    color: "white",
  },
}));

export default useStyles;
