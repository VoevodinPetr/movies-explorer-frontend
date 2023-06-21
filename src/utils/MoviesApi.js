export const MOVIES_API = `https://api.nomoreparties.co/beatfilm-movies`;

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getApiMovies = () => {
  return fetch(MOVIES_API, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
