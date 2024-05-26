import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark2 bg-warning">

      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            MayiGRAPHY
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Category
              </Link>
            </li>
            {/* Dropdown */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mi cuenta
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/customer/register">
                    Registro
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/customer/login">
                    Acceder
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="/customer/dashboard">
                    Panel de control
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/customer/logout">
                    Cerrar sesión
                  </Link>
                </li>
              </ul>
            </li>
            {/* End Dropdown */}

            {/* Dropdown */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                vendedor
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/seller/register">
                    Registro
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/seller/login">
                    Acceder
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="/seller/dashboard">
                    Panel de control
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/customer/logout">
                    Cerrar sesión
                  </Link>
                </li>
              </ul>
            </li>

            {/* End dropdown */}
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                Mi carrito(4)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;