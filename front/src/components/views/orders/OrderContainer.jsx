import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import OrderConfirmation from "./OrderConfirmation";

export default function OrderContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{}} />
        <OrderConfirmation />
      </Container>
    </React.Fragment>
  );
}
