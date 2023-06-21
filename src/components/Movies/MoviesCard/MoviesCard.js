import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const nameRu = props.card.nameRU;
  const poster = props.isOnlySaved
    ? props.card.image
    : `https://api.nomoreparties.co/${props.card.image.url}`;
  const trailerLink = props.card.trailerLink;

  const duration = () => {
    if (props.card.duration > 60) {
      return (
        ((props.card.duration / 60) | 0) +
        "ч " +
        (props.card.duration % 60) +
        "м"
      );
    }
    if (props.card.duration === 60) {
      return props.card.duration / 60 + "ч";
    } else {
      return props.card.duration + "м";
    }
  };

  function handleCardSave() {
    props.onCardSave(props.card);
  }

  // function handleCardDelete() {
  //   props.onCardDelete(props.card);
  // }

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

        <button
          className="movies__button-save hover-button"
          onClick={handleCardSave}
          type="button"
        ></button>
        <p className="movies__duration">{duration()}</p>
      </li>
    </>
  );
}

export default MoviesCard;
