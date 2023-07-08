const SCREEN_ZIZE_1280 = 1280;
const SCREEN_ZIZE_480 = 480;
const VISIBLE_MOVIES_5 = 5;
const VISIBLE_MOVIES_8 = 8;
const VISIBLE_MOVIES_12 = 12;
const MOVIES_LOAD_0 = 0;
const MOVIES_LOAD_2 = 2;
const MOVIES_LOAD_3 = 3;
const SHORT_FILM_DURATION = 40;

export {
  SCREEN_ZIZE_1280,
  SCREEN_ZIZE_480,
  VISIBLE_MOVIES_5,
  VISIBLE_MOVIES_8,
  VISIBLE_MOVIES_12,
  MOVIES_LOAD_0,
  MOVIES_LOAD_2,
  MOVIES_LOAD_3,
  SHORT_FILM_DURATION,
};

export const REQUEST_ERRORS = {
  ERROR_401: "Вы ввели неправильный логин или пароль.",
  ERROR_409: "Пользователь с таким email уже зарегистрирован.",
  ERROR_DEFAULT: "Что-то пошло не так...",
  ERROR_500: "На сервере произошла ошибка",
  ERROR_UPDATE: "При обновлении профиля произошла ошибка",
};

export const SEARCH_ERRORS = {
  NOT_FOUND: "Ничего не найдено",
  MOVIES_NOT_RECEIVED:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
};
