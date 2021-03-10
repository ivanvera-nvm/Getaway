import React from "react";
import {NavLink} from 'react-router-dom';

const User = () => {

  const testUser = 'GlaDos'


  return (
    <div>
      <h1>User Component</h1>
      <div>
        <NavLink to={`/profile/${testUser}`}>User profile</NavLink>
      </div>
    </div>
  );
};


export default User;