import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <nav>
        <ul>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </ul>
      </nav>
    );
};

export default NavBar;