import { NavLink } from "react-router-dom";
import './NavBar.css';

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