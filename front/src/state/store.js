import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./user";
import favsReducer from "./favs";
import adminReducer from "./admin";
import productsReducer from "./products";
import { productReducer, adminProductsReducer } from "./products";
import listUsersReducer from "./listUsers";
import totalProductsReducer from "./totalProducts";
import { ordersReducer, userOrdersReducer } from "./orders";
import {userCartReducer, userCartCheckoutReducer, historyOrdersReducer} from './cart';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    favs: favsReducer,
    admin: adminReducer,
    adminProducts: adminProductsReducer,
    products: productsReducer,
    product: productReducer,
    listUsers: listUsersReducer,
    totalProducts: totalProductsReducer,
    orders: ordersReducer,
    userOrders: userOrdersReducer,
    userCart: userCartReducer,
    historyOrders: historyOrdersReducer,
    cartCheckout: userCartCheckoutReducer,
  },
});

export default store;
