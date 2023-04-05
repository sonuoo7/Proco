import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Feature.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Lorem ipsum dolor sit amet",
    icon: "ri-draft-line",
  },
  {
    title: "All Time Support",
    desc: "Lorem ipsum dolor sit amet,dicta amet itaque!",
    icon: "ri-discuss-line",
  },
  {
    title: "Certification",
    desc: "Lorem ipsum dolor sit amet,  praesentium eos iste dicta amet itaque!",
    icon: "ri-contacts-book-line",
  },
  {
    title: "Certification",
    desc: "Lorem ipsum dolor sit amet,  doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="7">
            <div className="d-flex flex-wrap">
              {FeatureData.map((item, index) => (
                <div
                  className="single__feature text-center py-4 px-3"
                  key={index}
                >
                  <h2 className="mb-3">
                    <i className={item.icon}></i>
                  </h2>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col lg="5">
            <div className="px-3">
              <h2>Heading</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dolorum inventore incidunt reprehenderit consequuntur illum
                veritatis dolorem, ex sapiente distinctio explicabo soluta
                consequatur? Dignissimos, pariatur!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
