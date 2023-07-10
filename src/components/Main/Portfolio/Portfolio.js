import "./Portfolio.css";
import arrow from "../../../images/icon-стрелка.svg";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__lists">
        <li className="portfolio__list">
          <a className="portfolio__link hover-link" href="https://voevodinpetr.github.io/how-to-learn/index.html" target="_blank" rel="noreferrer">
            Статичный сайт
            <img className="portfolio__image" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li className="portfolio__list">
          <a className="portfolio__link hover-link" href="https://voevodinpetr.github.io/yet-another-project/index.html" target="_blank" rel="noreferrer">
            Адаптивный сайт
            <img className="portfolio__image" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li className="portfolio__list">
          <a className="portfolio__link hover-link" href="https://supermovies.nomoredomains.monster" target="_blank" rel="noreferrer">
            Одностраничное приложение
            <img className="portfolio__image" src={arrow} alt="стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
