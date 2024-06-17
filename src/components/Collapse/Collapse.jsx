import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import "./Collapse.scss";

/**
 * Fonction qui gère l'affichage dynamique des accordéons et le déclenchement de l'animation au clic
 */
// eslint-disable-next-line react/prop-types
const Collapse = ({ collapseTitle = "", collapseContent = "" }) => {
  const [isOpen, setIsOpen] = useState(false); //paramétrage du usteState sur boite fermée (false)
  const detailRef = useRef(null);

  useEffect(() => {
    if (isOpen && detailRef.current) {
      const content = detailRef.current;
      const height = //calcul de la hauteur optimale du bloc details en fonction de la hauteur du contenu additionnée du padding récupéré dans le css
        content.scrollHeight +
        parseInt(window.getComputedStyle(content).paddingTop, 10) +
        parseInt(window.getComputedStyle(content).paddingBottom, 10);
      content.style.maxHeight = `${height}px`;
    } else if (detailRef.current) {
      detailRef.current.style.maxHeight = "0"; //réduit le bloc details pour le cacher
    }
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }; //alterne l'état de isOpen

  return (
    <div
      onClick={toggleCollapse} //alterne l'état de isOpen lors du clic
      className={`collapse ${isOpen ? "open" : ""}`} //si isOpen = true, applique la classe open
    >
      <div className="overview">
        <h3>{collapseTitle}</h3>
        <span>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <div ref={detailRef} className="detail">
        {Array.isArray(collapseContent) ? (
          collapseContent.map((item, index) => (
            <p key={`${collapseTitle}-item-${index}`}>{item}</p>
          ))
        ) : (
          <p>{collapseContent}</p>
          //ici on vérifie si collapseContent est un tableau (fonction ajoutée pour la liste des équipements)
          //si c'est le cas, on affiche une balise <p> par objet du tableau, sinon, on affiche simplement le contenu de collapseContent*/
        )}
      </div>
    </div>
  );
};

export default Collapse;
