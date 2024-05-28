import { useParams } from "react-router-dom";
import housings from "../../data/logements.json";

const Profile = () => {
  const { id } = useParams();
  const house = housings.find((housing) => housing.id === id);
  return (
    <div>
      <div className="carousel"></div>

      <div className="description">
        <h2>{house.title}</h2>
        <p>{house.location}</p>
        <div className="host">
          <p>{house.host.name}</p>
          <img src={house.host.picture} alt="photo de ${house.host.name}" />
        </div>
      </div>

      <div className="tags">
        {house.tags.map((tag, index) => {
          return <div key={`${house.id}-tag-${index}`}>{tag}</div>;
        })}
      </div>

      <div className="detail">
        <title>{house.description}</title>
        <i className="arrow"></i>
        <p>jhgdjhgjlfhjbfjh</p>
      </div>

    </div>
  );
};

export default Profile;
