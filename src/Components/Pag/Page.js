import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Page.css";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";

const PagesComponent = () => {
  return (
    <div className="pages-container">
      <Container fluid>
    <h2 className="text-center mb-5">Page Heading</h2>
        <Row>
          <Col xs={12} md={6}>
            <div className="image-container">
              <img src={courseImg1} alt="Image 1" />
              <img src={courseImg2} alt="Image 2" />
              <img src={courseImg3} alt="Image 3" />
              <img src={courseImg1} alt="Image 4" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="content-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur commodo ex vitae maximus. Donec fermentum, sem eu
                dapibus commodo, nibh lectus laoreet massa, id fermentum nulla
                arcu non quam. Morbi in sem euismod, posuere velit eu, commodo
                elit. Nam vehicula quam ligula, vel convallis metus accumsan id.
                Duis dignissim congue nibh, vel euismod tellus gravida vitae. In
                hac habitasse platea dictumst. Ut lacinia, magna vel dignissim
                commodo, tellus urna vehicula augue, eu dignissim nisi velit
                eget lectus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PagesComponent;
