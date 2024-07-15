import NavBar from "../NavBar/NavBar";
import Logo from "../../../public/LOGO.svg";

import './Header.scss';

/**
 * Fonction qui permet d'intégrer le header de la page
 */
const Header = () => {
    return (
      <header>
        <img src={Logo} alt="logo Kasa" />
        <NavBar />
      </header>
    );
};

export default Header;