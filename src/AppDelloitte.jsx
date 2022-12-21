import React from 'react';
import logo from './img/Logo-Danasoft.png';
import facebook from './img/facebook-png.png';
import instagram from './img/instagram-png.png';
import email from './img/email-png.png';
import whatsapp from './img/whatsapp-png.png';

import './App.css';

const App = () => (
  <div className="App">
    <div className="home">
      <div className="home__container">
        {/* <!-- Imagen inicial --> */}
        <div className="home__begin">
          <img className="img__begin" src={logo} alt="" />
        </div>
        {/* <!-- Imagen inicial --> */}

        {/* <!-- Contenido principal --> */}
        <div className="home__main">
          <h1>Titulo de la notificación</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit augue.</p>

          {/* <!-- Gracias --> */}
          <p>Gracias por tu tiempo.</p>
          <p className="p__thanks">
            <i>Atentamente:</i>
            <br />
            Equipo Danasoft
          </p>

          {/* <!-- Botón --> */}
          <a className="classButton" href="https://www.danasoft.com/">
            Danasoft
          </a>
        </div>
        {/* <!-- Contenido principal --> */}

        {/* <!-- Footer --> */}
        <div className="home__footer">
          {/* <!-- Redes sociales --> */}
          <a href="https://www.facebook.com/wil.chino.9" className="container">
            <img src={facebook} className="img__footer" alt="logo" />
          </a>
          <a href="https://www.instagram.com/danasoft/" className="container">
            <img src={instagram} className="img__footer" alt="logo" />
          </a>
          <a href="https://wa.me/51977712001" className="container">
            <img src={whatsapp} className="img__footer" alt="logo" />
          </a>
          <a href="mailto:contacto@danasoft.com" className="container">
            <img src={email} className="img__footer" alt="logo" />
          </a>
          {/* <!-- Redes sociales --> */}

          <h4>Soporte</h4>
          <p className="p__support">
            Comunícate con nosotros por los siguientes medios:
            <br />
            Correo:
            <a className="a__footer" href="mailto:proyectos@danasoft.com">
              proyectos@danasoft.com
            </a>
            <br />
            Whatsapp:
            <a className="a__footer" href="https://wa.me/51977712001">
              +51 977712001
            </a>
            <br />
          </p>
          <p className="p__copyright">© 2022 Danasoft, todos los derechos reservados.</p>
        </div>
        {/* <!-- Footer --> */}
      </div>
    </div>
  </div>
);
export default App;
