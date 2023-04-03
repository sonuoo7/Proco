import React from "react";
import backgroundImage from "../../assests/images/hero-img-1.png";
import { Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% auto",
        height: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container>
        <h1 className="text-center">Big Brands Made.</h1>
        <p className="text-center">
          We design digital platforms that elevate the customer experience for
          the world's most beloved brands.
        </p>
      </Container>
    </header>
  );
};

export default Header;
