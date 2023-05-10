import avatar from "../../../images/avatar.svg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me section">
      <h2 className="about-me__title">Студент</h2>
      <img src={avatar} alt="Фото." className="about-me__photo" />
      <div className="about-me__info">
        <h3 className="about-me__name">Виталий</h3>
        <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <p className="about-me__technology">Github</p>
      </div>
    </section>
  );
}

export default AboutMe;
