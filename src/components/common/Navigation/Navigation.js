import { NavLink } from "react-router-dom";
import "./Navigation.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Navigation() {
  
  const menu = useContext(CurrentUserContext);

  return (
    <nav className="navigation">
      {menu ? (
        <>
          <NavLink
            to="/profile"
            className="menu__account-button hover-button"
          >
            <div className="menu__account-icon"></div>
            Аккаунт
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className="menu__item navigation__register hover-link"
            to="/signup"
          >
            Регистрация
          </NavLink>
          <NavLink
            className="menu__item navigation__enter hover-link"
            to="/signin"
          >
            Войти
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navigation;
