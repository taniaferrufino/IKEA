import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="list-group">
            <Link to="/customer/dashboard" className="list-group-item list-group-item-action active">Panel de control</Link>
            <Link to="/customer/orders" className="list-group-item list-group-item-action">Ordenes</Link>
            <Link to="/customer/wishlist" className="list-group-item list-group-item-action">Lista de deseo</Link>
            <Link to="/customer/Profile" className="list-group-item list-group-item-action">Perfil</Link>
            <Link to="/customer/add-address" className="list-group-item list-group-item-action">Direcciones</Link>
            <Link to="/" className="list-group-item list-group-item-action text-danger">Salir</Link>
        </div>
    )
}
export default SideBar
