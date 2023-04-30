import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {

    return (
      <div className="container mt-5">
        <h1 className="text-center mb-5">Sobre Nosotros</h1>
        <div className="row">
          <div className="col-md-6">
            <p>En nuestra joyería, nos enorgullecemos de ofrecer a nuestros clientes una experiencia única y personalizada en la compra de joyas. Nuestro equipo de expertos en joyería se dedica a seleccionar solo las piezas más finas y de alta calidad para que nuestros clientes puedan encontrar la joya perfecta para cualquier ocasión. Además de nuestra amplia selección de joyas, también ofrecemos servicios de reparación y personalización para asegurarnos de que cada pieza sea exactamente lo que nuestros clientes desean. Nos esforzamos por crear relaciones duraderas con nuestros clientes y para ello, nos aseguramos de tratar a cada persona que entra en nuestra tienda con la amabilidad y el respeto que se merecen. Visítenos en nuestra joyería en Costa Rica y descubra por qué somos la opción preferida de tantas personas para sus necesidades de joyería.</p>
          </div>
          <div className="col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/20/06/15/ponte-2421953_960_720.jpg"
              alt="Imagen de la joyería"
              className="img-fluid rounded"
              aria-label="Imagen de la joyería"
              aria-describedby="descripcion-imagen"
            />
            <div id="descripcion-imagen" className="sr-only">
              Imagen de nuestra joyería en Costa Rica. Proporcionamos una experiencia única y personalizada en la compra de joyas y ofrecemos servicios de reparación y personalización. Visítenos para descubrir por qué somos la opción preferida de tantas personas para sus necesidades de joyería.
            </div>
          </div>
        </div>
      </div>

      );
}