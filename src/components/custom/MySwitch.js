import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCart } from "../../actions/cartActions";
import { fetchProducts } from "../../actions/productActions";

//----------------------- Pages --------------------------
import Home from "../../pages/Home.js";
import ProductDetail from "../../pages/ProductDetail.js";
import Login from "../../pages/Login.js";
import Register from "../../pages/Register.js";
import Profile from "../../pages/Profile.js";
import Cart from "../../pages/Cart.js";
import OrderHistory from "../../pages/OrderHistory";
import ConfirmOrder from "../../pages/ConfirmOrder";
import Products from "../../pages/Products";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import AdminViewProducts from "../../pages/AdminViewProducts.js";
import AdminUpdateProducts from "../../pages/AdminUpdateProducts.js";
import AdminOrders from "../../pages/AdminOrders";
import UpdatePassword from "../../pages/UpdatePassword.js";

export default function MySwitch() {
  const dispatch = useDispatch();
  // const { isAdmin } = useSelector((state) => state.user.user);
  // const user_id = useSelector((state) => state.user.user._id);
  let user_id = undefined;
  let isAdmin = false;
  const user = useSelector((state) => state.user.user);
  if (user) {
    user_id = user._id;
    isAdmin = user.isAdmin;
  }
  useEffect(() => {
    console.log("inside use effect (getCart action triggered.");
    if (user_id !== undefined) {
      dispatch(getCart(user_id));
    }
  }, [dispatch, user_id]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Container className="min-vh-100">
      <Switch>
        {isAdmin && (
          <Route path="/admin/products" component={AdminViewProducts} />
        )}
        {isAdmin && (
          <Route path="/admin/update/:id" component={AdminUpdateProducts} />
        )}
        {isAdmin && <Route path="/admin/orders" component={AdminOrders} />}
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/orders" component={OrderHistory} exact />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/confirm" component={ConfirmOrder} exact />
        <Route path="/password" component={UpdatePassword} exact />
      </Switch>
    </Container>
  );
}
