import React from "react";

const card = ({title, image}) => {
    return ( <div className="Card">
                    <p>{title}</p>
                    <img src={image} alt={title}/>
                </div>
    );
};

export default card;