import React from "react";
import Banner from "../components/banner";
import Collaps from "../components/collaps";
import Footer from "../components/footer";
import Header from "../components/header";
import Image1 from "../images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

const Apropos = () => {
    return <div>
    <Header/>
    <Banner image={Image1}/>
    <Collaps/>
    <Footer/>
    </div>
}

export default Apropos;