import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../common/Logo/Logo";

function Login() {
  return (
    <section className="login">
      <div className="login__main">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <span className="login-main__title">E-mail</span>
          <input
            className="login__input"
            type="E-mail"
            placeholder="Email"
            name="email"
            required
          />
          <span className="login-main__title">Пароль</span>
          <input
            className="login__input"
            type="password"
            placeholder="Пароль"
            name="password"
            required
          />
          <button className="login__button hover-button" type="submit">
            Войти
          </button>
        </form>
        <p className="login__text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link hover-link">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
