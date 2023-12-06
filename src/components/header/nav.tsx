import texts from "../../constants/texts.json";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const HeaderNav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const languageText = texts[0].spanish;
  const handleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };
  return (
    <nav
      className={`header__nav ${isMenuActive && "isActive"}`}
      onClick={() => isMenuActive && setIsMenuActive(false)}>
      <div
        onClick={() => setIsMenuActive(false)}
        className={`header__navButton ${isMenuActive && "isActive"}`}>
        <h3 className="header__navText">{languageText.header.nav[0]}</h3>
      </div>
      <div
        onClick={() => setIsMenuActive(false)}
        className={`header__navButton ${isMenuActive && "isActive"}`}>
        <h3 className="header__navText">{languageText.header.nav[1]}</h3>
      </div>
      <div
        onClick={() => setIsMenuActive(false)}
        className={`header__navButton ${isMenuActive && "isActive"}`}>
        <h3 className="header__navText">{languageText.header.nav[2]}</h3>
      </div>
      <div
        onClick={() => setIsMenuActive(false)}
        className={`header__navButton ${isMenuActive && "isActive"}`}>
        <h3 className="header__navText">{languageText.header.nav[3]}</h3>
      </div>
      <div
        onClick={() => setIsMenuActive(false)}
        className={`header__navButton ${isMenuActive && "isActive"}`}>
        <h3 className="header__navText">{languageText.header.nav[4]}</h3>
      </div>
      <div className="header__navIcon">
        <HiMenu onClick={() => handleMenu()} />
      </div>
    </nav>
  );
};
export default HeaderNav;
