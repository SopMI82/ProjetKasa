/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Carousel.scss";

/**
 * Fonction qui gère l'affichage du carousel photo sur les pages profile
 */
const Carousel = ({ listPic }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousPic = () => {
    //décrémente l'index au clic sur la flèche pour afficher l'image précédente
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : listPic.length - 1
    );
  };

  const nextPic = () => {
    //incrémente l'index au clic sur la flèche pour afficher l'image suivante
    setActiveIndex((prevIndex) =>
      prevIndex < listPic.length - 1 ? prevIndex + 1 : 0
    );
  };

  const hasMultiplePics = listPic.length > 1;
  //condition pour l'affichage des flèches et du compteur

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
