import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Appart = ({ title, name, picture, location, tag, rating }) => {
  return (
    <div className="LogementContent">
      <div className="info-content">
        <div className="titleUser">
          <h2 className="appartTitle">{title}</h2>
        </div>
        <div className="location">
          <p>{location}</p>
        </div>
        <div className="tagStar">
          <div className="TagContent">
            {tag.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="StarsAndName">
        <div className="NamePicture">
          <p className="userName">{name}</p>
          <img className="userPicture" src={picture} alt={picture} />
        </div>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={`star ${index < rating ? "filled" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appart;
