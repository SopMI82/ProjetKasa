import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = (prop) => {
  return (
    <Link to={`profile/${prop.housing.id}`} className="housingCard">
      <img src={prop.housing.cover} alt="photo du logement" />
      <p>{prop.housing.title}</p>
    </Link>
  );
};
