import { NavLink } from "react-router-dom";
import './NavBar.scss';

/**
 * Fonction qui gère le menu de navigation
 */
const NavBar = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/about">A propos</NavLink></li>
        </ul>
      </nav>
    );
};

export default NavBar;