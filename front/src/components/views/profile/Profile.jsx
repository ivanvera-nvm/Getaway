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
  const user = useSelector((state) => state.user).user;
  const userOrders = useSelector((state) => state.userOrders);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="div" />

        {user ? (
          <>
            <Box>
              <Paper className={classes.root}>
                <img
                  src={`${process.env.PUBLIC_URL}/avatars/ninja-cat.png`}
                  alt="ninja-cat"
                />
                <Typography variant="overline">
                  <ul>
                    <li>{`Name: ${user.name}`}</li>
                    <li>{`Last Name: ${user.lastName}`}</li>
                    <li>{`Phone: ${user.phone}`}</li>
                    <li>{`Address: ${user.address}`}</li>
                    <li>{`Access type: ${user.access}`}</li>
                  </ul>
                </Typography>
              </Paper>
            </Box>
          </>
        ) : (
          <></>
        )}
        {userOrders[0] ? (
          <>
            <Box>
              <Paper>
                <h3>Order History</h3>
                <ul>
                  {userOrders.map((order, i) => (
                    <li
                      key={i}
                    >{`Order ID: ${order.id} =========> ${order.nameProduct[0]}`}</li>
                  ))}
                </ul>
              </Paper>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Profile;
