import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  header: {
    height: "80px",
    paddingTop: 16,
    paddingLeft: 20,
  },
  title: {
    width: "70%",
    fontSize: 16,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    "&:hover": {
      border: "2px solid #cccccc",
    },
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
    color: "#357a38",
    fontWeight: 150,
  },
  purchaseBtn: {
    width: "120px",
    fontSize: "12px",
    color: "white",
    backgroundColor: "#dd2c00",
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default useStyles