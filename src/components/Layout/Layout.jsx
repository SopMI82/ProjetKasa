import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

/**
 * Fonction qui permet d'agencer le contenu de la page
 */
export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}
