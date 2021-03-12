import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";


import { useHistory, NavLink } from "react-router-dom";

import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (

  ///los divs de navegacion son solo para facilitar las pruebas
   
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
        
              <div  id="menu-outer">
                <div className="table">
                  <ul id="horizontal-list">
                    <li>
                      <NavLink exact to="/" activeClassName="active">
                        Home
                      </NavLink>
                      <li>
                        <NavLink exact to="/user" activeClassName="active">
                          User
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/login" activeClassName="active">
                          Login
                        </NavLink>
                      </li>

                      <li>
                        <NavLink exact to="/register" activeClassName="active">
                          Register
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/admin" activeclassName="active">
                          Admin
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/users" activeclassName="active">
                          Users
                        </NavLink>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
          
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 2 new notifications" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {
                history.push("/profile/algunUser");
              }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              /*           aria-controls={mobileMenuId} */
              aria-haspopup="true"
              /*        onClick={handleMobileMenuOpen} */
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/*    {renderMobileMenu}  */}
    </div>
  );
};

export default Navbar;
