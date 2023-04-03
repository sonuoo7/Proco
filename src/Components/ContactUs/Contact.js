import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setShowSuccess(true);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <div className="contact-form">
            <h3>Contact Us</h3>
            {!showSuccess ? (
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a message.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            ) : (
              <div className="success-message">
                <h4>Thank you for contacting us!</h4>
                <p>We'll get back to you as soon as possible.</p>
                <Button variant="primary" onClick={handleGoHome}>
                  Go back to homepage
                </Button>
              </div>
            )}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="map">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.0789214427684!2d-97.74308658490978!3d30.267158181815895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2
              !1s0x0%3A0x944f7a619e85be31!"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
