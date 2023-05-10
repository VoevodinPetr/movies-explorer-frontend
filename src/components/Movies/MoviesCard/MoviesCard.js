import "./MoviesCard.css";
import movie from "../../../images/movie-5.svg";
function MoviesCard() {
  return (
    <>
      <li className="movies">
        <img src={movie} alt="фильм" className="movies__img" />
        <h4 className="movies__title">33 слова о дизайне</h4>
        <button className="movies__button-save"></button>
        <p className="movies__duration">1ч 47м</p>
      </li>
    </>
  );
}

export default MoviesCard;
