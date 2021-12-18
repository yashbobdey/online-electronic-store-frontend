import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../actions/cartActions";

import MyModal from "../custom/MyModal";


export default function OrderCard({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const user_id = useSelector((state) => state.user.user._id);
  const errorMessage = useSelector((state) => state.cart.error);
  useEffect(() => {
    errorMessage && setShow(true);
  }, [dispatch, errorMessage]);

   
  const handleClose = () => setShow(false);
  const handleLogin = () => history.push("/login");

  const deleteHandler = () => {
    dispatch(removeFromCart(user_id, product));
  };
  const increaseQuantityHandler = () => {
    dispatch(increaseQuantity(user_id, product));
  };
  const decreaseQuantityHandler = (quantity) => {
    if (quantity === 1){
      dispatch(removeFromCart(user_id, product));
    } else
    dispatch(decreaseQuantity(user_id, product));
  };
  return (
    <div>
     <MyModal
      show={show}
        variant="error"
        title="Something went wrong"
        message={errorMessage}
        handleLogin={handleLogin}
        handleClose={handleClose}
      />
      <div className="card mb-5  bg-light text-dark justify-content-md-center">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start "
              alt=""
              style={{
                width: "100%",
                height: "15vw",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 style={{ marginTop: "-20px" }} className="card-title">
                {product.name}{" "}
              </h5>

              <p> {product.description}</p>
              <p className="card-text">
                <i class="fas fa-rupee-sign"></i>
                {product.price}
              </p>
              <div style={{ float: "left" }}>
                <button
                  style={{ float: "left" }}
                  className="bg-transparent btn-outline-light text-dark"
                  onClick={() => decreaseQuantityHandler(product.quantity)}
                >
                  <i class="fas fa-minus-circle"></i>
                </button>
                <h4
                  style={{
                    float: "left",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  {product.quantity}
                </h4>
                <button
                  style={{ float: "left" }}
                  className="bg-transparent btn-outline-light text-dark"
                  onClick={increaseQuantityHandler}
                >
                  <i class="fas fa-plus-circle"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger ml-2 mb-2"
                  style={{ fontSize: "9pt" }}
                  onClick={deleteHandler}
                >
                  <i class="fas fa-trash-alt "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
