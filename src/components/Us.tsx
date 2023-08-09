import ImageComponent from "./ui/image";
import chefIcon from "../assets/icono_chef.png";
import wineIcon from "../assets/icono_vino.png";
import menuIcon from "../assets/icono_menu.png";

const Us = () => {
  return (
    <section className="nosotros contenedor">
      <h2 className="nosotros__heading">¿Porqué estudiar con nosotros?</h2>

      <div className="nosotros__grid">
        <div className="nosotros__bloque">
          <ImageComponent
            imageUrl={chefIcon}
            className="nosotros__imagen"
            alt="imagen icono chef"
          />
          <h3 className="nosotros__bloque-heading">Chef’s Especialistas</h3>
          <p className="nosotros__bloque-texto">
            Los mejores chef’s que han trabajado en los mejores restaurants de
            Europa.
          </p>
        </div>
        <div className="nosotros__bloque">
          <ImageComponent
            imageUrl={wineIcon}
            className="nosotros__imagen"
            alt="imagen icono vino"
          />
          <h3 className="nosotros__bloque-heading">
            Incluye todo sobre Bebidas
          </h3>
          <p className="nosotros__bloque-texto">
            Además de la cocina, incluimos en el programa todo lo relacionado a
            bebidas.
          </p>
        </div>
        <div className="nosotros__bloque">
          <ImageComponent
            imageUrl={menuIcon}
            className="nosotros__imagen"
            alt="imagen icono menu"
          />
          <h3 className="nosotros__bloque-heading">Siempre Actualizado</h3>
          <p className="nosotros__bloque-texto">
            El Programa se actualiza constamemente con nuevos platillos y
            técnicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Us;
