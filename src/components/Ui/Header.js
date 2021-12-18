import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { logout } from "../../actions/userActions";
import { emptyCartLogout } from "../../actions/cartActions";
import Search from "./Search";
import { getProductsByCategory } from "../../actions/productActions";


function NavigationBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);

  const { cartLength } = useSelector((state) => state.cart);

  const loginHandler = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(emptyCartLogout());
    history.push("/login");
  };

  const cartHandler = (e) => {
    e.preventDefault();
    history.push("/cart");
  };

  const onClickHandler = (category) => {
    dispatch(getProductsByCategory(category));
    history.push("/products");
  };

  return (
    <div>
      <Navbar className={styles.navbar} expand="lg">
        <Navbar.Brand as={Link} to="/">
          <div className={styles.site_icon}>
            <i className="fas fa-shopping-bag"></i>

            <strong className={styles.logo}>Electro</strong>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-white"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="text-white">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>

            <NavDropdown
                
              title={<span className="text-white my-auto">Products</span>}
              id="basic-nav-dropdown"
              className={styles.nav_color_white}>

              <NavDropdown.Item   
              onClick={()=>{onClickHandler("Mobile")
              history.push("/products")
               }}>
                Mobile
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>{onClickHandler("Tablet")
              history.push("/products")
               }}>
                Tablet
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>{onClickHandler("Headphones")
              history.push("/products")
               }}>
                Headphone
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>{onClickHandler("Laptop")
              history.push("/products")
               }}>
                Laptop
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about" className="text-light">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact Us
            </Nav.Link>
          </Nav>
          <Search />

          <Nav className="mr-sm-2">
            {/* <Nav className="my-auto"> */}
            {isLoggedIn && (
              <Dropdown>
                <Dropdown.Toggle
                  className="mx-2 border-0"
                  variant="outline-grey"
                  size="sm"
                  id="basic-nav-dropdown"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkJCZAdC8LXWluGqUg1zStm5JXhnkKgUwvw&usqp=CAU"
                    alt="mdo"
                    width="35"
                    height="35"
                    className="rounded-circle"
                  ></img>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">
                    User Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/orders">
                    Orders
                  </Dropdown.Item>

                  <Dropdown.Item as={Link} to="/password">
                    Change Password
                  </Dropdown.Item>

                  <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
            {!isLoggedIn && (
              <Button
                onClick={loginHandler}
                variant="warning"
                className="text-light mx-2 my-1"
                // size="lg"
              >
                Login
              </Button>
            )}

            <Button
              onClick={cartHandler}
              variant="info"
              // size="lg"
              className="my-1"
            >
              <i className="fas fa-cart-arrow-down"></i>
              <Badge bg="dark">{cartLength}</Badge>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <br /> */}
    </div>
    // </Container>
  );
}

export default NavigationBar;
