import React from "react";

import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { username } = useParams();

  return (
    <div>
      <h1>{username} USER DETAIL INFO</h1>
    </div>
  );
};

export default UserDetail;
 