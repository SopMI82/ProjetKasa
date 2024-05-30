// eslint-disable-next-line react/prop-types
const Drawer = ({ drawerTitle = "", drawerContent = "" }) => {
  return (
    <div>
      <div className="overview">
        <h3>{drawerTitle}</h3>
        <i className="arrow"></i>
      </div>
      <div className="detail">
        {Array.isArray(drawerContent)
          ? drawerContent.map((item, index) => (
              <p key={`${drawerTitle}-item-${index}`}>{item}</p>
            ))
          : drawerContent}
      </div>
    </div>
  );
};

export default Drawer;


/*ici on vérifie si drawerContent est un tableau
(fonction ajoutée pour la liste des équipements)
si c'est le cas, on affiche une balise <p> par objet du tableau
sinon, on affiche simplement le contenu de drawerContent*/
