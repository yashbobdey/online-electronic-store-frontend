import React from "react";
import { useHistory } from "react-router-dom";
export default function OrderItem(props) {
  const history = useHistory();

  return (
    <div>
      <div className="card mb-3 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.image}
              style={{ objectFit: "contain" }}
              className="img-fluid rounded-start "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                <b>Order Id</b>: {props.id}
              </p>
              <p className="card-text">
                <b>Price</b>: {props.price}
              </p>
              <p className="card-text">
                <b>Quantity</b>: {props.quantity}
              </p>
              <p className="card-text">
                <b>Order Date</b>: {props.date}
              </p>

              <button
                type="button"
                class="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();

                  history.push(`/product/${props.productId}`);
                }}
              >
                Buy Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
