import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function MyModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        {props.variant === "error" && (
          <Button variant="secondary" onClick={props.handleClose}>
            I will do it later ...
          </Button>
        )}

        {props.variant === "error" && (
          <Button variant="primary" onClick={props.handleLogin}>
            Login Now
          </Button> //login now modal
        )}

        {props.variant === "success" && (
          <Button variant="primary" onClick={props.handleClose}>
            Okay
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

//props => 1. variant (success/error)
//2. handleCLose (setShow = false)
// 3. handleLogin (history.push("/login"))
// 4. title
// 5. message
