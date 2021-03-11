import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Product from "./Product";
import Box from "@material-ui/core/Box";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed >
      <Box display="flex" justifyContent="center">
        <Product />
        {/*   <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        /> */}
      </Box>
      </Container>
    </React.Fragment>
  );
}
