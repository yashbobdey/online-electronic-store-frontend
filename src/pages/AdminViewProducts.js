import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../components/Ui/Admin.module.css";
import Footer from "../components/Ui/Footer";
import * as actions from "../actions/adminActions";

function ViewProducts(props) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.onFetch();
  }, []);
  //   const [info, setInfo] = useState([]);

  // useEffect(() => {

  //    fetch('http://localhost:3000/laptopss')
  //        .then(res=>res.json())
  //        .then(data=>{
  //          console.log(data);
  //          setInfo(data);
  //        })
  //  }, []);

  let productList = [];
  if (props.products) {
    productList = props.products
      .filter((product) => {
        if (search === "") {
          return product;
        } else if (
          product.category.toLowerCase().includes(search.toLowerCase())
        ) {
          return product;
        } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
          return product;
        }
      })
      .map((product, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.rating}</td>
            <td>{product.description[0]}</td>

            <td className={styles.action}>
              <DeleteForeverIcon
                className={styles.delete}
                onClick={() => props.onDelete(product._id)}
              />
              <Link to={`/admin/update/${product._id}`}>
                <EditRoundedIcon className={styles.edit} />
              </Link>
            </td>
          </tr>
        );
      });
  }
  return (
    <>
      <div className={styles.height}>
        <div className="input-group mb-3 mt-3">
          <span className="input-group-text" id="basic-addon1">
            Search...
          </span>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className="form-control"
            placeholder="Search Here..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Description</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{productList}</tbody>
        </Table>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log("Inside Component ", state);
  return {
    products: state.admin.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(actions.deleteOne({ id })),
    onFetch: () => dispatch(actions.fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);
