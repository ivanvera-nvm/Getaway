import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  TextField,
  Checkbox,
  Link,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Footer from "../footer/Footer";

import { useHistory, NavLink } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../../state/user";

import { useSnackbar } from "notistack";

import useStyles from "./style";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const email = useInput("email");
  const password = useInput("password");
  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const sendLoginRequest = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email: email.value, password: password.value }))
      .then((data) => {
        if (!data.error) {
          enqueueSnackbar("Logueado exitosamente", { variant: "success" });
          history.push("/");
        } else {
          enqueueSnackbar("Este usuario no existe", { variant: "error" });
        }
      })
      .catch((err) => enqueueSnackbar("Error al logear", { variant: "error" }));
  };

  const adminLogin = () => {
    dispatch(loginRequest({ email: "admin@gmail.com", password: "admin" }))
      .then((data) => {
        !data.error
          ? history.push("/")
          : enqueueSnackbar("Error al logear", { variant: "error" });
      })
      .then((response) =>
        enqueueSnackbar("Logueado exitosamente", { variant: "success" })
      )
      .catch((err) => alert("ESTE ES EL ERROR", err));
  };

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={sendLoginRequest}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={adminLogin}
              >
                ADMIN LOGIN
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <NavLink to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
              <Footer />
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
