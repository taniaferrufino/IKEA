import { Link } from "react-router-dom";

function SellerSideBar() {
    return (
        <div className="list-group">
            <Link to="/seller/dashboard" className="list-group-item list-group-item-action active bg-warning text-center" style={{color:'black'}}>Panel de control</Link>
            <Link to="/seller/product" className="list-group-item list-group-item-action">Productos</Link>
            <Link to="/seller/AddProduct" className="list-group-item list-group-item-action">Add product</Link>
            <Link to="/seller/Orders"  className="list-group-item list-group-item-action">Orders</Link>
            <Link to="/seller/Customer"  className="list-group-item list-group-item-action">customer</Link>
            <Link to="/seller/Reports" className="list-group-item list-group-item-action">Reports</Link>
            <Link to="/seller/Profile" className="list-group-item list-group-item-action">Profile</Link>
            <Link to="/seller/ChangePassword" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/" className="list-group-item list-group-item-action text-white bg-danger text-center">log out</Link>
        </div>
    )
}
export default SellerSideBar