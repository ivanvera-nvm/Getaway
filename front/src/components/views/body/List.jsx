import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import {setTotal} from '../../state/totalProducts'
import Container from "@material-ui/core/Container";

import ProductCard from "./ProductCard.jsx";
import Grid from "@material-ui/core/Grid";
import axios from "axios";


const List = () => {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3080/api/products")
      .then((res) => {
        console.log(res.data);
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log("Error");
      });

      

  }, []);

  const totalProducts = products.length
 
  dispatch(setTotal(totalProducts))

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed alignItems="stretch">
        <Grid container spacing={2}>
          {products.map((product, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
                <ProductCard product={product} key={product.id} />
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
