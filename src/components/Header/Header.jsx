import NavBar from "../NavBar/NavBar";
import './Header.scss';

/**
 * Fonction qui permet d'intégrer le header de la page
 */
const Header = () => {
    return (
      <header>
        <img src="./LOGO.svg" alt="logo Kasa" />
        <NavBar />
      </header>
    );
};

export default Header;