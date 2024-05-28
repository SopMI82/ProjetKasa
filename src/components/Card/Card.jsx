import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = (prop) => {
  return (
    <Link to={`profile/${prop.housing.id}`} className="housingCard">
      <p>{prop.housing.title}</p>
      <img src={prop.housing.cover} alt="photo du logement" />
    </Link>
  );
};
