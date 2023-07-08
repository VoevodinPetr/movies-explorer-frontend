import { useState, useEffect } from "react";
import Header from "../common/Header/Header";
import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../common/Footer/Footer";
import {SHORT_FILM_DURATION} from '../../utils/constants';

function SavedMovies({ cards, isSaved, onMovieDelete, serverError, loading }) {
  const [movies, setFilteredMovies] = useState([]);
  function handleSearch(keyword, isShortFilms) {
    const filteredMovies = cards.filter((item) =>
      item.nameRU.toLowerCase().includes(keyword.toLowerCase())
    );
    if (isShortFilms) {
      setFilteredMovies(filteredMovies.filter((item) => item.duration <= SHORT_FILM_DURATION));
    } else {
      setFilteredMovies(filteredMovies);
    }
  }

  function initFilteredMovies() {
    setFilteredMovies(cards);
  }

  useEffect(() => {
    setFilteredMovies(
      cards.filter((movie) =>
        cards.some((card) => movie.movieId === card.movieId)
      )
    );
  }, [cards]);

  useEffect(() => {
    initFilteredMovies();
  }, []);

  return (
    <>
      <Header color={"header__theme_black"}>
        <NavigationProfile />
      </Header>
      <main className="main">
        <SearchForm handleSearch={handleSearch} defaultValue="" />

        <MoviesCardList
          cards={movies}
          isSaved={isSaved}
          isOnlySaved={true}
          onMovieDelete={onMovieDelete}
          serverError={serverError}
          loading={loading}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
