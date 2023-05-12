import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <>
      <ul className="movie-card-list section2">
        <MoviesCard />
      </ul>
    </>
  );
}

export default MoviesCardList;
