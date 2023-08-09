import { navigatePages } from "../lib/functions";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__grid contenedor">
        <nav className="navegacion">
          <a className="navegacion__link" onClick={() => navigatePages("us")}>
            Nosotros
          </a>
          <a className="navegacion__link" href="#">
            Blog
          </a>
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
          <a className="navegacion__link" href="#">
            Contacto
          </a>
        </nav>

        <p className="footer__copyright">Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
