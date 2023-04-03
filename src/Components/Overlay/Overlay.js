import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import img1 from "../../assests/images/about-us.png";
import img2 from "../../assests/images/branding.png";
import img3 from "../../assests/images/hero-img-1.png";

const ImagesWithContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img1, img2, img3];

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <div style={{ position: "relative" }}>
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                style={{
                  position: "absolute",
                  opacity: index === activeIndex ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                  width: "100%",
                }}
              />
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Button variant="primary" onClick={handlePrevClick}>
                Prev
              </Button>
              <Button variant="primary" onClick={handleNextClick}>
                Next
              </Button>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div style={{ marginLeft: 50 }}>
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida, est vel pellentesque sodales, nibh sapien tristique
              dolor, id mollis elit tortor at elit. Aliquam vitae justo a elit
              laoreet ultrices in quis turpis.
            </p>
            <Button variant="primary">Learn More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImagesWithContent;
