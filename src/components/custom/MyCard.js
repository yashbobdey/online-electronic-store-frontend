//
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import styles from "./MyCard.module.css";

const Cards = ({ product, onClick }) => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user.user._id);

  const addToCartHandler = () => {
    const newProduct = {
      _id: product._id,
      name: product.name,
      image: product.images[0],
      description: product.description[0],
      price: product.price,
      quantity: 1,
    };
    dispatch(addToCart(user_id, newProduct));
  };
  return (
    <>
      <Card className={styles.Card} onClick={onClick}>
        <Card.Header className="bg-dark"></Card.Header>
        <Card.Img
          variant="top"
          className={styles.img}
          src={product.images[0]}
          alt="Card image cap"
        />
        <Card.Body>
          <Card.Title className={styles.title}>
            <b>{product.name}</b>
          </Card.Title>
          <Card.Text className={styles.description}>
            {product.description[0]}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroupItem className="bg-dark">
            <span className="float-left bg-success text-light border rounded px-2 py-0">
              <i className="fas fa-rupee-sign"></i>
              {product.price}
            </span>
            <span className="float-right bg-warning text-light border rounded px-2 py-0 ">
              {product.rating} <i className="fas fa-star"></i>
            </span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
};

export default Cards;

// <MyCard src={} title={} description={} price={} rating={} />
