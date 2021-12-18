import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import OrderItem from "../components/custom/OrderItem";
import { getOrders } from "../actions/ordersActions";

function OrderHistory() {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user.user._id);
  // const history = useHistory();
  // log out user if token is invalid
  // const { error } = useSelector((state) => state.order);
  // useEffect(() => {
  //   if (error === "Token Invalid!!") history.push("/login");
  // }, [error, history]);

  let ordersList = [];
  useEffect(() => {
    dispatch(getOrders(user_id));
  }, [user_id, dispatch]);

  const orders = useSelector((state) => state.order.orders);
  if (orders.length > 0) {
    ordersList = orders.reverse().map((order) =>
      order.items.map((item) => {
        return (
          <Col md={9}>
            <OrderItem
              image={item.image}
              name={item.name}
              id={order._id}
              price={item.price}
              quantity={item.quantity}
              date={order.createdAt}
              productId={item._id}
            />
          </Col>
        );
      })
    );
  }
  // if (products) {
  //   var orderList = products.map((info, i) => {
  //     return (
  //       <Col md={9}>
  //         <OrderItem
  //           image={info.image}
  //           title={info.title}
  //           id={info.id}
  //           price={info.price}
  //           ratings={info.ratings}
  //           date={info.date}
  //         />
  //       </Col>
  //     );
  //   });
  // }
  return (
    <>
      <h4 className="text-center">Order Details</h4>
      <Container>
        {orders && (
          <Row className="justify-content-md-center">{ordersList}</Row>
        )}
      </Container>
    </>
  );
}
export default OrderHistory;
