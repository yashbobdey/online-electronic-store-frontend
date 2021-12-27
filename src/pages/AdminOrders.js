import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions/adminActions";
const AdminOrders = (props) => {
  useEffect(() => {
    props.onFetch();
  }, [props]);

  let ordersList = []; //initialising empty orderList
  if (props.orders) {
    ordersList = props.orders.map((order, i) =>
      order.items.map((item) => {
        // mapping each order into table data
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{order._id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{order.totalPrice}</td>
            <td>{order.createdAt}</td>
          </tr>
        );
      })
    );
  }

  return (
    //organizing complete data into table
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Sr. No.</th>
            <th> Oreder Id</th>
            <th>Item Name</th>
            <th>Quantity </th>
            <th>Item price</th>
            <th>Total Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{ordersList}</tbody>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => {
  //mapping state to props
  console.log("Inside Component ", state);
  return {
    orders: state.admin.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  //mapping dispatch to props
  return {
    //  onDelete:(id)=>dispatch(actions.deleteOne({id})),
    onFetch: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);
