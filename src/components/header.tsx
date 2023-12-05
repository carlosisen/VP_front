import "@styles/header.css";
import texts from "../constants/texts.json";
import logoVP from "../assets/images/logoVP.png";

const Header = () => {
  const languageText = texts[0].spanish;
  return (
    <header className="header">
      <div className="header__div--top">
        <figure className="header__figure">
          <img src={logoVP} alt="logoPinguino" />
        </figure>
        <nav className="header__nav">
          <div className="header__navButton">
            <h3 className="header__navText">{languageText.header.nav[0]}</h3>
          </div>
          <div className="header__navButton">
            <h3 className="header__navText">{languageText.header.nav[1]}</h3>
          </div>
          <div className="header__navButton">
            <h3 className="header__navText">{languageText.header.nav[2]}</h3>
          </div>
          <div className="header__navButton">
            <h3 className="header__navText">{languageText.header.nav[3]}</h3>
          </div>
          <div className="header__navButton">
            <h3 className="header__navText">{languageText.header.nav[4]}</h3>
          </div>
        </nav>
      </div>
      <hgroup className="header__hgroup">
        <h1>{languageText.header.main}</h1>
      </hgroup>
    </header>
  );
};

export default Header;
