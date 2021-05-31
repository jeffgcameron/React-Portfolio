import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logogrey.png";


function Nav() {
  return (
    <header>
      <nav>
        <Link 
        className="navbar-brand" 
        to="/">
          <img src={Logo} height="30px" alt="logo" />
        </Link>
        <span className="navbar-text">
          <ul className="nav">
            <li className="nav-item full">
              <Link 
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item full">
              <Link 
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item full">
              <Link 
               className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
               to="/contact">
                Contact Info
              </Link>
            </li>
            <li className="nav-item full">
              <Link
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
              to="/resume"
                target="_blank"
                href="./Assets/Resume/Jeff Cameron Resume.pdf"
                download
              >
                Resume
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="./AboutMe.html">
                  About Me
                </a>
                <a className="dropdown-item" href="./Porfolio.html">
                  Portfolio
                </a>
                <a className="dropdown-item" href="./Contact.html">
                  Contact Info
                </a>
                <a
                  target="_blank"
                  className="dropdown-item"
                  href="./Assets/Resume/Jeff Cameron Resume.pdf"
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </span>
      </nav>
    </header>
  );
}

export default Nav;