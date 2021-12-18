import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col, Toast } from "react-bootstrap";

// Validation
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../actions/userActions";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.user.loginError);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdmin = useSelector((state) => state.user.user.isAdmin);

  useEffect(() => {
    if (isAdmin) {
      isLoggedIn && history.replace("/admin/products");
    } else {
      isLoggedIn && history.replace("/");
    }
    loginError && setShow(true);
  }, [isLoggedIn, isAdmin, loginError, history]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  watch("email");
  watch("password");
  //------------------------------------------------ #1 ------------------
  const submitHandler = (data) => {
    console.log("on submit data: ", data);
    dispatch(login(data));
  };

  //---------------------- Error handling ----------------
  const [show, setShow] = useState(false);

  const changeShow = () => setShow(false);
  return (
    <Container className="my-5">
      <Row md="4" className="justify-content-md-center">
        {/* {loginError && <h1 className="text-danger">{loginError}</h1>} */}

        <Col xs="6">
          <Toast
            show={show}
            onClose={changeShow}
            className="mb-3 border-danger"
          >
            <Toast.Header className="bg-danger text-white justify-content-between">
              <strong className="me-auto">Login Error</strong>
            </Toast.Header>
            <Toast.Body>{loginError}</Toast.Body>
          </Toast>
        </Col>
      </Row>
      <Row md="4" className="justify-content-md-center">
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Not a vaild email",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email && errors.email.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "password is required",
                minLength: { value: 5, message: "Minimum length is 5" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.password && errors.password.message}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep me logged in" />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
      <Row className="justify-content-md-center">
        <p className="mt-5">
          Don't have an account?{" "}
          <Link to="register">Register for a new account</Link>
        </p>
      </Row>
    </Container>
  );
}
