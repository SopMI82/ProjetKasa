import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navBar">
        <ul>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </ul>
      </div>
    );
};

export default NavBar;