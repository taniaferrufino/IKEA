
import { Link } from "react-router-dom";
import logo from "../image/Mayigraphy.svg"
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ width: '80px', background: 'none' }} />
                </Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-dark" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-dark" to="/categories">Categorias</Link>
                    </li>
                    {/* dorpdown */}
                    <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mi cuenta
                        </a>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/customer/register">Registro</Link></li>
                            <li><Link class="dropdown-item" to="/customer/login">Acceder</Link></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><Link class="dropdown-item" to="/customer/dashboard">Panel de control</Link></li>
                            <li><Link class="dropdown-item" to="/customer/logout">Cerrar Sesion</Link></li>
                        </ul>
                    </li>
                    {/* end dorpdown */}
                    <li className="nav-item">
                    <Link className="nav-link text-dark" to="/checkout">Mi carrito(4)</Link>
                    </li>
                </ul>
                </div>
            </div>
      </nav>
    );
}

export default Header