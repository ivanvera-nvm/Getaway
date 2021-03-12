import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../state/listUsers";


const Users = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users = useSelector((state) => state.listUsers);


  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id} className="table-secondary">
              <th scope="row">{user.name}</th>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>---</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Users;
