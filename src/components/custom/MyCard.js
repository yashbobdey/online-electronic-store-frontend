//
import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { addToCart } from "../../actions/cartActions";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import styles from "./MyCard.module.css";

const Cards = ({ product, onClick }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    for (const cartItem of cartItems) {
      if (cartItem._id === product._id) {
        setAddedToCart(true);
      }
    }
  }, [cartItems, product]);

  return (
    <>
      <Card className={styles.Card} onClick={onClick}>
        <Card.Header className="bg-dark"></Card.Header>
        <Card.Img
          variant="top"
          className={styles.img}
          src={product.images[0]} //choosing first image from array of images
          alt="Card image cap"
        />
        <Card.Body>
          <Card.Title className={styles.title}>
            <b>{product.name}</b>
          </Card.Title>
          <Card.Text className={styles.description}>
            {product.description[0]}{" "}
            {/*choosing first description from array of descriptions*/}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroupItem className="bg-dark">
            <span className="float-left bg-success text-light border rounded px-2 py-0">
              <i className="fas fa-rupee-sign"></i>
              {product.price}
            </span>
            {addedToCart && (
              <span className="  text-light border rounded px-2 py-0 ml-4">
                <i class="fas fa-check">Added</i>
              </span>
            )}
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
