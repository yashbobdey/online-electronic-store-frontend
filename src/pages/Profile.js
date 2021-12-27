import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Row } from "react-bootstrap";

import { useHistory } from "react-router-dom";

import { loggedin } from "../actions/userActions";

const Profile = () => {
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);
  console.log("user (prodile update) :", user);
  const user_id = useSelector((state) => state.user.user._id);
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    //getting data from localstorage
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("user_id");
    const firstName = localStorage.getItem("user_fname");
    const lastName = localStorage.getItem("user_lname");
    const address = JSON.parse(localStorage.getItem("user_address"));
    const user = {
      _id: userID, //creating user from data collected
      firstName,
      lastName,
      address,
    };
    if (token && user) {
      dispatch(loggedin(token, user));
    }
  }, [dispatch]);

  const submitHandler = () => {
    history.push(`/UpdateProfile/${user_id}`); //redirecting to update profile page
  };

  return (
    //displaying user profile
    <div>
      <Container>
        <Row md="2" className="justify-content-md-center">
          {error && <h3 className="text-danger">{error}</h3>}
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Form.Group controlId="formGridFirstName">
              <Form.Label> First Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.firstName}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formGridLastName">
              <Form.Label> Last Name</Form.Label>
              <Form.Control type="text" defaultValue={user.lastName} disabled />
            </Form.Group>

            <Form.Group controlId="formGridAddress">
              <Form.Label>Address </Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.address.address}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.address.city}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formGridCity">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.address.state}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.address.zip}
                disabled
              />
            </Form.Group>

            <br></br>

            <Button variant="primary" type="submit">
              Edit Profile
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
