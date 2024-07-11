import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import Collaps from "../components/collaps";
import Footer from "../components/footer";
import Header from "../components/header";
import Appart from "../components/logement";
import Slideshow from "../components/slideshow";
import data from "../data.json";

const Logement = () => {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  if (!logement) {
    return <Navigate to="./404.jsx" />
  }

  return (
    <div>
      <Header />
      <div className="Logement">
        <Slideshow pictures={logement.pictures} />
        <Appart
          title={logement.title}
          name={logement.host.name}
          picture={logement.host.picture}
          location={logement.location}
          tag={logement.tags}
          rating={logement.rating}
        />
        <div className="LogementAccordeon">
        <Collaps
          title={'Description'}
          content={logement.description}
        />
        <Collaps
          title={'Equipements'}
          content={logement.equipments.join(', ')} // Joining equipments with a comma
        />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
