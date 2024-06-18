import React from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import data from "../data.json";
import Image1 from "../images/Image source 1.png";

const Acceuil = () => {
    return (<div>
            <body>
                <div>
                    <Header />
                    <Banner image={Image1} text="Chez vous, partout et ailleurs" />
                    <div className="CardsContainer">
                        {data.map(item => (
                            <Card
                                key={item.id}
                                title={item.title}
                                image={item.cover}
                            />
                        ))}
                    </div>
                </div>
            </body>
        <Footer/>
        </div>    
    );
}

export default Acceuil;