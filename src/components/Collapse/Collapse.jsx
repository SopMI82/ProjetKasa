import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import "./Collapse.scss";

// eslint-disable-next-line react/prop-types
const Collapse = ({ collapseTitle = "", collapseContent = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailRef = useRef(null);

  useEffect(() => {
    if (isOpen && detailRef.current) {
      const content = detailRef.current;
      const height =
        content.scrollHeight +
        parseInt(window.getComputedStyle(content).paddingTop, 10) +
        parseInt(window.getComputedStyle(content).paddingBottom, 10);
      content.style.maxHeight = `${height}px`;
    } else if (detailRef.current) {
      detailRef.current.style.maxHeight = "0";
    }
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="overview">
        <h3>{collapseTitle}</h3>
        <button onClick={toggleCollapse}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      <div ref={detailRef} className="detail">
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
