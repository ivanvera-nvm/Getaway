import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./user";
import favsReducer from "./favs";
import adminReducer from "./admin";
import productsReducer from "./products";
import { productReducer } from "./products";
import listUsersReducer from "./listUsers";
import totalProductsReducer from "./totalProducts";
import { ordersReducer, userOrdersReducer } from "./orders";
import {userCartReducer} from './cart';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    favs: favsReducer,
    admin: adminReducer,
    products: productsReducer,
    product: productReducer,
    listUsers: listUsersReducer,
    totalProducts: totalProductsReducer,
    orders: ordersReducer,
    userOrders: userOrdersReducer,
    userCart: userCartReducer,
  },
});

export default store;
