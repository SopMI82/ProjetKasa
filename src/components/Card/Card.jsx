import { Link } from "react-router-dom";
import "./Card.scss";

/**
 * Fonction qui gènère l'affichage dynamique du contenu des cartes logemnt sous forme de lien clickable
 */
export const Card = (prop) => {
  return (
    <Link to={`profile/${prop.housing.id}`} className="housingCard">
      <img src={prop.housing.cover} alt="photo du logement" />
      <p>{prop.housing.title}</p>
    </Link>
  );
};
