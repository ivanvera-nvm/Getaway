import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  stack: {
    display: "flex",
    flexDirection: "column",
  },
  navMain: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "2em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    width: "900px",
    borderRadius: "4px",
    border: "1px solid #dddddd",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      ////////////////////Enlarge search bar
      width: "60ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "3.5em",
    backgroundColor: "#53a318",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: "2em",
    marginBottom: "5em",
  },
  links: {
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "12px",
    color: "white",
    "&:hover": {
      fontSize: "14px",
    },
    "&:active": {
      color: "gray",
    },
  },

  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default useStyles;
