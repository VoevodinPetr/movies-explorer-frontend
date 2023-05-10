import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header() {
  return (
    <header className="header section">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
