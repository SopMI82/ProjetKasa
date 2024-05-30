import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <Banner
        imgSource=".\src\assets\image.png"
        text="Chez vous, partout et ailleurs"
        opacity={0.6}
      />
      <Gallery />
    </div>
  );
};

export default Home;
