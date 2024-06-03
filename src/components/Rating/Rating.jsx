import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

// eslint-disable-next-line react/prop-types
const Rating = ({ rating }) => {
  const totalStars = 5;
  const starRating = Array.from({ length: totalStars }, (_, index) => index);

  const stars = starRating.map((index) => (
    <FontAwesomeIcon
      key={index}
      icon={index < rating ? faStarSolid : faStarRegular}
      className={index < rating ? "fillStar" : "emptyStar"}
    />
  ));

  return (
  <>{stars}</>
);
};

export default Rating;