import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import lupa from "../../../images/lupa.svg";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__film">
          <img src={lupa} alt="поиск" className="search-form__lupa" />
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            required
          />
          <button className="search-form__button hover-button" type="submit"></button>
        </form>
        <Checkbox />
      </div>
    </div>
  );
}

export default SearchForm;
