import { useState, useEffect } from "react";
import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../common/Footer/Footer";

function SavedMovies(props) {

  const [filteredMovies, setFilteredMovies] = useState([])
  function handleSearch(movieName, isShortFilms) {
    const filteredMovies = props.cards.filter((item) =>
      item.nameRU.toLowerCase().includes(movieName.toLowerCase())
    );
    if (isShortFilms) {
      setFilteredMovies(filteredMovies.filter((item) => item.duration <= 40));
    } else {
      setFilteredMovies(filteredMovies);
    }
  }

  function initFilteredMovies() {
    setFilteredMovies(props.cards);
  }

  useEffect(() => {
    setFilteredMovies(
      filteredMovies.filter((movie) =>
        props.cards.some((card) => movie.movieId === card.movieId)
      )
    );
  }, [props.cards]);

  useEffect(() => {
    initFilteredMovies();
  }, []);

  return (
    <>
      <NavigationProfile />
      <main>
        <SearchForm handleSearch={handleSearch} defaultValue="" />

        <MoviesCardList
          cards={filteredMovies}
          isSaved={props.isSaved}
          isOnlySaved={true}
          onCardDelete={props.onCardDelete}
          serverError={props.serverError}
          loading={props.loading}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
