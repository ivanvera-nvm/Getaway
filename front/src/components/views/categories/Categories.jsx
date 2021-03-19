import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CategoryIcon from '@material-ui/icons/Category';
import CategoriesList from './CategoriesList'

import useStyles from "./styles";

const Categories = () => {
  const classes = useStyles();

  return (
    <div className={classes.category}>
  
       <CategoriesList/>
    
      
    </div>
  );
};

export default Categories;
