import { Link } from "react-router-dom";
import "./Logo.css";
import logo from '../../../images/logo.svg';

function Logo() {
    return (
      <Link to="/">
        <img className="logo hover-link" src={logo} alt="Логотип сайта" />
      </Link>
    )
  }

export default Logo;
