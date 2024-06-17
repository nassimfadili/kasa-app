import React from "react";
import Logo from "../logo/LOGO (1).png";
import "../style/footer.scss";

const Footer = () => {
    return ( <footer className="footerbar">
                <img src={Logo} alt="Logo"/>
                <p>2020 Kasa. All right reserved</p>
            </footer>
        
    );
};

export default Footer;