import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import "./Home.scss";

const Home = () => {
  return (
    <main className="container">
      <Banner
        imgSource="./image.png"
        text="Chez vous, partout et ailleurs"
        opacity={0.4}
      />
      <Gallery />
    </main>
  );
};

export default Home;
