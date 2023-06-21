import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import NavigationProfile from "../../common/NavigationProfile/NavigationProfile";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import "./Profile.css";

function Profile({ onUpdateUser, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const { handleChange, values, errors, isValid, setValues } =
    useFormAndValidation();

  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  function onUpdateUser() {
    setIsInputDisabled(false);
  }

  function handleSave() {
    setIsSuccess(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onUpdateUser(values.name, values.email)
    
  };

  return (
    <>
      <NavigationProfile />
      <section className="profile">
        <div className="profile__main">
          <h2 className="profile__title">Привет {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <div className="profile__field">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                placeholder="Имя"
                name="name"
                minLength="2"
                maxLength="30"
                value={values?.name || ""}
                onChange={handleChange}
                disabled={isInputDisabled}
                required
              />
            </div>
            {errors?.name && (
              <span className="profile__input-error">{errors.name}</span>
            )}
            <div className="profile__field">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                placeholder="E-mail"
                name="email"
                value={values?.email || ""}
                onChange={handleChange}
                disabled={isInputDisabled}
                required
              />
            </div>
            {errors?.email && (
              <span className="profile__input-error">{errors.email}</span>
            )}

            {isSuccess ? (
              <p className="profile__edit-status profile__edit-status_ok">
                Изменения сохранены
              </p>
            ) : (
              <span className="profile__edit-status profile__edit-status_error">
                {errors?.email}
              </span>
            )}
            
            {isInputDisabled ? (
              <>
                <button
                  className="profile__button hover-link"
                  onClick={onUpdateUser}
                  type="submit"
                >
                  Редактировать
                </button>

                <Link
                  to="/signin"
                  className="profile__link-button hover-link"
                  onClick={onSignOut}
                >
                  Выйти из аккаунта
                </Link>
              </>
            ) : (
              <button
                className={
                  isValid
                    ? "profile__save-button hover-button"
                    : "profile__save-button profile__save-button_disabled"
                }
                onClick={handleSave}
                type="submit"
                disabled={!isValid}
              >
                Сохранить
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
