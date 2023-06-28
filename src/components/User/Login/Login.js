import { Link } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Logo from "../../common/Logo/Logo";
import "./Login.css";

function Login({ handleLogin, errorMessage }) {
  const { handleChange, values, errors, isValid } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();

    handleLogin(values.email, values.password);
  }

  return (
    <section className="login">
      <div className="login__main">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <label className="login-main__title">E-mail</label>
          <input
            className="login__input"
            type="email"
            placeholder="E-mail"
            name="email"
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            value={values?.email || ""}
            onChange={handleChange}
            required
          />
          {errors?.email && (
            <span className="login__input-error">{errors.email}</span>
          )}
          <label className="login-main__title">Пароль</label>
          <input
            className="login__input"
            type="password"
            placeholder="Пароль"
            name="password"
            minLength="6"
            value={values?.password || ""}
            onChange={handleChange}
            required
          />
          {errors?.password && (
            <span className="login__input-error">{errors.password}</span>
          )}
          <span className="login__input-error">{errorMessage}</span>
          <button
            className={
              isValid
                ? "login__button  hover-button"
                : "login__button  login__button_disabled"
            }
            disabled={!isValid}
            type="submit"
          >
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
