import { BASE_URL } from "./config";
class MainApi {
  constructor({ address }) {
    this._address = address;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._address}/movies`, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then(this._checkResponse);
  }

  addMovie(movie) {
    return fetch(`${this._address}/movies`, {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        country: movie.country || "Нет данных",
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink || "https://www.youtube.com",
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU || "Нет данных",
        nameEN: movie.nameEN || "Нет данных",
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._address}/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  address: BASE_URL,
});

export default mainApi;
