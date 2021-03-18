import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fetchUsers } from "../../../state/listUsers";
import { toggleAccess, deleteUser } from "../../../state/admin";
import DeleteIcon from "@material-ui/icons/Delete";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function Users() {
  // const [access, setAccess] = React.useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  const handleChange = (e) => {
    const id = e.currentTarget.getAttribute("name");
    const access = e.target.value;
    dispatch(toggleAccess({ id, access }));
  };

  const user = useSelector((state) => state.user);

  const refresh = () => {
    history.push("/admin");
  };

  const users = useSelector((state) => state.listUsers);

  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

  return (
    <>
      {/* {user.user && user.user.access === "admin" ? ( */}
      <div>
        <h1 align="center">Gestion de Usuarios</h1>
        <Button
          variant="contained"
          color="primary"
          align="right"
          onClick={refresh}
        >
          Guardar
        </Button>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Gestion Usuarios</TableCell> */}
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Apellido</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Permisos</TableCell>
                <TableCell align="center">Ordenes</TableCell>
                <TableCell align="center">Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((users) => (
                <TableRow key={users.id}>
                  {/* <TableCell component="th" scope="row">
                  {users.name}
                </TableCell> */}

                  <TableCell align="center">{users.id}</TableCell>
                  <TableCell align="center">{users.name}</TableCell>
                  <TableCell align="center">{users.lastName}</TableCell>
                  <TableCell align="center">{users.email}</TableCell>

                  <TableCell align="center">
                    {" "}
                    <FormControl className={classes.formControl}>
                      <InputLabel id={users.id}>Acceso</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        onChange={handleChange}
                      >
                        <MenuItem value="admin" name={users.id}>
                          {users.access === "admin" ? <CheckIcon /> : ""}
                          Admin
                        </MenuItem>
                        <MenuItem value="user" name={users.id}>
                          {users.access === "user" ? <CheckIcon /> : ""}User
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained">Ordenes</Button>
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteUser(users.id));
                        refresh();
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* ) : ( */}
        {/* <div>
        <h3 style={{ color: "red" }}>ADMIN PRIVATE PAGE</h3>
      </div> */}
      {/* )} */}
    </>
  );
}
