import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

// eslint-disable-next-line react/prop-types
const Collapse = ({ collapseTitle = "", collapseContent = "" }) => {
  return (
      <div className="collapse">
        <div className="overview">
          <h3>{collapseTitle}</h3>
          <button>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
        <div className="detail">
          {Array.isArray(collapseContent) ? (
            collapseContent.map((item, index) => (
              <p key={`${collapseTitle}-item-${index}`}>{item}</p>
            ))
          ) : (
            <p>{collapseContent}</p>
          )}
        </div>
      </div>

  );
};

export default Collapse;

/*ici on vérifie si collapseContent est un tableau
(fonction ajoutée pour la liste des équipements)
si c'est le cas, on affiche une balise <p> par objet du tableau
sinon, on affiche simplement le contenu de collapseContent*/
