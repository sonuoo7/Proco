import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Tilt} from "react-tilt";
import heroImg1 from "../../assests/images/hero-img-1.png";
import ChooseUs from "../ChooseUs/ChooseUs";
import Features from "../FeatureSection/Feature";
import "./Hero.css";

const Hero = () => {
  return (
    <section>
      <Container className="mb-5">
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h1 className=" mt-4 mb-4 hero__title">
                Build it Beautiful. <br /> & Unparalleled.
              </h1>
              <p className="mb-4">
                Webify is the all-in-one WordPress theme to build a beautiful
                online presence for you. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Fuga, eaque!
              </p>
            </div>
            <div className="search">
              <Link to="https://rzp.io/l/RDAWJuIu">
                <button className="btn">Book OneVOne</button>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Tilt className="Tilt" options={{ max: 25 }}>
              <div className="Tilt-inner">
                <img src={heroImg1} alt="" className="mt-5 w-100 hero__img" />
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Features />
      <ChooseUs />
    </section>
  );
};

export default Hero;
