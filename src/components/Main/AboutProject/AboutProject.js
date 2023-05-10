import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project section">
      <h2 className="about-project__about">О проекте</h2>
      <div className="about-project__text">
        <div className="about-project__container">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности&nbsp;и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="about-project__container">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать,&nbsp;чтобы&nbsp;успешно защититься.
          </p>
        </div>
        <div className="about-project__time">
          <p className="about-project__period">1 неделя</p>
          <p className="about-project__period">4 недели</p>
          <p className="about-project__caption">Back-end</p>
          <p className="about-project__caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
