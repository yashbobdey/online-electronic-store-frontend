import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../actions/userActions";
import { loggedin } from "../actions/userActions";
import { useHistory } from "react-router-dom";

import {
  Container,
  Form,
  Button,
  Row,
  // OverlayTrigger,
  // Tooltip,
} from "react-bootstrap";
export default function UpdateProfile() {
  const user = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  console.log("user (prodile update) :", user);
  const user_id = useSelector((state) => state.user.user._id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(); //react-hook-form
  watch("fname");
  watch("lname");
  watch("email");
  watch("password");
  watch("cpassword");
  watch("address");
  watch("city");
  watch("state");
  watch("zip");
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("user_id");
    const firstName = localStorage.getItem("user_lname");
    console.log(firstName);
    const lastName = localStorage.getItem("user_fname");
    console.log(lastName);
    const address = JSON.parse(localStorage.getItem("user_address")); //getting user data from local storage
    const user = {
      _id: userID,
      firstName,
      lastName,
      address,
    }; //creating user from obtained data
    if (token && user) {
      dispatch(loggedin(token, user));
    }
  }, [dispatch]);
  console.log(user.firstName);
  const submitHandler = (data) => {
    console.log("on submit data: ", data);
    const updatedUser = {
      firstName: data.fname,
      lastName: data.lname,
      // email: data.email,
      address: {
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
      },
    }; //creating updated user from data updated
    dispatch(update(user_id, updatedUser)); //dispatching update request
    //setting local storage data
    localStorage.setItem("user_address", JSON.stringify(updatedUser.address));
    localStorage.setItem("user_fname", updatedUser.firstName);
    localStorage.setItem("user_lname", updatedUser.lastName);
    alert("profile updated successfully");
    history.push("/"); //redirecting t0 home page
  };

  return (
    //form for updating user profile
    <Container>
      <h2>update Profile page</h2>
      <Row md="2" className="justify-content-md-center">
        {error && <h3 className="text-danger">{error}</h3>}
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Form.Group controlId="formGridFirstName">
            <Form.Label> First Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user.firstName}
              placeholder="Enter First Name"
              {...register("fname", {
                required: "first name is required",
                pattern: {
                  value: /^[aA-zZ\s]+$/,
                  message: "First Name should consist only alphabets",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.fname && errors.fname.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridLastName">
            <Form.Label> Last Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user.lastName}
              placeholder="Enter Last Name"
              {...register("lname", {
                required: "last name is required",
                pattern: {
                  value: /^[aA-zZ\s]+$/,
                  message: "Last Name should consist only alphabets",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.lname && errors.lname.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Address </Form.Label>
            <Form.Control
              type="text"
              defaultValue={user.address.address}
              placeholder="Enter Your Address"
              {...register("address", {
                required: "Address is required",
                minLength: { value: 5, message: "Minimum length is 5" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.address && errors.address.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user.address.city}
              placeholder="Enter City"
              {...register("city", {
                required: "city is required",
                pattern: {
                  value: /^[aA-zZ\s]+$/,
                  message: "City should consist only alphabets",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.city && errors.city.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridCity">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user.address.state}
              placeholder="Enter State"
              {...register("state", {
                required: "state is required",
                pattern: {
                  value: /^[aA-zZ\s]+$/,
                  message: "State should consist only alphabets",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.city && errors.state.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user.address.zip}
              placeholder="Enter Zip Code"
              {...register("zip", {
                required: "zip is required",
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

          <br></br>
          {/* <OverlayTrigger
          placement="top"
          overlay={<Tooltip id={`tooltip-$"top"`}>{toolTip}</Tooltip>}
        > */}
          <Button variant="primary" type="submit">
            Update Profile
          </Button>
          {/* </OverlayTrigger> */}
        </Form>
      </Row>
    </Container>
  );
}
