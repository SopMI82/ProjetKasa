import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carousel = ({listPic}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousPic = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const nextPic = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={previousPic}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img src={listPic[activeIndex]} alt="" />
      <p>index/lenght</p>
      <button onClick={nextPic}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
