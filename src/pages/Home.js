import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ProductCarousel from "../components/Ui/ProductCarousel";
import CategoryCard from "../components/Ui/CategoryCard";

import { categories } from "../constants/Home";
import { getProductsByCategory } from "../actions/productActions";

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickHandler = (category) => {
    dispatch(getProductsByCategory(category));
    history.push("/products");
  };

  const isLoading = useSelector((state) => state.user.isLoading);

  const categoryList = categories.map((category, index) => {
    return (
      <CategoryCard
        key={index}
        category={category}
        onClick={() => onClickHandler(category.category)}
      />
    );
  });

  return (
    <div>
      {isLoading && <Spinner animation="border" variant="primary" />}
      <Container>
        <Row className="justify-content-md-center">
          <ProductCarousel />
        </Row>
        <Row className="justify-content-md-center">{categoryList}</Row>
      </Container>
    </div>
  );
}
