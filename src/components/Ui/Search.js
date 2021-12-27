import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../actions/searchActions";

export default function Search() {
  //home page search bar
  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    e.preventDefault();
    const query = e.target.value;
    dispatch(searchProducts(query));
  };
  const searchHandler = (e) => {
    e.preventDefault();
    // dispatch(searchProducts(query))
    history.push("/products");
  };
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          onChange={onChangeHandler}
        />
        <Button
          variant="outline-light"
          className="mr-3"
          onClick={searchHandler}
        >
          <i className="fas fa-search"></i>
        </Button>
      </Form>
    </div>
  );
}
