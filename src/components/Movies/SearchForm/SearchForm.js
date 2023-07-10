import { useState, useEffect } from "react";
import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import lupa from "../../../images/lupa.svg";
import border from "../../../images/icon-border.svg";

function SearchForm({ handleSearch, defaultValue }) {
  const [errorText, setErrorText] = useState('');
  const [keyword, setKeyword] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false);

  function handleChangeMovieName(e) {
    setKeyword(e.target.value)
    setIsFormValid(e.target.closest('form').checkValidity());
  }

  function handleChangeCheckbox(e) {
    const isShortFilms = e.target.checked
    setCheckbox(isShortFilms)
    handleSearch(keyword, isShortFilms)
  }

  function handleSubmit(e) {
    e.preventDefault()

    setIsFormValid(e.target.closest('form').checkValidity());
    if (!isFormValid) {
      return setErrorText('Нужно ввести ключевое слово');
    }
    handleSearch(keyword, checkbox)
  }
  
  useEffect(() => {
    setKeyword(defaultValue)
    setCheckbox(JSON.parse(localStorage.getItem('shortFilms')) || false)
  }, [])

  return (
    <section className="search-form section2" onSubmit={handleSubmit}>
      <form className="search-form__film" noValidate>
        <div className="search-form__container">
          <img src={lupa} alt="поиск" className="search-form__lupa" />
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            name="movie"
            value={keyword}
            onChange={handleChangeMovieName}
            minLength='1'
            maxLength='30'
            required
          />
          <button
            className="search-form__button hover-button"
            type="submit"
          ></button>
          <span className="search__error">{!isFormValid && errorText}</span>
          <img className="search-form__border" src={border} alt="разделитель" />
          <div className="search-form__checkbox">
            <div className="checkbox__container">
              <input
                className="checkbox__input"
                checked={checkbox}
                onChange={handleChangeCheckbox}
                type="checkbox"
                name="shortFilms"
              />
              <label className="checkbox__label">Короткометражки</label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
