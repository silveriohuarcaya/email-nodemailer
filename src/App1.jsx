import './App.css';

/* eslint-disable max-len */
const App = () => (
  <body data-spy="scroll" data-target="#navbar" data-offset="57">
    {/* <!-- Header --> */}
    <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="www.google.com#">
          <img src="../img/platzi-logo.png" alt="Platzi logo" />
          Conf Hawaii
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#main">
                La conferencia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#speakers">
                Las oradores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#place-time">
                El lugar y la fecha
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#conviertete-en-orador">
                Conviértete en orador
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-platzi" href="www.google.com#" data-toggle="modal" data-target="#modalCompra">
                Comprar tickets
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <!-- /Header --> */}

    {/* <!-- Main --> */}
    <main id="main">
      <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="../img/hawaii.jpg" alt="Hawaii 1" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../img/hawaii2.jpg" alt="Hawaii 2" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../img/hawaii3.jpeg" alt="Hawaii 3" />
          </div>
          <div className="overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 offset-md-6 text-center text-md-right">
                  <h1>Platzi Conf Hawaii</h1>
                  <p className="d-none d-md-block">
                    Platzi Conf llega por pimera vez a Hawaii! Un evento para compartir con nuestra comunidad el
                    conocimiento y experiencia de los expertos que están creando el futuro de internet. Ven a conocer a
                    miembros del Team Platzi, a otros estudiantes de Platzi y a los oradores de primer nivel que tenemos
                    para ti. Te esperamos!
                  </p>
                  <a href="www.google.com#" className="btn btn-outline-light" data-toggle="modal">
                    Quiero ser orador
                  </a>
                  <button type="button" className="btn btn-platzi" data-toggle="modal" data-target="#modalCompra">
                    Comprar tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    {/* <!-- /Main --> */}

    {/* <!-- Speakers --> */}
    <section id="speakers" className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col text-center text-uppercase">
            <small>Conoce a los</small>
            <h2>Oradores</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src="assets/speakers/sacha.jpg" alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-warning">JavaScript</span>
                  <span className="badge badge-info">React</span>
                </div>
                <h5 className="card-title">Sacha Lifszyc</h5>
                <p className="card-text">
                  Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus
                  tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src="assets/speakers/leonidas2.jpeg" alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-warning">JavaScript</span>
                  <span className="badge badge-info">React</span>
                </div>
                <h5 className="card-title">Leonidas Esteban</h5>
                <p className="card-text">
                  Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus
                  tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src="assets/speakers/freddy.jpeg" alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-secondary">Negocios</span>
                  <span className="badge badge-danger">Startups</span>
                </div>
                <h5 className="card-title">Freddy Vega</h5>
                <p className="card-text">
                  Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus
                  tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src="assets/speakers/cvander.jpeg" alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-secondary">Negocios</span>
                  <span className="badge badge-danger">Startups</span>
                </div>
                <h5 className="card-title">Christian Van Der H.</h5>
                <p className="card-text">
                  Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus
                  tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- /Speakers --> */}

    {/* <!-- Lugar y fecha --> */}
    <section id="place-time">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 pl-0 pr-0">
            <img src="../img/honolulu.jpg" alt="Honolulu" />
          </div>
          <div className="col-12 col-lg-6 pt-4 pb-4">
            <h2>Honolulu - Octubre 2025</h2>
            <p>
              Honolulu o Honolulú es la capital y localidad más grande del estado de Hawái, en los Estados Unidos.
              Honolulu es la más sureña de entre las principales ciudades estadounidenses. Aunque el nombre de Honolulu
              se refiere al área urbana en la costa sureste de la isla de Oahu, la ciudad y el condado de Honolulu han
              formado una ciudad-condado consolidada que cubre toda la isla (aproximadamente 600 km² de superficie).
            </p>
            <a className="btn btn-outline-light" href="https://es.wikipedia.org/wiki/Honolulu">
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- /Lugar y fecha --> */}

    {/* <!-- Conviértete en orador --> */}
    <section id="conviertete-en-orador" className="pt-3 pb-3">
      <div className="container">
        <div className="row">
          <div className="col text-uppercase text-center">
            <small>Conviértete en un</small>
            <h2>Orador</h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            Anótate como orador para dar una{' '}
            <abbr data-toggle="tooltip" title="Charlas de 5 minutos">
              charla ignite
            </abbr>
            . Cuéntanos de qué quieres hablar!
          </div>
        </div>
        <div className="row">
          <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
            <form>
              <div className="form-row">
                <div className="form-group col-12 col-md-6">
                  <input type="text" className="form-control" placeholder="Nombre" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input type="text" className="form-control" placeholder="Apellido" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <textarea
                    name="text"
                    className="form-control form-control-lg"
                    placeholder="Sobre qué quieres hablar?"
                  />
                  <small className="form-text text-muted">Recuerda incluir un título para tu charla</small>
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <button type="button" className="btn btn-platzi btn-block">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- /Conviértete en orador --> */}

    {/* <!-- Footer --> */}
    <footer id="footer" className="pb-4 pt-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-lg">
            <a href="www.google.com#">Preguntas frecuentes</a>
          </div>
          <div className="col-12 col-lg">
            <a href="www.google.com#">Contáctanos</a>
          </div>
          <div className="col-12 col-lg">
            <a href="www.google.com#">Prensa</a>
          </div>
          <div className="col-12 col-lg">
            <a href="www.google.com#">Conferencias</a>
          </div>
          <div className="col-12 col-lg">
            <a href="www.google.com#">Términos y condiciones</a>
          </div>
          <div className="col-12 col-lg">
            <a href="www.google.com#">Privacidad</a>
          </div>
          <div className="col-12 col-lg">
            <a href="www.google.com#">Estudiantes</a>
          </div>
        </div>
      </div>
    </footer>
    {/* <!-- /Footer --> */}

    {/* <!-- Modal --> */}
    <div
      className="modal fade"
      id="modalCompra"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Comprar tickets
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-row">
                <div className="form-group col">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        @
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="alert alert-warning" role="alert">
              Recibirás un correo de confirmación si sales sorteado
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Cancelar
            </button>
            <button type="button" className="btn btn-platzi">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /Modal --> */}
  </body>
);
export default App;
