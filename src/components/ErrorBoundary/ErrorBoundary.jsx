import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./ErrorBoundary.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

/**
 * Fonction qui gère l'affichage de la page d'erreur
 */
export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Header/>
    <div className="erreur404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
    </div>
    <Footer/>
    </>
  );
}
