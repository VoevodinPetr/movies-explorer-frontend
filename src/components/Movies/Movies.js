import "./Movies.css";
import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../common/Footer/Footer";

function Movies(props) {
  return (
    <>
      <NavigationProfile />
      <main>
        <SearchForm
          handleSearch={props.handleSearch}
          defaultValue={props.defaultSearchValue}
        />

        <MoviesCardList
          cards={props.cards}
          handleShowMore={props.handleShowMore}
          isSaved={props.isSaved}
          isOnlySaved={false}
          onCardSave={props.onCardSave}
          onCardDelete={props.onCardDelete}
          serverError={props.serverError}
          loading={props.loading}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
