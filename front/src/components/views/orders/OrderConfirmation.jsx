import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },

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

export default function OrderConfirmation() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const user = useSelector((state) => state.user);
  const userOrders = useSelector((state) => state.userOrders);
  console.log(userOrders);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.title}>
          Gracias por tu compra {user.user.name}!
        </Box>
        <Box className={classes.message}>
          Esperamos que disfrute sus productos. A continuación la lista de lo
          recientemente abonado.
        </Box>
        <Box className={classes.details}>
          Detalles de la compra:
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userOrders.map((order) => (
                  <TableRow key={order.key}>
                    <TableCell component="th" scope="row">
                      {order.nameProduct}
                    </TableCell>
                    <TableCell align="right">{order.productQuantity}</TableCell>
                    <TableCell align="right">{order.subtotal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box className={classes.title}>
          Su total facturado es:
        </Box>
      </Box>
    </Card>
  );
}
