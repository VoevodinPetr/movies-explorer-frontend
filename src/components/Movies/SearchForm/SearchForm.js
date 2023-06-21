import { useState, useEffect } from "react";
import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import lupa from "../../../images/lupa.svg";
import border from "../../../images/icon-border.svg";

function SearchForm(props) {
  const [movieName, setMovieName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  function handleChangeMovieName(e) {
    setMovieName(e.target.value);
  }

  function handleChangeCheckbox(e) {
    const isShortFilms = e.target.checked;
    setCheckbox(isShortFilms);
    props.handleSearch(movieName, isShortFilms);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearch(movieName, checkbox);
  }

  useEffect(() => {
    setMovieName(props.defaultValue);
    setCheckbox(JSON.parse(localStorage.getItem("shortFilms")) || false);
  }, []);

  return (
    <section className="search-form section2" onSubmit={handleSubmit}>
      <form className="search-form__film">
        <div className="search-form__container">
          <img src={lupa} alt="поиск" className="search-form__lupa" />
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            name="movie"
            value={movieName}
            onChange={handleChangeMovieName}
            required
          />
          <button
            className="search-form__button hover-button"
            onSubmit={handleSubmit}
            type="submit"
          ></button>
          <img className="search-form__border" src={border} alt="разделитель" />
          <div className="search-form__checkbox">
            <div className="checkbox__container">
              <input className="checkbox__input" checked={checkbox} onChange={handleChangeCheckbox} type="checkbox" name="shortFilms" />
              <label className="checkbox__label">Короткометражки</label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
