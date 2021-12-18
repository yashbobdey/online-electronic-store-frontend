import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/adminActions";
import { Container, Row } from "react-bootstrap";

const UpdateProducts = (props) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rating, setRating] = useState("");
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.admin.product);
  const history = useHistory();

  useEffect(() => {
    if (product != null) {
      setPrice(product.price);
      setQuantity(product.quantity);
      setRating(product.rating);
    }

    dispatch(actions.getProduct(id));
  }, [product, dispatch, id]);

  const onUpdateProducts = (e) => {
    e.preventDefault();

    const update_product = Object.assign(product, {
      price: price,
      quantity: quantity,
      rating: rating,
    });
    console.log(update_product);
    dispatch(actions.updateProduct(update_product));
    alert("data updated");
    history.push("/admin/products");
  };

  const handlePriceChange = (event) => {
    console.log(event.target.value);
    setPrice(event.target.value);
  };
  const handleQuantityChange = (event) => {
    console.log(event.target.value);
    setQuantity(event.target.value);
  };
  const handleRatingChange = (event) => {
    console.log(event.target.value);
    setRating(event.target.value);
  };
  return (
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

export default UpdateProducts;
