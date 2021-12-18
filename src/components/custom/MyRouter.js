import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../Ui/Header";
import AdminHeader from "../Ui/AdminHeader";
import Footer from "../Ui/Footer";
import AdminFooter from "../Ui/AdminFooter";
import MySwitch from "./MySwitch";

import { useDispatch, useSelector } from "react-redux";
import { loggedin } from "../../actions/userActions";

export default function MyRouter() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  let isAdmin = false;
  if (user) {
    isAdmin = user.isAdmin;
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    const firstName = localStorage.getItem("user_lname");
    const lastName = localStorage.getItem("user_fname");
    const address = JSON.parse(localStorage.getItem("user_address"));
    const isAdmin = localStorage.getItem("user_isAdmin") === "true";
    const user = {
      _id: user_id,
      firstName,
      lastName,
      address,
      isAdmin,
    };
    if (token && user) {
      dispatch(loggedin(token, user));
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        {isAdmin && <AdminHeader />}
        {!isAdmin && <Header />}

        <MySwitch />

        {isAdmin && <AdminFooter />}
        {!isAdmin && <Footer />}
      </Router>
    </>
  );
}
