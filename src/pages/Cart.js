import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "../components/custom/OrderCard";
//import MyModal from "../components/custom/MyModal";

import { getCart } from "../actions/cartActions";
import { useHistory } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user_id = useSelector((state) => state.user.user._id); //getting user ID from redux store
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); //getting user logged in status from redux store
  const { isLoading, cartItems } = useSelector((state) => state.cart); //getting cartItems from redux store

  let cartItemsList = []; //initializing empty cart items array

  useEffect(() => {
    //react hook
    if (isLoggedIn) {
      dispatch(getCart(user_id)); //getting particular cart from user id
    }
  }, [isLoggedIn, user_id, dispatch]);

  if (cartItems) {
    cartItemsList = cartItems.map((item) => <OrderCard product={item} />); //mapping every cartItem as per OrderCard component
  }

  const confirmOrderHandler = () => {
    history.push("/confirm"); //redirecting user to confirm page
  };
  const continueShoppingHandler = () => {
    history.push("/"); //redirecting user to home page
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          {" "}
          {/* getting the content at the center */}
          <div className="col-2">
            <h2>My Cart</h2>
          </div>
        </div>
      </div>
      <div className="justify-content-md-center">
        <div className="row">
          <div className="col-sm-8">
            {isLoading && <h1>Loading ...</h1>}
            {!isLoggedIn && (
              <Container>
                <h1>You must Login to see/edit the cart </h1>
                <Button onClick={() => history.push("/login")}>
                  Go to Login Page
                </Button>
              </Container>
            )}
            {!isLoading && cartItemsList} {/* displaying the cartItems */}
            {isLoggedIn && (
              <div className="row mb-3">
                <div className="col-sm-6">
                  {/* {cartItemsList.length === 0 && <h1>Cart is Empty</h1>}{" "} */}
                  {/* checking if cart is empty */}
                  {cartItemsList.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-warning btn-lg btn-block"
                      onClick={confirmOrderHandler}
                    >
                      Proceed to Buy {/* proceed to buy button */}
                    </button>
                  )}
                </div>
                <div className="col-sm-6">
                  {cartItemsList.length === 0 && <h1>Cart is Empty</h1>}

                  {cartItemsList.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg btn-block"
                      onClick={continueShoppingHandler}
                    >
                      Continue Shopping {/* continue shopping button */}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
