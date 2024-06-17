import './Banner.scss';

/**
 * Fonction qui gère l'affichage dynamique de la bannière dans les pages "about" et "home"
 */
// eslint-disable-next-line react/prop-types
const Banner = ({imgSource, text, opacity}) => {
  return (
    <div className="banner">
      <img src={imgSource} alt="Photo de paysage" style={{opacity}} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default Banner;