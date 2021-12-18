import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register as registerUser } from "../actions/userActions";
import { emptyErrors } from "../actions/userActions";

export default function Registration() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(emptyErrors());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  watch("fname");
  watch("lname");
  watch("email");
  // watch("password");
  watch("confirm_password");
  watch("address");
  watch("city");
  watch("state");
  watch("zip");

  const error = useSelector((state) => state.user.error);
  // const error = "This is an error";

  const submitHandler = (data) => {
    const user = {
      firstName: data.fname,
      lastName: data.lname,
      email: data.email,
      password: data.password,
      address: {
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
      },
    };
    console.log("on submit data: ", user);
    dispatch(registerUser(user));
    history.replace("/login");
  };

  return (
    <Container>
      {error && <h2 className="text-danger text-center border">{error}</h2>}
      <Row className="justify-content-md-center" md="8">
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                {...register("fname", {
                  required: "name is required",
                  pattern: {
                    value: /^[aA-zZ\s]+$/,
                    message: "Not a vaild name",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.fname && errors.fname.message}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                {...register("lname", {
                  required: "name is required",
                  pattern: {
                    value: /^[aA-zZ\s]+$/,
                    message: "Not a vaild name",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.lname && errors.lname.message}
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                  // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Not a vaild email",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email && errors.email.message}
            </Form.Text>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
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

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Confirm Password"
                {...register("confirm_password", {
                  required: "password is required",
                  validate: (value) =>
                    value === password.current || "Passowrd does not match",
                })}
              />
              <Form.Text className="text-danger">
                {errors.confirm_password && errors.confirm_password.message}
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              {...register("address", {
                required: "address is required",
                // pattern: {
                //   value: /^[a-z\d\-_\s]+$/i,
                //   message: "Enter valid address",
                // },
              })}
            />
            <Form.Text className="text-danger">
              {errors.address && errors.address.message}
            </Form.Text>
          </Form.Group>

          {/* <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group> */}

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                {...register("city", {
                  required: "city is required",
                  pattern: {
                    value: /^[aA-zZ\s]+$/,
                    message: "only alphabets allowed",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.city && errors.city.message}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                {...register("state", {
                  required: "state is required",
                  pattern: {
                    value: /^[aA-zZ\s]+$/,
                    message: "only alphabets allowed",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.state && errors.state.message}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="123456"
                {...register("zip", {
                  required: "zip code is required",
                  // minLength: { value: 6, message: "Minimum length is 6" },
                  pattern: {
                    value: /^[0-9\b]+$/,
                    message: "Zip code should consist only numbers",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.zip && errors.zip.message}
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Button variant="warning" size="lg" block type="submit">
            Register
          </Button>

          <p className="text-center alreadyRegister mt-3">
            Already registered? <Link to="login">Log in.</Link>
          </p>
        </Form>
      </Row>
    </Container>
  );
}
