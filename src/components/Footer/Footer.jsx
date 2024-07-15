import "./Footer.scss"
import Logo from "../../../public/LOGO.png";

/**
 * Fonction qui permet d'intégrer le footer de la page
 */
const Footer = () => {
    return (
      <footer>
        <img src={Logo} alt="logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
};

export default Footer;