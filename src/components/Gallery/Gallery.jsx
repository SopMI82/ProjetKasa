import data from "../../data/logements.json";
import {Card} from "../Card/Card";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="galery">
      {data.map((housing) => {
        return <Card housing={housing} key={housing.id} />;
      })}
    </div>
  );
};

export default Gallery;
