import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background:"grey",
    height:"25px"
  },
  position:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    color:"white"

  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center" className={classes.position}>
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/">
            Getaway
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
