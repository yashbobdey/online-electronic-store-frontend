import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import MyCard from "../components/custom/MyCard";

export default function Products() {
  const history = useHistory();
  const [searchItem, setSearchItem] = useState("");

  const cardHandler = (id) => {
    history.push(`/product/${id}`); //pushing to product detail page
  };

  const { isLoading, products } = useSelector((state) => state.products); //getting all products from redux store
  let productList = [];
  //product search bar
  if (products) {
    productList = products
      .filter((product) => {
        if (searchItem === "") {
          return product;
        } else if (
          product.name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return product;
        }
        return null;
      })
      //mapping each product to MyCard component
      .map((product, index) => (
        <MyCard
          key={index}
          product={product}
          onClick={(e) => {
            e.preventDefault();
            console.log("going to product details");
            cardHandler(product._id);
          }}
        />
      ));
  }

  return (
    <div>
      <Container className="m-5">
        <Row className="justify-content-md-center">
          <Col md="9">
            <InputGroup className="mb-2 ">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="fas fa-search fa-1x"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroup"
                placeholder="Search..."
                onChange={(event) => {
                  setSearchItem(event.target.value);
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        {isLoading && <Spinner />}
        <Row>{!isLoading && productList}</Row> {/*displaying products */}
      </Container>
    </div>
  );
}
