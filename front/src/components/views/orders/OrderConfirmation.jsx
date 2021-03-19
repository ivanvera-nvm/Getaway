import React from "react";

import Card from "@material-ui/core/Card";

import Box from "@material-ui/core/Box";

import useStyles from "./styles";



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
