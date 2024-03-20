import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/brand.png";

function Navbar() {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav class={`navbar ${scrolling ? "scrolled" : ""} navbar-expand-lg`}>
      <div class="container-fluid">
        <div id="logo">
          <img src={Logo} />
        </div>
        <button
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className={`toggle-button ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span id="middleSpan"></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              onClick={() => {
                navigate("/");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                HOME
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/about");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                ABOUT
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/products");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                PRODUCTS
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                CONTACT
              </a>
            </li>
          </ul>

          <div id="navIcons">
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-whatsapp"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
