import { useState } from "react";
import "./NavigationProfile.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function NavigationProfile() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  return (
    <div className="navigation-profile__header section">
      <Logo />
      <div className={`${isPopupOpen ? "overlay" : ""}`}>
        <nav
          className={`navigation-profile navigation__popup ${
            isPopupOpen ? "navigation__popup_open" : ""
          }`}
        >
          <button
            className="navigation__popup-button navigation__popup-button_close hover-button"
            onClick={handlePopupClose}
          ></button>
          <Link
            to="/"
            className="navigation__link navigation__link_loggedin navigation__link-main hover-link"
            onClick={handlePopupClose}
          >
            Главная
          </Link>
          <NavLink
            to="/movies"
            className="navigation__link navigation__link_loggedin hover-link"
            //activeClassName="navigation__link_active"
            onClick={handlePopupClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link navigation__link_loggedin hover-link"
           //activeClassName="navigation__link_active"
            onClick={handlePopupClose}
          >
            Сохранённые фильмы
          </NavLink>
          <Link
            to="/profile"
            className="navigation__account-button hover-button"
            onClick={handlePopupClose}
          >
            <div className="navigation__account-icon"></div>
            Аккаунт
          </Link>
        </nav>
      </div>
      <button
        className="navigation__popup-button navigation__popup-button_burger hover-button"
        onClick={handlePopupOpen}
      ></button>
    </div>
  );
}

export default NavigationProfile;
