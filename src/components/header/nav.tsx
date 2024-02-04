import texts from "../../constants/texts.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Routes from "@src/constants/routes";
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
      <div className={`header__nav--container ${isMenuActive && "isActive"}`}>
        <NavLink
          to={"/"}
          onClick={() => setIsMenuActive(false)}
          className={({ isActive }) =>
            `header__navButton ${isMenuActive && "isActive"} ${
              isActive && !isMenuActive && "header__navButton--Active"
            }`
          }>
          <h3 className="header__navText">{languageText.header.nav[0]}</h3>
        </NavLink>
        <a
          href={
            "https://www.ivoox.com/podcast-villa-pinguino-comics-cine-videojuegos_sq_f11507368_1.html"
          }
          onClick={() => setIsMenuActive(false)}
          target={"_blank"}
          rel={"noopener noreferrer"}
          className={`header__navButton ${isMenuActive && "isActive"} `}>
          <h3 className="header__navText">{languageText.header.nav[1]}</h3>
        </a>
        <NavLink
          to={Routes.reseñas}
          onClick={() => setIsMenuActive(false)}
          className={({ isActive }) =>
            `header__navButton ${isMenuActive && "isActive"} ${
              isActive && !isMenuActive && "header__navButton--Active"
            }`
          }>
          <h3 className="header__navText">{languageText.header.nav[2]}</h3>
        </NavLink>
        <NavLink
          to={Routes.portfolio}
          onClick={() => setIsMenuActive(false)}
          className={({ isActive }) =>
            `header__navButton ${isMenuActive && "isActive"} ${
              isActive && !isMenuActive && "header__navButton--Active"
            }`
          }>
          <h3 className="header__navText">{languageText.header.nav[3]}</h3>
        </NavLink>
        <NavLink
          to={Routes.who}
          onClick={() => setIsMenuActive(false)}
          className={({ isActive }) =>
            `header__navButton ${isMenuActive && "isActive"} ${
              isActive && !isMenuActive && "header__navButton--Active"
            }`
          }>
          <h3 className="header__navText">{languageText.header.nav[4]}</h3>
        </NavLink>
      </div>
      <div className="header__navIcon" onClick={() => handleMenu()}>
        <HiMenu />
      </div>
    </nav>
  );
};
export default HeaderNav;
