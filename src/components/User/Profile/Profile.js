import { Link } from "react-router-dom";
import NavigationProfile from "../../common/NavigationProfile/NavigationProfile";
import "./Profile.css";

function Profile() {
  return (
    <>
      <NavigationProfile />
      <section className="profile">
        <div className="profile__main">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <form className="profile__form" noValidate>
            <div className="profile__field">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                placeholder="Имя"
                name="name"
                required
              />
            </div>
            <div className="profile__field">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                placeholder="E-mail"
                name="email"
                required
              />
            </div>
            <button className="profile__button" type="submit">
              Редактировать
            </button>
            <Link to="/signin" className="profile__link-button">
              Выйти из аккаунта
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
