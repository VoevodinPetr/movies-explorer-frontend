import { useState, useEffect } from "react";
import Header from "../common/Header/Header";
import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../common/Footer/Footer";

function SavedMovies({ cards, isSaved, onMovieDelete, serverError, loading }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  function handleSearch(keyword, isShortFilms) {
    const filteredMovies = cards.filter((item) =>
      item.nameRU.toLowerCase().includes(keyword.toLowerCase())
    );
    if (isShortFilms) {
      setFilteredMovies(filteredMovies.filter((item) => item.duration <= 40));
    } else {
      setFilteredMovies(filteredMovies);
    }
  }

  function initFilteredMovies() {
    setFilteredMovies(cards);
  }

  useEffect(() => {
    setFilteredMovies(
      filteredMovies.filter((movie) =>
        cards.some((card) => movie.movieId === card.movieId)
      )
    );
  }, [cards]);

  useEffect(() => {
    initFilteredMovies();
  }, []);

  return (
    <>
      <Header
        color={"header__theme_black"}
        location={"header__container_movies"}
      >
        <NavigationProfile />
      </Header>
      <main>
        <SearchForm handleSearch={handleSearch} defaultValue="" />

        <MoviesCardList
          cards={filteredMovies}
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
