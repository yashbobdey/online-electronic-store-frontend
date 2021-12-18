import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import styles from "./Admin.module.css";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

const Navbarr = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };

  return (
    <>
      <div>
        <Navbar expand="lg" variant="dark" className={styles.nav}>
          <Navbar.Brand href="#home">
            <ShoppingCartRoundedIcon /> Electro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mt-2 mb-2">
              <Nav.Link as={Link} to="/admin/products">
                VIEW PRODUCTS
              </Nav.Link>
            </Nav>

            <Nav className="mt-2 mb-2">
              <Nav.Link as={Link} to="/admin/orders">
                VIEW ORDERS
              </Nav.Link>
            </Nav>
            <Nav className="mt-2 mb-2">
              <Nav.Link onClick={logoutHandler}>
                LOGOUT
                <ExitToAppIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Navbarr;
