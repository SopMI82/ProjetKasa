import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Accueil</h2>
      <Banner />
      <Gallery />
    </div>
  );
};

export default Home;
