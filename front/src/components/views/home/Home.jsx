import React from "react";
import Products from '../body/List'

import { useSelector, useDispatch } from "react-redux";
import { fetchMe } from "../../../state/user";

const Home = () => {

  

  return (
    <div>
     <Products />
    </div>
  );
};

export default Home;