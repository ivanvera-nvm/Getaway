import React from "react";
import {
  Paper,
  CssBaseline,
  Typography,
  Container,
  Box,
} from "@material-ui/core";

import { useSelector } from "react-redux";

import useStyles from "./styles";

const Profile = () => {
  const classes = useStyles();
  const userInfo = useSelector((state) => state.user);

  ///Si van a hacer una lista, es mejor usar `map` , pero depende de como quieran mover la informacion del usuario C:
  ///La idea es que la foto y/o avatar quede a la izq y info a la derecha. Pero eso es a gusto de quien tenga esta tarea.

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="div" />
        <Box>
          <Paper className={classes.root}>
            <img
              src={`${process.env.PUBLIC_URL}/avatars/ninja-cat.png`}
              alt="ninja-cat"
            />
            <Typography variant="overline">
              <ul>
                <li>{`Name: ${userInfo.user.name}`}</li>
                <li>{`Last Name: ${userInfo.user.lastName}`}</li>
                <li>{`Phone: ${userInfo.user.phone}`}</li>
                <li>{`Address: ${userInfo.user.address}`}</li>
                <li>{`Access type: ${userInfo.user.access}`}</li>
              </ul>
            </Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
