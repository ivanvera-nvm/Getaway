import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";

import ProductCard from "./ProductCard.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const useStyles = makeStyles({});

let source = "https://fakestoreapi.com/products";
//Axios instance
const api = axios.create({
  baseURL: source,
});

// componentDidMount() {
//   api.get(source).then((res) => {
//     this.setState({ data: res.data });
//     console.log(this.state.data);
//   });
// }

const List = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3080/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error");
      });
  }, []);

  console.log(products);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed alignItems="stretch">
        <Grid container spacing={2}>
          {products.map((product, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <ProductCard product={product} key={i} />
              </Grid>
            );
          })}
        </Grid>

        {/* <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          /> */}
        {/* <ProductCard /> */}
      </Container>
    </React.Fragment>
  );
};

export default List;

// export default function List() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container fixed>
//         {/* <Typography
//           component="div"
//           style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
//         /> */}
//         <RecipeReviewCard />
//       </Container>
//     </React.Fragment>
//   );
// }
