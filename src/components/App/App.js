import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../User/Profile/Profile";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import * as moviesApi from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isRegisterMessage, setRegisterMessage] = useState(false);
  const [isLoginMessage, setLoginMessage] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moreCards, setMoreCards] = useState(0);

  useEffect(() => {
    tokenCheck();
  }, []);

  /*useEffect(() => {
    if (loggedIn) {
      mainApi
      .getMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.log(err.message);
        });
      auth
        .getUserInfo()
        .then((userData) => {
          
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err.message);
        });
  
      }
  }, [loggedIn]);*/

  function getUserInfo() {
    auth
      .getUserInfo()
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getSavedMovies() {
    mainApi
      .getMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    const path = location.pathname;
    auth
      .getUserInfo()
      .then((userData) => {
        setLoggedIn(true);
        navigate(path);
        setCurrentUser(userData);
        getSavedMovies();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function searchMovie(movieName, isShortFilms) {
    setLoading(true);
    moviesApi
      .getApiMovies()
      .then((movies) => {
        const searchedMovies = movies.filter((item) =>
          item.nameRU.toLowerCase().includes(movieName.toLowerCase())
        );
        const foundMovies = isShortFilms
          ? searchedMovies.filter((item) => item.duration <= 40)
          : searchedMovies;
        localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
        localStorage.setItem("searchMovieName", movieName);
        localStorage.setItem("shortFilms", isShortFilms);
        setLoading(false);
        handleResize();
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setServerError(true);
      });
  }

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  function handleResize() {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    if (foundMovies === null) {
      return;
    }
    if (windowWidth >= 1280) {
      setMovies(foundMovies.slice(0, 12));
      setMoreCards(3);
    } else if (windowWidth > 480 && windowWidth < 1280) {
      setMovies(foundMovies.slice(0, 8));
      setMoreCards(2);
    } else if (windowWidth <= 480) {
      setMovies(foundMovies.slice(0, 5));
      setMoreCards(2);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", checkWindowWidth);
    handleResize();
  }, [windowWidth]);

  function handleShowMore() {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    setMovies(foundMovies.slice(0, movies.length + moreCards));
  }

  function handleSearch(movieName, isShortFilms) {
    searchMovie(movieName, isShortFilms);
  }

  function handleCardSave(movie) {
    mainApi
      .addMovie(movie)
      .then((movieData) => {
        setSavedMovies([...savedMovies, movieData]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleCardDelete(card) {
    const deleteCard = savedMovies.find(
      (c) =>
        c.movieId === (card.id || card.movieId) && c.owner === currentUser._id
    );
    if (!deleteCard) return;
    mainApi
      .deleteMovie(deleteCard._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((c) => c._id !== deleteCard._id));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function isSaved(card) {
    return savedMovies.some(
      (item) => item.movieId === card.id && item.owner === currentUser._id
    );
  }

  function tokenCheck() {
    const token = localStorage.getItem("token");

    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate("/movies");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  function onRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        onLogin(email, password);
      })
      .catch((err) => {
        err.status !== 400
          ? setRegisterMessage("Пользователь с таким email уже зарегистрирован")
          : setRegisterMessage(
              "При регистрации пользователя произошла ошибка."
            );
      });
  }

  function onLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          auth.checkToken(res.token).then((res) => {
            if (res) {
              navigate("/movies");
              setLoggedIn(true);
              getUserInfo();
            }
          });
        }
      })
      .catch((err) => {
        if (err.includes(401)) {
          setLoginMessage("Вы ввели неправильный логин или пароль.");
        }
      });
  }

  function onUpdateUser(name, email) {
    auth
      .updateUserInfo(name, email)
      .then(() => {
        setCurrentUser({ name, email });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  function onSignOut() {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
    setCurrentUser({});
    setRegisterMessage(false);
    setLoginMessage(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                handleSearch={handleSearch}
                defaultSearchValue={
                  localStorage.getItem("searchMovieName") || ""
                }
                cards={movies}
                handleShowMore={handleShowMore}
                isSaved={isSaved}
                onCardSave={handleCardSave}
                onCardDelete={handleCardDelete}
                serverError={serverError}
                loading={loading}
              ></Movies>
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                loading={loading}
                cards={savedMovies}
                isSaved={isSaved}
                onCardDelete={handleCardDelete}
                serverError={serverError}
              ></SavedMovies>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onUpdateUser={onUpdateUser} onSignOut={onSignOut} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              onRegister={onRegister}
              isRegisterMessage={isRegisterMessage}
            />
          }
        />
        <Route
          path="/signin"
          element={<Login onLogin={onLogin} isLoginMessage={isLoginMessage} />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
