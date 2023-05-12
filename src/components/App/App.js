import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../User/Profile/Profile";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
