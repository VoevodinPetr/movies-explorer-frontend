import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink className="menu__item navigation__register hover-link" to="/signup">
        Регистрация
      </NavLink>
      <NavLink className="menu__item navigation__enter hover-link" to="/signin">
        Войти
      </NavLink>
    </nav>
  );
}

export default Navigation;


