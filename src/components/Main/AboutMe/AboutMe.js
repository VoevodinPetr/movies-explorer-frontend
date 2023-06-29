import avatar from "../../../images/avatar.svg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me section">
      <h2 className="about-me__title">Студент</h2>
      <img src={avatar} alt="Фото." className="about-me__photo" />
      <div className="about-me__info">
        <h3 className="about-me__name">Петр</h3>
        <p className="about-me__job">Фронтенд-разработчик, 35 лет</p>
        <p className="about-me__text">
          Я родился и живу в Татарстане, закончил факультет автоматические системы обработки информации и управления. Я
          люблю слушать музыку, а ещё велоспортом. Недавно начал кодить. С
          2016 года работал в компании «Хендэ мотор мануфактуринг рус». 
        </p>
        <a
          className="about-me__technology hover-link"
          href="https://github.com/VoevodinPetr"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
