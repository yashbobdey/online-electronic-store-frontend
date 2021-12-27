import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/adminActions";
import { Container, Row } from "react-bootstrap";

const UpdateProducts = (props) => {
  const [price, setPrice] = useState(""); //initializing price field
  const [quantity, setQuantity] = useState(""); //initializing state field
  const [rating, setRating] = useState(""); //initializing rating field
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.admin.product); //fetching particular product from redux store
  const history = useHistory(); // use of history object

  useEffect(() => {
    if (product != null) {
      setPrice(product.price);
      setQuantity(product.quantity);
      setRating(product.rating);
    }

    dispatch(actions.getProduct(id)); //dipatching the action to get the original product to be updated
  }, [product, dispatch, id]);

  const onUpdateProducts = (e) => {
    e.preventDefault();

    const update_product = Object.assign(product, {
      // creating new object for updated product
      price: price,
      quantity: quantity,
      rating: rating,
    });
    console.log(update_product);
    dispatch(actions.updateProduct(update_product)); //dispatching redux action for product update
    alert("data updated");
    history.push("/admin/products"); //redirecting to admin landing page
  };

  const handlePriceChange = (event) => {
    //handling price change
    console.log(event.target.value);
    setPrice(event.target.value); //setting changed price
  };
  const handleQuantityChange = (event) => {
    //handling quantity change
    console.log(event.target.value);
    setQuantity(event.target.value); //setting changed quantity
  };
  const handleRatingChange = (event) => {
    //handling rating change
    console.log(event.target.value);
    setRating(event.target.value); //setting changed rating
  };
  return (
    //form for updating the product info for admin
    <>
      <Container>
        <Row md="2" className="justify-content-md-center mt-4">
          <Form onSubmit={(e) => onUpdateProducts(e)}>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={handlePriceChange}
                value={price}
                type="number"
                placeholder="Enter Price"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label> Quantity</Form.Label>
              <Form.Control
                onChange={handleQuantityChange}
                value={quantity}
                type="number"
                placeholder="Enter Quantity"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label> Rating</Form.Label>
              <Form.Control
                onChange={handleRatingChange}
                value={rating}
                type="number"
                placeholder="Enter Quantity"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <br></br>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default UpdateProducts; //exporting the component
