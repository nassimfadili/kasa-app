import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import data from "../datacolaps.json";

const Collaps = () => {
    const [openItems, setOpenItems] = useState([]);

    const toggle = (i) => {
        if (openItems.includes(i)) {
            setOpenItems(openItems.filter(item => item !== i));
        } else {
            setOpenItems([...openItems, i]);
        }
    }

    return (
        <div className="Accordion">
            {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <FontAwesomeIcon 
                        icon={openItems.includes(index) ? faChevronDown : faChevronUp} 
                        onClick={() => toggle(index)} 
                    />
                    {openItems.includes(index) && <p>{item.description}</p>}
                </div>
            ))}
        </div>
    );
}

export default Collaps;
