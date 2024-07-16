import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../logo/logoKASA.png";
import "../style/App.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header>
      <nav className="Navbar">
        <img src={Logo} alt="logo" />
        <ul>
          <li
            onClick={() => handleNavigation("/")}
            className={location.pathname === "/" ? "active" : ""}
          >
            Accueil
          </li>
          <li
            onClick={() => handleNavigation("/a-propos")}
            className={location.pathname === "/a-propos" ? "active" : ""}
          >
            A Propos
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
