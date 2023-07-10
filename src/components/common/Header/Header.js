import Logo from "../Logo/Logo";
import "./Header.css";

function Header({ children, color }) {
  return (
    <header className={`header section ${color}`}>
      <div className="header__container">
        <Logo />
        {children}
      </div>
    </header>
  );
}

export default Header;
