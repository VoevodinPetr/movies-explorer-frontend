import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import More from "../More/More";

function MoviesCardList(props) {
  if (props.loading) return <Preloader />;
  if (props.cards.length === 0)
    return <span className="movies__error">Ничего не найдено</span>;
  if (props.serverError)
    return (
      <span className="movies__error">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </span>
    );

  const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));

  return (
    <>
      <ul className="movie-card-list section2">
        {props.cards.map((card) => {
          return (
            <MoviesCard
              card={card}
              key={props.isOnlySaved ? card.movieId : card.id}
              isSaved={props.isSaved}
              isOnlySaved={props.isOnlySaved}
              onCardSave={props.onCardSave}
              onCardDelete={props.onCardDelete}
            />
          );
        })}
      </ul>
      {props.isOnlySaved ? (
        ""
      ) : props.cards.length < foundMovies.length ? (
        <section className="more section2">
          <button
            className="more__button hover-button"
            onClick={props.handleShowMore}
            type="button"
          >
            Ещё
          </button>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;