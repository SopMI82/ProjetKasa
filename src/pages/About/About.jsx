import Drawer from "../../components/Drawer/Drawer";
import Banner from "../../components/Banner/Banner";



const About = () => {
  return (
    <div>
      <Banner
        imgSource=".\kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
        opacity={0.3}
      />

      <Drawer
        drawerTitle={"Fiabilité"}
        drawerContent={
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        }
      />
      <Drawer
        drawerTitle={"Respect"}
        drawerContent={
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        }
      />
      <Drawer
        drawerTitle={"Service"}
        drawerContent={
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        }
      />
      <Drawer
        drawerTitle={"Sécurité"}
        drawerContent={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
      />
    </div>
  );
};

export default About;
