import { NavLink } from "react-router-dom";
import './Error404.css'

const Error404 = () => {
  return (
    <div className="erreur404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
    </div>
  );
};

export default Error404;
