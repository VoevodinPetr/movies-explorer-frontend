import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../common/Footer/Footer";


function SavedMovies() {
  return (
    <>
      <NavigationProfile />
      <main>
        <SearchForm />
        <MoviesCardList type="saved" />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
