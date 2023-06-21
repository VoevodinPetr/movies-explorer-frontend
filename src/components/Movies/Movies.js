import "./Movies.css";
import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../common/Footer/Footer";

function Movies({
  handleSearch,
  defaultSearchValue,
  cards,
  handleShowMore,
  isSaved,
  onCardSave,
  onCardDelete,
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
          onCardSave={onCardSave}
          onCardDelete={onCardDelete}
          serverError={serverError}
          loading={loading}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
