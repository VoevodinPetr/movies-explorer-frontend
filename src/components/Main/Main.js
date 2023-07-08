import "./Main.css";
import Header from "../common/Header/Header";
import Promo from "../Main/Promo/Promo";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs";
import AboutMe from "../Main/AboutMe/AboutMe";
import Portfolio from "../Main/Portfolio/Portfolio";
import Footer from "../common/Footer/Footer";
import NavigationProfile from "../common/NavigationProfile/NavigationProfile";
import Navigation from "../common/Navigation/Navigation";

function Main({ loggedIn }) {
  return (
    <>
      {loggedIn ? (
        <Header color={"header__theme_blue"}>
          <NavigationProfile />
        </Header>
      ) : (
        <Header color={"header__theme_blue"}>
          <Navigation />
        </Header>
      )}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
