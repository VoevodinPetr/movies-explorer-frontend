import { Link } from "react-router-dom";
import "./Page404.css";

function Page404() {
  return (
    <section className="page-404">
      <h1 className="page-404__title">404</h1>
      <p className="page-404__subtitle">Страница не найдена</p>
      <Link className="page-404__link" to="/">
        Назад
      </Link>
    </section>
  );
}

export default Page404;
