import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <p className="footer__copyright">&copy; 2023</p>
      <nav className="footer__links hover-link">
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <a href="https://practicum.yandex.ru/" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a href="https://github.com/VoevodinPetr/movies-explorer-frontend" className="footer__link">
              Github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
