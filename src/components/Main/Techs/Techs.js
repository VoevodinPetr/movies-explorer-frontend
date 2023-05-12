import "./Techs.css";

function Techs() {
  return (
    <section className="techs section">
      <h2 className="techs__about">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы&nbsp;освоили технологии, которые применили
        в&nbsp;дипломном проекте.
      </p>
      <ul className="techs__lists">
        <li className="techs__list"> HTML</li>
        <li className="techs__list"> CSS</li>
        <li className="techs__list"> JS</li>
        <li className="techs__list"> React</li>
        <li className="techs__list"> Git</li>
        <li className="techs__list"> Express.js</li>
        <li className="techs__list">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
