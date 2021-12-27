import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ConfirmItem from "../components/custom/ConfirmItem";
import { emptyCartLogout } from "../actions/cartActions";
import {
  Form,
  Row,
  Col,
  Button,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { addOrder } from "../actions/ordersActions";
import MyModal from "../components/custom/MyModal";

const ConfirmOrder = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); //if user is logged in
  if (isLoggedIn) {
  }
  const user_id = useSelector((state) => state.user.user._id);
  const { isLoading, cartItems, cartPrice } = useSelector(
    (state) => state.cart
  );
  const user_address = useSelector((state) => state.user.user.address);

  const editOrderHandler = () => {
    history.push("/cart"); //redirecting back to cart
  };

  let cartItemsList = [];

  if (cartItems) {
    cartItemsList = cartItems.map((cartItem, i) => {
      return (
        //mapping each cartItem as per ConfirmItem component
        <ConfirmItem
          image={cartItem.image}
          name={cartItem.name}
          description={cartItem.description}
          quantity={cartItem.quantity}
          price={cartItem.price}
        />
      );
    });
  }
  // Modal
  const [showSuccess, setShowSuccess] = useState(false);
  const [toolTip, setToolTip] = useState("Place order"); //setting tooltip
  const handleSuccessClose = () => {
    setShowSuccess(false);
    history.push("/");
  };

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/login"); //redirecting the user if not logged in
    }
    toolTip === "Order Placed" && setShowSuccess(true); //customizing tooltip
  }, [user_id, isLoggedIn, history, toolTip, dispatch]);

  return (
    <>
      <MyModal //populating MyModal component
        show={showSuccess}
        variant="success"
        title="Order Placed Successfully!"
        message={`Your order  has been successfully placed and awaiting delivery details.`}
        handleClose={handleSuccessClose}
      />
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="justify-content-md-center">
          <h5 className="text-center">Confirm Order</h5>
          <div className="row">
            <div className="col-sm-8">
              {/* Insert Card here */}
              {cartItemsList}
            </div>

            {/* Price Table */}
            <div className="col-sm-4 ">
              <div
                className="card border-dark mb-3"
                style={{ maxWidth: "25rem" }}
              >
                <div className="card-body text-dark">
                  <h4>Price Details</h4>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th scope="row">Price</th>
                        <td className="product-price">{cartPrice} RS</td>
                      </tr>

                      <tr>
                        <th scope="row">Delivery</th>
                        <td>FREE</td>
                      </tr>
                      <tr>
                        <th scope="row">Total Amount</th>
                        <td className="product-totalPrice">{cartPrice} Rs</td>
                      </tr>
                    </tbody>
                  </table>
                  <h5>Shipping Address:</h5>
                  <p className="user-address">
                    {user_address.address}, {user_address.city}{" "}
                    {user_address.state},{user_address.zip}
                  </p>
                  <h4>Mode Of Payment</h4>{" "}
                  {/* payment options to choose from */}
                  <Form>
                    <fieldset>
                      <Form.Group as={Row} className="mb-4">
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            label="Credit Card/Debit Card"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                          />
                          <Form.Check
                            type="radio"
                            label="Gpay"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                          />
                          <Form.Check
                            type="radio"
                            label="UPI Payment"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                          />
                          <Form.Check
                            type="radio"
                            label="Cash on Delivery"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>
                  </Form>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-$"top"`}>{toolTip}</Tooltip>}
                  >
                    <Button
                      variant="warning"
                      onClick={() => {
                        const newOrder = {
                          items: cartItems,
                          owner: user_id,
                          totalPrice: cartPrice,
                        };
                        dispatch(addOrder(newOrder)); //placing order
                        dispatch(emptyCartLogout(user_id)); //emptying the cart
                        setToolTip("Order Placed");
                      }}
                    >
                      Place Order
                    </Button>
                  </OverlayTrigger>
                  <Button
                    variant="outline-secondary"
                    className="ml-4"
                    onClick={editOrderHandler} //editing the order
                  >
                    Edit Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ConfirmOrder;
