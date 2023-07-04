import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import More from "../More/More";
import { SEARCH_ERRORS } from "../../../utils/constants";

function MoviesCardList({
  loading,
  cards,
  serverError,
  isOnlySaved,
  isSaved,
  onMovieSave,
  onMovieDelete,
  handleShowMore,
}) {
  if (loading) return <Preloader />;
  if (cards.length === 0)
    return <span className="movies__error">{SEARCH_ERRORS.NOT_FOUND}</span>;
  if (serverError)
    return (
      <span className="movies__error">{SEARCH_ERRORS.MOVIES_NOT_RECEIVED}</span>
    );

  const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));

  return (
    <>
      <ul className="movie-card-list section2">
        {cards.map((card) => {
          return (
            <MoviesCard
              card={card}
              key={isOnlySaved ? card.movieId : card.id}
              isSaved={isSaved}
              isOnlySaved={isOnlySaved}
              onMovieSave={onMovieSave}
              onMovieDelete={onMovieDelete}
            />
          );
        })}
      </ul>
      {isOnlySaved ? (
        ""
      ) : cards.length < foundMovies.length ? (
        <More handleShowMore={handleShowMore} />
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;
