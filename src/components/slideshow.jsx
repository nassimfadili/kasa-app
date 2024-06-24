import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Slideshow = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (pictures.length === 0) {
        return <div>No pictures found</div>;
    }

    return (
        <div className="slideshow">
            <button onClick={goToPrevious} aria-label="Previous slide">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button onClick={goToNext} aria-label="Next slide">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default Slideshow;