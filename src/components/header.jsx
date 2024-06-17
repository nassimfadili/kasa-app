import React from "react";
import Logo from "../logo/logoKASA.png";
import "../style/header.scss";

const Header = () => {
    return (
        <header>
                <nav className="Navbar">
                    <img src={Logo} alt="logo" />
                    <li>
                        <ul>
                            Accueil
                        </ul>
                        <ul>
                            A Propos
                        </ul>
                    </li>
                </nav>
        </header>
    );
};

export default Header;