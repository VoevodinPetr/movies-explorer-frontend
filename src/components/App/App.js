import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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

import {
  SCREEN_ZIZE_1280,
  SCREEN_ZIZE_480,
  VISIBLE_MOVIES_5,
  VISIBLE_MOVIES_8,
  VISIBLE_MOVIES_12,
  MOVIES_LOAD_0,
  MOVIES_LOAD_2,
  MOVIES_LOAD_3,
  SHORT_FILM_DURATION,
} from "../../utils/constants";
import { REQUEST_ERRORS } from "../../utils/constants";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [isMessageProfile, setIsMessageProfile] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moreCards, setMoreCards] = useState(0);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        });
      auth
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        });
    }
  }, [loggedIn]);

  const tokenCheck = () => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
          handleLogout();
        });
    }
  };

  function searchMovie(keyword, isShortFilms) {
    setLoading(true);
    moviesApi
      .getApiMovies()
      .then((movies) => {
        const searchedMovies = movies.filter((item) =>
          item.nameRU.toLowerCase().includes(keyword.toLowerCase())
        );
        const foundMovies = isShortFilms
          ? searchedMovies.filter(
              (item) => item.duration <= SHORT_FILM_DURATION
            )
          : searchedMovies;
        localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
        localStorage.setItem("searchMovieName", keyword);
        localStorage.setItem("shortFilms", isShortFilms);
        setLoading(false);
        handleResize();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
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
    if (windowWidth >= SCREEN_ZIZE_1280) {
      setMovies(foundMovies.slice(MOVIES_LOAD_0, VISIBLE_MOVIES_12));
      setMoreCards(MOVIES_LOAD_3);
    } else if (
      windowWidth > SCREEN_ZIZE_480 &&
      windowWidth < SCREEN_ZIZE_1280
    ) {
      setMovies(foundMovies.slice(MOVIES_LOAD_0, VISIBLE_MOVIES_8));
      setMoreCards(MOVIES_LOAD_2);
    } else if (windowWidth <= SCREEN_ZIZE_480) {
      setMovies(foundMovies.slice(MOVIES_LOAD_0, VISIBLE_MOVIES_5));
      setMoreCards(MOVIES_LOAD_2);
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

  function handleSearch(keyword, isShortFilms) {
    searchMovie(keyword, isShortFilms);
  }

  function handleMovieSave(movie) {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
      });
  }

  function handleMovieDelete(card) {
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
        console.log(`Ошибка: ${err.status}`);
      });
  }

  function isSaved(card) {
    return savedMovies.some(
      (item) => item.movieId === card.id && item.owner === currentUser._id
    );
  }

  function onRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        err.status !== 400
          ? setErrorMessage(REQUEST_ERRORS.ERROR_409)
          : setErrorMessage(REQUEST_ERRORS.ERROR_DEFAULT);
        setTimeout(() => setErrorMessage(false), 3000);
      });
  }

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        auth.checkToken(res.token).then((res) => {
          if (res) {
            navigate("/movies");
            setLoggedIn(true);
          }
        });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
        setErrorMessage(REQUEST_ERRORS.ERROR_401);
        setTimeout(() => setErrorMessage(false), 3000);
      });
  }

  function onUpdateUser(name, email) {
    auth
      .updateUserInfo(name, email)
      .then((data) => {
        setIsMessageProfile(true);
        setTimeout(() => setIsMessageProfile(false), 2000);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
        setErrorMessage(err);
        setTimeout(() => setErrorMessage(false), 2000);
      });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("foundMovies");
    localStorage.removeItem("searchMovieName");
    localStorage.removeItem("shortFilms");
    setCurrentUser({});
    setLoggedIn(false);
    setErrorMessage(false);
    setMovies([]);
    setSavedMovies([]);
    navigate("/");
  }

  return (
    <div className="content">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
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
                  onMovieSave={handleMovieSave}
                  onMovieDelete={handleMovieDelete}
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
                  handleSearch={handleSearch}
                  defaultSearchValue={
                    localStorage.getItem("searchMovieName") || ""
                  }
                  loading={loading}
                  cards={savedMovies}
                  isSaved={isSaved}
                  onMovieDelete={handleMovieDelete}
                  serverError={serverError}
                ></SavedMovies>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  onUpdateUser={onUpdateUser}
                  handleLogout={handleLogout}
                  isMessageProfile={isMessageProfile}
                  errorMessage={errorMessage}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <Register onRegister={onRegister} errorMessage={errorMessage} />
            }
          />
          <Route
            path="/signin"
            element={
              <Login handleLogin={handleLogin} errorMessage={errorMessage} />
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
