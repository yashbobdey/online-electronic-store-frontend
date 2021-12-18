import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Row, OverlayTrigger,Tooltip } from "react-bootstrap";
import { update } from "../actions/userActions";
import { loggedin } from "../actions/userActions";
import MyModal from "../components/custom/MyModal"
const Profile = () => {
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);
  console.log("user (prodile update) :", user);
  const user_id = useSelector((state) => state.user.user._id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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

  // Modal
  const [toolTip, setToolTip] = useState("Update User");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    
   }
  const toolTipHandler = e => {
    e.preventDefault();
    setToolTip("Updated");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("user_id");
    const firstName = localStorage.getItem("user_lname");
    const lastName = localStorage.getItem("user_fname");
    const address = JSON.parse(localStorage.getItem("user_address"));
    const user = {
      _id: userID,
      firstName,
      lastName,
      address,
    };
    if (token && user) {
      dispatch(loggedin(token, user));
     
    }
    toolTip === "Updated" && setShow(true);
    setToolTip("Update User")
  }, [dispatch, toolTip]);

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
    };
    dispatch(update(user_id, updatedUser));
  };

  

  
  return (
    <div>
      <MyModal
      show={show}
        variant="success"
        title="User Details Updated Successfully!"
        message={`Your user details have been successfully updated.`}
        handleClose={handleClose}
      />
      <Container>

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
            <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-$"top"`}>{toolTip}</Tooltip>}
                >
            <Button variant="primary" type="submit" onClick={toolTipHandler}>
              Update Profile
            </Button>
            </OverlayTrigger>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
