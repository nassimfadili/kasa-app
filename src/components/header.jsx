import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/logoKASA.png";
import "../style/App.scss";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header>
            <nav className="Navbar">
                <img src={Logo} alt="logo" />
                <ul>
                    <li onClick={() => handleNavigation("/")}>
                        Accueil
                    </li>
                    <li onClick={() => handleNavigation("/a-propos")}>
                        A Propos
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
