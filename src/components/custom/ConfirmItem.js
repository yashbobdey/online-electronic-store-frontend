import React from "react";

export default function ConfirmItem(props) {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.image}
              className="img-fluid rounded-start"
              alt="..."
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <h6 className="card-text">Quantity:{props.quantity}</h6>
              <h6 className="card-text">Price: Rs {props.price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
