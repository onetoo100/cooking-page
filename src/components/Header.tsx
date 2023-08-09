import ImageComponent from "./ui/image";
import logo from "../assets/logo.svg";
import { navigatePages } from "../lib/functions";

const Header = () => {
  return (
    <header className="header contenedor" id="header">
      <div className="header__grid">
        <div className="header__logo">
          <ImageComponent imageUrl={logo} />
        </div>

        <nav className="navegacion">
          <a className="navegacion__link" onClick={() => navigatePages("us")}>
            Nosotros
          </a>
          <a className="navegacion__link">Blog</a>
          <a
            className="navegacion__link"
            onClick={() => navigatePages("classes")}
          >
            Clases
          </a>
          <a
            className="navegacion__link"
            onClick={() => navigatePages("classes")}
          >
            Galería
          </a>
          <a className="navegacion__link">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
