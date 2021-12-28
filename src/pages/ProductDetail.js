import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Button, Table } from "react-bootstrap";

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductDetail.module.css";
import { addToCart } from "../actions/cartActions";
import { getProduct } from "../actions/productActions";

export default function ProductDetail() {
  const params = useParams();
  const product_id = params.id;
  const dispatch = useDispatch();
  const history = useHistory();

  const [aboutCart, setAboutCart] = useState("Add To Cart");
  const [cartProduct, setCartProduct] = useState(false);
  const [unAddedProductQuantity, setUnaddedProductQuantity] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);
  let product = useSelector((state) => state.products.product);
  useEffect(() => {
    dispatch(getProduct(product_id));

    cartItems.forEach((cartItem) => {
      if (cartItem._id === product_id) {
        setAboutCart("Go To Cart");
        setCartProduct(true);
      } else {
        setAboutCart("Add To Cart");
      }
    });
  }, [product_id, dispatch, cartItems, unAddedProductQuantity, cartProduct]);

  const user_id = useSelector((state) => state.user.user._id);

  let specificationList = [];

  if (product) {
    for (const key in product.specification) {
      specificationList.push(
        <tr key={key}>
          <td>
            <b>{key}</b>
          </td>
          <td>{`${product.specification[key]}`}</td>
        </tr>
      );
    }
  }
  const unAddedProductQuantityIncrementHandler = () => {
    setUnaddedProductQuantity(unAddedProductQuantity + 1);
  };
  const unAddedProductQuantityDecrementHandler = () => {
    if (unAddedProductQuantity === 1) {
      alert("Quantity cant be 0");
    } else setUnaddedProductQuantity(unAddedProductQuantity - 1);
  };
  return (
    <>
      {product.specification && (
        <div className={styles.main} key={product._id}>
          <Container fluid>
            <Row>
              <Col md={6}>
                <Carousel fade={true} pause={false}>
                  <Carousel.Item data-interval={false}>
                    <img
                      className="d-block w-100"
                      src={product.images[0]}
                      alt=""
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item data-interval={false}>
                    <img
                      alt="product images"
                      className="d-block w-100"
                      src={product.images[1]}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item data-interval={false}>
                    <img
                      className="d-block w-100"
                      src={product.images[2]}
                      alt=""
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item data-interval={false}>
                    <img
                      className="d-block w-100"
                      src={product.images[3]}
                      alt=""
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>

              <Col className={styles.sub_main} md={6}>
                <h2> {product.name} </h2>
                <h2>
                  <strong>
                    Price :<i className="fas fa-rupee-sign"></i> {product.price}
                  </strong>
                </h2>
                <div className={styles.rating}>
                  <h5>
                    <strong>{product.rating} </strong>{" "}
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </h5>
                </div>

                <div className={styles.specslist}>
                  <h3>Details:</h3>

                  <p>{product.description[1]}</p>
                </div>
                {!cartProduct && (
                  <Row>
                    <Col>
                      <div>
                        <h5>Quantity:</h5>
                        <button
                          style={{ float: "left" }}
                          className="bg-transparent btn-outline-light text-dark"
                          onClick={unAddedProductQuantityDecrementHandler}
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
                          {unAddedProductQuantity}
                        </h4>
                        <button
                          style={{ float: "left" }}
                          className="bg-transparent btn-outline-light text-dark"
                          onClick={unAddedProductQuantityIncrementHandler}
                        >
                          <i class="fas fa-plus-circle"></i>
                        </button>
                      </div>
                    </Col>
                  </Row>
                )}

                <Button
                  variant="outline-warning"
                  className="m-2"
                  size="lg"
                  onClick={() => {
                    const newProduct = {
                      _id: product._id,
                      name: product.name,
                      image: product.images[0],
                      description: product.description[0],
                      price: product.price,
                      quantity: unAddedProductQuantity
                        ? unAddedProductQuantity
                        : 1,
                    };

                    dispatch(addToCart(user_id, newProduct));
                    setUnaddedProductQuantity(1);
                    history.push("/cart");
                  }}
                >
                  <i className="fas fa-cart-plus"></i> {`${aboutCart}`}
                </Button>

                <Button
                  className="m-2"
                  variant="danger"
                  size="lg"
                  onClick={() => {
                    const newProduct = {
                      _id: product._id,
                      name: product.name,
                      image: product.images[0],
                      description: product.description[0],
                      price: product.price,
                      quantity: unAddedProductQuantity
                        ? unAddedProductQuantity
                        : 1,
                    };

                    dispatch(addToCart(user_id, newProduct));
                    history.push("/confirm");
                  }}
                >
                  <i className="fas fa-bolt"></i> Buy Now
                </Button>
              </Col>
            </Row>
            <Row className="justify-content-md-center mt-3">
              <Col md="9">
                <Table striped bordered hover className="my-5">
                  <tbody>{specificationList}</tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
