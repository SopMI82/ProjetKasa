import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

/**
 * Fonction qui gère l'affichage de la note du logement
 */
// eslint-disable-next-line react/prop-types
const Rating = ({ rating }) => {
  const totalStars = 5; //fixe le nombre d'étoiles de base
  const starRating = Array.from({ length: totalStars }, (_, index) => index); //recupère la note du logement

  const stars = starRating.map((index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStarSolid} //attribue une étoile pour chaque index
      className={index < rating ? "fillStar" : "emptyStar"} //attribue la classe fillStar pour chaque étoile dont l'index' est inférieur à la note, sinon, attribue emptyStar 
    />
  ));

  return (
  <>{stars}</>
);
};

export default Rating;