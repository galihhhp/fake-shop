import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "routes/Cart";
import Home from "routes/Home";
import Product from "routes/Product";
import ProductDetails from "routes/ProductDetails";
import React from "react";
import ReactDOM from "react-dom/client";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
