import React, { useRef, useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logout, passwordUpdate } from "../actions/userActions";
import MyModal from "../components/custom/MyModal"
import { useForm } from "react-hook-form";

export default function UpdatePassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  // Modal
  const [toolTip, setToolTip] = useState("Update User");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    dispatch(logout());
    history.push("/login")
    
   }
  const toolTipHandler = e => {
    e.preventDefault();
    setToolTip("Updated");
  }
  useEffect(()=>{
    toolTip === "Updated" && setShow(true);
    setToolTip("Update User")
  },[dispatch, toolTip])
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  const password = useRef({});
  password.current = watch("password", "");

  watch("opassword");
  watch("cpassword");

const user_id = useSelector(state => state.user.user._id);
  const submitHandler = (data) => {
    console.log("errors", errors);
    const password = data.password;
    console.log("password", password);
    dispatch(passwordUpdate(user_id, password));
  };
  return (
    <Container>
      <MyModal
      show={show}
        variant="success"
        title="Password Changed Successfully!"
        message={`Your password has been successfully changed.`}
        handleClose={handleClose}
      />
            
      <Row md="6" className="justify-content-md-center mt-5">
        <Col md="6">
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Old Password"
                {...register("opassword", {
                  required: "password is required",
                  minLength: { value: 5, message: "Minimum length is 5" },
                })}
              />
              <Form.Text className="text-danger">
                {errors.opassword && errors.opassword.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                {...register("password", {
                  required: "password is required",
                  minLength: { value: 5, message: "Minimum length is 5" },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password && errors.password.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Confirm New Password"
                {...register("cpassword", {
                  required: "password is required",
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              <Form.Text className="text-danger">
                {errors.cpassword && errors.cpassword.message}
              </Form.Text>
            </Form.Group>

            <Button variant="warning" size="lg" block type="submit" onClick={toolTipHandler}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
