import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../../common/Logo/Logo";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Register({ onRegister, isRegisterMessage }) {
  const { handleChange, values, errors, isValid } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(values.name, values.email, values.password);
  }

  return (
    <section className="login">
      <div className="login__main">
        <Logo />
        <h1 className="login__title">Добро пожаловать!</h1>
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <label className="login-main__title">Имя</label>
          <input
            className="login__input"
            id="name-input"
            type="text"
            placeholder="Имя"
            name="name"
            minLength="2"
            maxLength="30"
            value={values?.name || ""}
            onChange={handleChange}
            required
          />
          {errors?.name && (
            <span className="register__input-error">{errors.name}</span>
          )}
          <span className="login-main__title">Email</span>
          <input
            className="login__input"
            type="email"
            placeholder="Email"
            name="email"
            value={values?.email || ""}
            onChange={handleChange}
            required
          />
          {errors?.email && (
            <span className="register__input-error">{errors.email}</span>
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
            <span className="register__input-error">{errors.password}</span>
          )}
          <span className="register__input-error">{isRegisterMessage}</span>
          <button
            className={
              isValid
                ? "login__button register__button hover-button"
                : "login__button register__button login__button_disabled"
            }
            disabled={!isValid}
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="login__text">
          Уже зарегистрированы?
          <Link to="/signin" className="login__link hover-link">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
