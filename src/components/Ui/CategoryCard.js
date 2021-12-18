import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CategoryCard({ category, onClick }) {
  return (
    <Card style={{ width: "30rem" }} className="border border-info mx-3 my-3 ">
      <Card.Header className="bg-dark text-white "> </Card.Header>
      <Card.Img
        variant="top"
        src={category.image}
        style={{ height: "20rem" }}
        className="img-fluid"
      />
      <Card.Body className="bg-dark text-white">
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>{category.description}</Card.Text>
        <Button variant="warning" className="mx-auto" onClick={onClick}>
          Shop Now
        </Button>
      </Card.Body>
      <Card.Footer className="bg-primary" text="white"></Card.Footer>
    </Card>
  );
}
