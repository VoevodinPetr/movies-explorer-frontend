import { Link } from "react-router-dom";
import './Register.css';
import Logo from "../../common/Logo/Logo";

function Register() {
  
  return (
    <section className="login">
      <div className="login__main">
      <Logo />
        <h1 className="login__title">Добро пожаловать!</h1>
        <form className="login__form">
          <span className="login-main__title">Имя</span>
          <input
            className="login__input"
            id="name-input"
            type="text"
            placeholder="Виталий"
            name="name"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="login-main__title">Email</span>
          <input
            className="login__input"
            type="email"
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
            minLength="6"
            required
          />
           <span className="register__input-error">Что-то пошло не так...</span>
          <button className="login__button register__button hover-button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <p className="login__text">
          Уже зарегистрированы?
          <Link to="/signin" className="login__link hover-link"> Войти</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
