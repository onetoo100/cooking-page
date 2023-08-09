const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
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

        <p className="footer__copyright">Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
