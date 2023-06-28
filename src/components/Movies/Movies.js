import "./Movies.css";
import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../common/Footer/Footer";

function Movies({
  handleSearch,
  handleShowMore,
  defaultSearchValue,
  cards,
  isSaved,
  onMovieSave,
  onMovieDelete,
  serverError,
  loading,
}) {
  return (
    <>
      <NavigationProfile />
      <main>
        <SearchForm
          handleSearch={handleSearch}
          defaultValue={defaultSearchValue}
        />

        <MoviesCardList
          cards={cards}
          handleShowMore={handleShowMore}
          isSaved={isSaved}
          isOnlySaved={false}
          onMovieSave={onMovieSave}
          onMovieDelete={onMovieDelete}
          serverError={serverError}
          loading={loading}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
