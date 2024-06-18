import React from "react";
import "../style/App.scss";


const Banner = ({image, text}) => {
    return ( 
                <div className="BannerBar">
                    <img src= {image} alt="BannerImage"/>
                    {text && <p>{text}</p>}
                </div>
            

    );
};

export default Banner;