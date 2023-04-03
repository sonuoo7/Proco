import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";


import "./Footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },

  {
    display: "About",
    url: "/about",
  },
  {
    display: "Blog",
    url: "/blog",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "/privacy",
  },
  {
    display: "Membership",
    url: "/membership",
  },

  {
    display: "Purchases Guide",
    to: "/purchases",
  },

  {
    display: "Terms of Service",
    url: "/terms&conditions",
  },
];

const Footer = () => {
  return (
    <footer className="footer mb-1">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-fill"></i> Proco.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                <Link to="facebook.com">
                  <i className="ri-facebook-fill"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="facebook.com">
                  <i className="ri-instagram-fill"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="https://www.linkedin.com/in/subhash-chandra-pant-1aa08b15b/">
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </span>

              <span>
                <Link to="facebook.com">
                  <i className="ri-twitter-fill"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <Link
                    to={item.url}
                    onClick={() => animateScroll.scrollToTop(100)}
                  >
                    {item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Terms & Conditions</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: New-Delhi, India</p>
            <p> Phone: +(91) 0123456789 </p>
            <p>Email: example@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <p className="text-center mt-5">Copyright © 2023, ProCo.</p>
    </footer>
  );
};

export default Footer;
