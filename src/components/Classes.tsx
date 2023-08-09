import { myClasses } from "../data/classes";
import clase1 from "../assets/clase1.jpg";
import clase2 from "../assets/clase2.jpg";
import clase3 from "../assets/clase3.jpg";
import clase4 from "../assets/clase4.jpg";
import clase5 from "../assets/clase5.jpg";
import clase6 from "../assets/clase6.jpg";
import ImageComponent from "./ui/image";

const Classes = () => {
  return (
    <main className="clases">
      <h2 className="clases__heading">Próximas Clases</h2>

      <div className="clases__grid contenedor">
        {myClasses.map((clase, index) => (
          <div key={index} className="clase">
            <ImageComponent
              className="clase__imagen"
              imageUrl={
                clase.imagen === "clase1"
                  ? clase1
                  : clase.imagen === "clase2"
                  ? clase2
                  : clase.imagen === "clase3"
                  ? clase3
                  : clase.imagen === "clase4"
                  ? clase4
                  : clase.imagen === "clase5"
                  ? clase5
                  : clase6
              }
              alt="imagen curso"
            />
            <div className="clase__meta">
              <p className="clase__fecha">{clase.date}</p>
              <p className="clase__precio">{clase.price}</p>
            </div>
            <div className="clase__contenido">
              <h3 className="clase__nombre">{clase.content.title}</h3>
              <p className="clase__descripcion">{clase.content.description}</p>
              <p className="clase__texto">{clase.content.text}</p>
              <a className="clase__enlace" href="#">
                {clase.content.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Classes;
