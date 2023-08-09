import ImageComponent from "./ui/image";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header contenedor">
      <div className="header__grid">
        <div className="header__logo">
          <ImageComponent imageUrl={logo} />
        </div>

        <nav className="navegacion">
          <a className="navegacion__link" href="#">
            Nosotros
          </a>
          <a className="navegacion__link" href="#">
            Blog
          </a>
          <a className="navegacion__link" href="#">
            Clases
          </a>
          <a className="navegacion__link" href="#">
            Galería
          </a>
          <a className="navegacion__link" href="#">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
