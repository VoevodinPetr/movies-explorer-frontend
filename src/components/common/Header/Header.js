import Logo from "../Logo/Logo";
import "./Header.css";

function Header({ children, color, location }) {
  return (
    <header className={`header section ${color}`}>
      <div className={`header__container ${location}`}>
        <Logo />
        {children}
      </div>
    </header>
  );
}

export default Header;
