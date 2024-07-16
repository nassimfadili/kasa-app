import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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

  const showControls = pictures.length > 1;

  return (
    <div className="slideshow">
      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="slideshow-button"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next slide"
            className="slideshow-button"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />
      {showControls && (
        <div className="slideshow-counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
