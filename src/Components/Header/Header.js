import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import procologo from "../../assests/images/procologo.jpg";

const navLinks = [
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

const Header = () => {
  const menuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== isScrolled) {
        setIsScrolled(isTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header ${isScrolled ? "scroll" : ""}`}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/" className=" d-flex align-items-center gap-1">
              <img className="logo" src={procologo} alt="" />
            </Link>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item,index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url} onClick={scrollToTop}>
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +(91) 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
