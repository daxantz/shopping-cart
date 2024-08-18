import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Itempage from "./components/Itempage";
import Cart from "./components/Cart";

import "./index.css";

// Define the router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Home is the index route for "/" */}
      <Route path="shop">
        <Route index element={<Shop />} />{" "}
        <Route path="item/:id" element={<Itempage />} />
      </Route>
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
