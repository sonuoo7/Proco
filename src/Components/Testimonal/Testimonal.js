import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import "./Testimonal.css";
import img1 from "../../assests/images/ui-ux.png";
import img2 from "../../assests/images/seo.png";
import img3 from "../../assests/images/branding.png";

const Testimonial = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const contentSettings = {
    infinite: true,
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setContentIndex(next);
      setImageIndex(next);
    },
  };

  const imageSettings = {
    infinite: true,
    dots: false,
    speed: 1500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setContentIndex(next);
      setImageIndex(next);
    },
  };

  const images = [img1, img2, img3];

  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <h2 className="mb-4 aboutUs">Our Clients Voice</h2>
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center">
              <div className="testimonial__content order-2 order-md-1 w-50">
                <Slider {...contentSettings}>
                  <div>
                    <div className="single__testimonial">
                      <h5 className="mb-3 fw-bold">Excellent</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <small>Delhi, India</small>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h5 className="mb-3 fw-bold">Excellent materials</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <small>California, United State</small>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h5 className="mb-3 fw-bold">Excellent Mentors</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jane Doe</h6>
                        <small>Texas, United States</small>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="testimonial__image order-1 order-md-2 w-50">
                <Slider {...imageSettings}>
                  {images.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`testimonial-${index}`} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
