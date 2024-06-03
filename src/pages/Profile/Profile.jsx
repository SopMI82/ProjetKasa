import { useParams } from "react-router-dom";
import housings from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "./../../components/Rating/Rating";

const Profile = () => {
  const { id } = useParams();
  const house = housings.find((housing) => housing.id === id);
  return (
    <div>
      <Carousel listPic={house.pictures} />
      <div className="informations">
        <h2>{house.title}</h2>
        <p>{house.location}</p>
        <div className="host">
          <p>{house.host.name}</p>
          <img src={house.host.picture} alt="photo de ${house.host.name}" />
        </div>
        <div className="star-rating">
          <Rating rating={house.rating} />
        </div>
      </div>
      <div className="tags">
        {house.tags.map((tag, index) => {
          return <div key={`${house.id}-tag-${index}`}>{tag}</div>;
        })}
      </div>

      <Collapse
        collapseTitle={"Decription :"}
        collapseContent={house.description}
      />
      <Collapse
        collapseTitle={"Equipements :"}
        collapseContent={house.equipments}
      />
    </div>
  );
};

export default Profile;

/* */
