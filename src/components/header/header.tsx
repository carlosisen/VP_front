import "@styles/header.css";
import texts from "../../constants/texts.json";
import logoVP from "../../assets/images/logoVP.png";
import HeaderNav from "./nav";

const Header = () => {
  const languageText = texts[0].spanish;

  return (
    <header className="header">
      <div className="header__div--top">
        <figure className="header__figure">
          <img src={logoVP} alt="logoPinguino" />
        </figure>
        <HeaderNav />
      </div>
      <hgroup className="header__hgroup">
        <h1 className="header__title"> {languageText.header.main}</h1>
      </hgroup>
    </header>
  );
};

export default Header;
