import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";

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

export default function OrderConfirmation() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.title}>Gracias por tu compra!</Box>
        <Box className={classes.message}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minima
          et eos eaque quia nesciunt placeat nobis. Laborum, exercitationem est.
          Reprehenderit ab delectus eaque nisi sunt velit quidem dolorem vel.
        </Box>
        <Box className={classes.details}>
          Detalles de la compra: Order confirmation
        </Box>
      </Box>
    </Card>
  );
}
