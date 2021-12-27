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
    history.push("/products"); //redirecting to particular category of products
  };

  const isLoading = useSelector((state) => state.user.isLoading);

  const categoryList = categories.map((category, index) => {
    //mapping the catogories into category card
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
          <ProductCarousel /> {/* displaying the carousel */}
        </Row>
        <Row className="justify-content-md-center">{categoryList}</Row>{" "}
        {/* displaying the category wise cards */}
      </Container>
    </div>
  );
}
