import NavBar from "../NavBar/NavBar";
import './Header.scss';

const Header = () => {
    return (
        <header>
            <img src="./LOGO.svg" alt="logo Kasa" />
            <NavBar/>
        </header>
    );
};

export default Header;