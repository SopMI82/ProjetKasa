/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ listPic }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousPic = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : listPic.length - 1
    );
  };

  const nextPic = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < listPic.length - 1 ? prevIndex + 1 : 0
    );
  };

  const hasMultiplePics = listPic.length > 1;

  return (
    <div className="carousel">
      {hasMultiplePics && (
        <button onClick={previousPic} className="btnPrevious">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      <img className="currentPic" src={listPic[activeIndex]} alt="" />

      {hasMultiplePics && (
        <>
          <p className="picsCount">
            {activeIndex + 1}/{listPic.length}
          </p>
          <button onClick={nextPic} className="btnNext">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
