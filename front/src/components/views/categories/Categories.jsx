import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Categories = () => {
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search);
  const skip = parseInt(query.get("skip")) || 0;
  const limit = parseInt(query.get("limit")) || 5;

  const pagination = () => {
    query.set("skip", skip + limit);
    history.push({ search: query.toString() });
  };

  return (
    <div>
      <h3 style={{ color: "pink" }}>CATEGORIES PAGE(with query params)</h3>
      <div>
          <h4>
              Skip: skip
          </h4>
          <button style={{width: '10rem'}} onClick={pagination}>Next 5 pages</button>
      </div>
    </div>
  );
};

export default Categories;
