import React from "react";
import "./style.css";

const Error = () => {
  return (
    <div>
      <h1 className="row" style={{ color: "red" }}>
        404 NOT FOUND
      </h1>
      <div className="flex-container">
        <img
          className="flex-container"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5cGaTZbfnQlzL89DiMvtB9LNnlb7vSTybA&usqp=CAU"
          alt="error"
        />
      </div>
    </div>
  );
};

export default Error;
