import logo2 from "../../../images/landing-logo.svg";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <>
      <section className="promo section">
        <div className="promo__conteiner">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className="promo__logo" src={logo2} alt="Логотип" />
      </section>
      <NavTab />
    </>
  );
}

export default Promo;
