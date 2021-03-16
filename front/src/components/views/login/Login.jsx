import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Footer from "../footer/Footer";

import { useHistory, NavLink } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";

import { loginRequest, fetchMe } from "../../../state/user";

import useStyles from "./style";

// pusheo

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const email = useInput("email");
  const password = useInput("password");
  const history = useHistory();

  const user = useSelector((state) => state.user);

  

  const sendLoginRequest = (e) => {
    e.preventDefault();

    dispatch(loginRequest({ email: email.value, password: password.value }))
      .then((data) => {
        !data.error ? history.push("/") : alert("Error al logear");
      })
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
