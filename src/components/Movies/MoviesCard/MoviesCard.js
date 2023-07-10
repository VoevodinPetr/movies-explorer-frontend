import React from "react";
import "./MoviesCard.css";


function MoviesCard({
  card,
  isOnlySaved,
  onMovieSave,
  onMovieDelete,
  isSaved,
}) {
  const nameRu = card.nameRU;
  const poster = isOnlySaved
    ? card.image
    : `https://api.nomoreparties.co/${card.image.url}`;
  const trailerLink = card.trailerLink;

  const duration = () => {
    if (card.duration > 60) {
      return ((card.duration / 60) | 0) + "ч " + (card.duration % 60) + "м";
    }
    if (card.duration === 60) {
      return card.duration / 60 + "ч";
    } else {
      return card.duration + "м";
    }
  };

  function handleMovieSave() {
    onMovieSave(card);
  }

  function handleMovieDelete() {
    onMovieDelete(card);
  }

  return (
    <>
      <li className="movies">
        <a
          className="movie__trailer"
          href={trailerLink}
          rel="noreferrer"
          target="_blank"
        >
          <img src={poster} alt="фильм" className="movies__img" />
        </a>
        <h4 className="movies__title">{nameRu}</h4>

        {isOnlySaved ? (
          <button
            className="movies__button movie__button-delete  hover-button"
            onClick={handleMovieDelete}
            type="button"
          ></button>
        ) : isSaved(card) ? (
          <button
            className="movies__button movie__button-saved hover-button"
            onClick={handleMovieDelete}
            type="button"
          ></button>
        ) : (
          <button
            className="movies__button movies__button-save hover-button"
            onClick={handleMovieSave}
            type="button"
          ></button>
        )}
        <p className="movies__duration">{duration()}</p>
      </li>
    </>
  );
}

export default MoviesCard;
