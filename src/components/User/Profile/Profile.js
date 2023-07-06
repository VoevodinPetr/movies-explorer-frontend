import { useContext, useState } from "react";
import Header from "../../common/Header/Header";
import NavigationProfile from "../../common/NavigationProfile/NavigationProfile";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import "./Profile.css";

function Profile({ onUpdateUser, handleLogout, isMessageProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditInput, setIsEditInput] = useState(true);
  const controlInput = useFormAndValidation();
  const { nameErr, emailErr } = controlInput.errors;
  const errorClassName = !controlInput.isValid
    ? "profile__input-error profile__input-error_visible"
    : "profile__input-error";

  const saveInput = (e) => {
    e.preventDefault();
    setIsEditInput((state) => !state);
  };

  let disableUserCurrentCheck =
    (currentUser.name === controlInput?.values?.name &&
      typeof controlInput?.values?.email === "undefined") ||
    (currentUser.email === controlInput?.values?.email &&
      typeof controlInput?.values?.email === "undefined");

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = controlInput.values;
    if (!name) {
      onUpdateUser(currentUser.name, email);
    } else if (!email) {
      onUpdateUser(name, currentUser.email);
    } else {
      onUpdateUser(name, email);
    }
    setTimeout(() => setIsEditInput((state) => !state), 1000);
    controlInput.resetForm();
  }

  let classNameMessageBtn = isMessageProfile
    ? "profile__message"
    : "profile__message profile__message_hidden";

  return (
    <>
      <Header
        color={"header__theme_black"}
        location={"header__container_movies"}
      >
        <NavigationProfile />
      </Header>
      <section className="profile">
        <div className="profile__main">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <div className="profile__field">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                required="{true}"
                placeholder={currentUser.name}
                pattern="[A-Za-zА-Яа-яЁё\s-]+"
                onChange={controlInput.handleChange}
                value={controlInput?.values?.name ?? currentUser.name}
                {...(!isEditInput ? {} : { disabled: true })}
              />
            </div>
            <span className={errorClassName}>{nameErr}</span>
            <div className="profile__field">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                name="email"
                placeholder={currentUser.email}
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={controlInput.handleChange}
                value={controlInput?.values?.email ?? currentUser.email}
                {...(!isEditInput ? {} : { disabled: true })}
              />
            </div>
            <span className={errorClassName}>{emailErr}</span>

            {!isEditInput && (
              <>
                <span className={classNameMessageBtn}>
                  Изменения сохранены!
                </span>
                <button
                  className="profile__save-button hover-button"
                  disabled={disableUserCurrentCheck || !controlInput.isValid}
                >
                  Сохранить
                </button>
              </>
            )}

            {isEditInput && (
              <>
                <button
                  className="profile__button hover-link"
                  onClick={saveInput}
                >
                  Редактировать
                </button>

                <button
                  className="profile__link-button hover-link"
                  onClick={handleLogout}
                  type="submit"
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
