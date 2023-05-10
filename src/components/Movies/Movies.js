import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from "../common/Footer/Footer";
import More from '../Movies/More/More';

function Movies() {
    return (
      <>
        <NavigationProfile/>
        <main>
          <SearchForm />
          <MoviesCardList type="movies" />
          <More />
        </main>
        <Footer />
      </>
    );
  }
  
  export default Movies;