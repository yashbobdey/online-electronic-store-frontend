import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import styles from "./Footer.module.css";
import * as constants from "../../constants/Footer";
const FooterPg = () => {
  return (
    <footer className="footer mt-auto ">
      <Container fluid className={styles.footer}>
        <Row>
          <Col md={2} className={styles.col_company}>
            <h6>{constants.FOOTER_COMPANY}</h6>
            <ul>
              <li>
                {constants.FOOTER_COMPANY_OUR_STORY}{" "}
                <i class="fas fa-book-open"></i>
              </li>
              <li>
                {constants.FOOTER_COMPANY_CAREERS} <i class="fas fa-road"></i>
              </li>
              <li>
                {constants.FOOTER_COMPANY_PRESS}{" "}
                <i class="far fa-newspaper"></i>
              </li>
              <li>
                {constants.FOOTER_COMPANY_CONTACT}{" "}
                <i class="far fa-address-book"></i>
              </li>
            </ul>
          </Col>
          <Col md={2} className={styles.col_help}>
            <h6>{constants.FOOTER_HELP}</h6>
            <ul>
              <li>
                {constants.FOOTER_HELP_SHIPPING}{" "}
                <i class="fas fa-shipping-fast"></i>
              </li>
              <li>
                {constants.FOOTER_HELP_RETURNS} <i class="fas fa-undo"></i>
              </li>
              <li>
                {constants.FOOTER_HELP_PAYMENT}{" "}
                <i class="fas fa-money-bill"></i>
              </li>
              <li>
                {constants.FOOTER_HELP_FAQ} <i class="fas fa-question"></i>
              </li>
            </ul>
          </Col>
          <Col md={4} className={styles.col_newsletter}>
            <h5>{constants.FOOTER_SUBSCRIBE}</h5>
            <InputGroup>
              <FormControl
                className={styles.email}
                placeholder="Your email"
                aria-label="Your email"
                aria-describedby="basic-addon2"
              />
              <Button
                className={styles.btn_subscribe}
                variant="dark"
                id="button-addon2"
              >
                Subscribe
              </Button>
            </InputGroup>
            <div className={styles.socialicons}>
              <ul>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-$"top"`}>
                      Connect with us on Facebook
                    </Tooltip>
                  }
                >
                  <li>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary px-2 py-1 m-2"
                      >
                        <i className="fa fa-facebook-official fa-2x"></i>
                      </button>
                    </div>
                  </li>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-$"top"`}>
                      Share your Experience on Instagram
                    </Tooltip>
                  }
                >
                  <li>
                    <div>
                      <button
                        type="button"
                        className="btn btn-warning  px-2 py-1 m-2"
                      >
                        <i className="fa fa-instagram fa-2x"></i>
                      </button>
                    </div>
                  </li>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-$"top"`}>
                      Tweet about us on Twitter
                    </Tooltip>
                  }
                >
                  <li>
                    <div>
                      <button
                        type="button"
                        className="btn btn-info px-2 py-1 m-2"
                      >
                        <i className="fa fa-twitter-square fa-2x"></i>
                      </button>
                    </div>
                  </li>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-$"top"`}>
                      Explore more on Pinterest
                    </Tooltip>
                  }
                >
                  <li>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger px-2 py-1 m-2"
                      >
                        <i className="fa fa-pinterest-square fa-2x"></i>
                      </button>
                    </div>
                  </li>
                </OverlayTrigger>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <h5>{constants.FOOTER_REGION}</h5>
            <div className={styles.dropdown_region}>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="dark"
                >
                  Region
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    {constants.FOOTER_REGION_COUNTRY_1}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {constants.FOOTER_REGION_COUNTRY_2}
                  </Dropdown.Item>

                  <Dropdown.Item href="#/action-3">
                    {constants.FOOTER_REGION_COUNTRY_3}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className={styles.dropdown_currency}>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="dark"
                >
                  Currency
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    {constants.FOOTER_REGION_CURRENCY_1}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {constants.FOOTER_REGION_CURRENCY_2}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {constants.FOOTER_REGION_CURRENCY_3}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className={styles.cardimg}>
              <ul>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-$"top"`}>Visa</Tooltip>}
                >
                  <li className={styles.card1}>
                    <img src={constants.FOOTER_ICON_VISA} alt="" />
                  </li>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-$"top"`}>Master card</Tooltip>}
                >
                  <li>
                    <img src={constants.FOOTER_ICON_MASTERCARD} alt="" />
                  </li>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-$"top"`}>Amex</Tooltip>}
                >
                  <li>
                    <img src={constants.FOOTER_ICON_AMEX} alt="" />
                  </li>
                </OverlayTrigger>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className={styles.footer_copyright}>
          <p>&copy; {new Date().getFullYear()} Copyright: ElectroStore.com </p>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterPg;
