import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./AboutUs.css";
import Courses from "../Courses/Courses";
import AskCard from "../FAQ/AskCard";
import Testimonal from "../Testimonal/Testimonal";
import Page from "../Pag/Page";
import AboutHeader from './AboutHeader'

const AboutUs = () => {
  return (
    <>
      <section>
        <Container className="mb-2">
          <AboutHeader />
          <Page />
          <Row>
          <h2 className="aboutUs">
            Your wellness builds upon the agency daily.
          </h2>
            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__content">
                <p>
                  Proco is Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Excepturi cupiditate animi deserunt libero nesciunt
                  corporis explicabo nobis ex quo molestiae!
                </p>

                <div className="about__counter">
                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={25} duration={3} suffix="K" />
                      </span>

                      <p className="counter__title">Completed Projects</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={12} duration={3} suffix="M" />
                      </span>

                      <p className="counter__title">Patient Around World</p>
                    </div>
                  </div>

                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={95} duration={3} suffix="M" />
                      </span>

                      <p className="counter__title">Ideas Raised Funds</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={5} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Categories Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Testimonal />
      <Courses />
      <AskCard />
    </>
  );
};

export default AboutUs;
