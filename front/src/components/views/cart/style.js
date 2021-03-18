import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  purchaseBtn: {
    width: "140px",
    height: "40px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#f57c00",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
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
  componentList: {
    color: "white",
  },
  name: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: "30px",
    marginLeft: "20px",
  },

  root: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    height: "215px",
    paddingBottom: "15px",
    marginBottom: "15px",
  },
  container: {
    paddingTop: "14px",
    display: "flex",
    flexDirection: "row",
    height: "160px",
  },
  blockLeft: {
    width: "50%",
    paddingLeft: "14px",
  },
  blockRight: {
    paddingRight: "14px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  checkoutBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "14px",
    marginBottom: "14px",
  },
  checkoutButton: {
    display: "flex",
    width: "800px",
    fontSize: "18px",
    color: "white",
    backgroundColor: "#dd2c00",
  },
  totals: {
    height: "50px",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "right",
  },
  creditCards: {
    textAlign: "right",
  },
  image: {
    width: "40px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  naranja: {
    height: "20px",
  },
});

export default useStyles;
