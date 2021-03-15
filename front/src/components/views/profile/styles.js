import { makeStyles } from "@material-ui/core/styles";

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
  },
}));

export default useStyles;
