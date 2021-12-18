import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "../components/custom/OrderCard";
import MyModal from "../components/custom/MyModal";

import { getCart } from "../actions/cartActions";
import { useHistory } from "react-router-dom";
import {Button, Container, Row} from "react-bootstrap"
const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user_id = useSelector((state) => state.user.user._id);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const { isLoading, cartItems } = useSelector((state) => state.cart);

  let cartItemsList = [];

  useEffect(() => {
    if (isLoggedIn){

      dispatch(getCart(user_id));
    }
  }, [isLoggedIn, user_id, dispatch]);

  if (cartItems) {
    cartItemsList = cartItems.map((item) => <OrderCard product={item} />);
  }

  const confirmOrderHandler = () => {
    history.push("/confirm");
  };

  return (
    <div className="justify-content-md-center">
      
      <div className="row">
        <div className="col-sm-8">
          {/* Insert Card here  */}

          {/* <button type="button" className="btn btn-warning btn-lg btn-block">Proceed to Buy</button> */}
          {isLoading && <h1>Loading ...</h1>}
          {!isLoggedIn && <Container>
           

            <h1>You must Login to see/edit the cart </h1>
            <Button onClick={()=> history.push("/login")}>Go to Login Page</Button>
            
            </Container>}
          {!isLoading && cartItemsList}
          {isLoggedIn && <div>
          {cartItemsList.length === 0 && <h1>Cart is Empty</h1>}
            
          {cartItemsList.length > 0 && (
            <button
              type="button"
              className="btn btn-warning btn-lg btn-block"
              onClick={confirmOrderHandler}
            >
              Proceed to Buy
            </button>
          )}
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
