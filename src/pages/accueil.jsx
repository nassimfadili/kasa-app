import React from "react";
import { Link } from 'react-router-dom';
import Banner from "../components/banner";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import data from "../data.json";
import Image1 from "../images/Image source 1.png";

const Accueil = () => {
  return (
    <div>
      <Header />
      <Banner image={Image1} text="Chez vous, partout et ailleurs" />
      <div className="CardsContainer">
        <div className="Cards">
        {data.map(item => (
          <Link key={item.id} to={`/logement/${item.id}`}>
            <Card
              title={item.title}
              image={item.cover}
            />
          </Link>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accueil;

