import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import OrderItem from "../components/custom/OrderItem";
import { getOrders } from "../actions/ordersActions";

function OrderHistory() {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user.user._id);

  let ordersList = [];
  useEffect(() => {
    dispatch(getOrders(user_id)); //dispatching request for getting orders
  }, [user_id, dispatch]);

  const orders = useSelector((state) => state.order.orders);
  if (orders.length > 0) {
    {
      /* mapping orders into orderItem component....latest first */
    }
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

  return (
    <>
      <h4 className="text-center">Order Details</h4>
      <Container>
        {orders && (
          <Row className="justify-content-md-center">{ordersList}</Row> //displaying orders
        )}
      </Container>
    </>
  );
}
export default OrderHistory;
