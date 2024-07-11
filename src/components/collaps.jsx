import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Collaps = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="Accordion">
            <div className='AccordionContent'>
                <h2>{title}</h2>
                <FontAwesomeIcon 
                    icon={isOpen ? faChevronDown : faChevronUp} 
                    onClick={toggle} 
                />
                </div>
                {isOpen && <p className='AccordionText'>{content}</p>}
        </div>
    );
}

export default Collaps;
