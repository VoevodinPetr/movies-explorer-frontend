import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import lupa from "../../../images/lupa.svg";
import border from "../../../images/icon-border.svg";

function SearchForm() {
  return (
    <section className="search-form section2">
      <form className="search-form__film">
        <div className="search-form__container">
          <img src={lupa} alt="поиск" className="search-form__lupa" />
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            required
          />
          <button
            className="search-form__button hover-button"
            type="submit"
          ></button>
          <img className="search-form__border" src={border} alt="разделитель" />
          <div className="search-form__checkbox">
          <Checkbox />
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
