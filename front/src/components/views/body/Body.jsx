import React from "react";
import {NavLink} from 'react-router-dom';


const Body = () => {
  return (
    <div>
      <h3 style={{ color: "red" }}>BODY COMPONENT</h3>
      <div>
        <NavLink to='/categories'>CATEGORIES</NavLink>
      </div>
    </div>
  );
};

export default Body;
