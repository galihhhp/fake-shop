import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
