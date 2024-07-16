import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Header />
      <div className="Layout404">
        <h1>404</h1>
        <p className="PageUnfound">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="PageReturn" onClick={() => handleNavigation("/")}>
          Retourner sur la page d'acceuil
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default NotFound;
