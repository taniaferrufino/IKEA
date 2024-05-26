import { Link } from "react-router-dom";
import abanico from "../../abanico.jpg";

import SellerSideBar from "./SellerSidebar";

function VendorOrders(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="text-center">
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Estado producto</th>
                                        <th>Acción</th>
                                        <th>Verificacion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link>
                                                <img src={abanico} className="img-thumbnail" width="80" alt="..." />
                                            </Link>
                                            <p className="text-center">
                                                <Link>Abanico</Link>
                                            </p>
                                        </td>
                                        <td className="text-center">$. 5000</td>
                                        <td className="text-center">Pendiente</td>
                                        <td>
                                            <span className="text-success">
                                                <i className="fa fa-check-circle"></i> completado
                                            </span>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Cambiar Estado
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Aprobado</a></li>
                                                    <li><a className="dropdown-item" href="#">Enviado</a></li>
                                                    <li><a className="dropdown-item" href="#">Completado</a></li>
                                                </ul>
                                            </div>
                                        </td>                                  
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link>
                                                <img src={abanico} className="img-thumbnail" width="80" alt="..." />
                                            </Link>
                                            <p className="text-center">
                                                <Link>Abanico</Link>
                                            </p>
                                        </td>
                                        <td className="text-center">$. 5000</td>
                                        <td className="text-center">Pendiente</td>
                                        <td>
                                            <span className="text-success">
                                                <i className="fa fa-check-circle text-center"></i> completado
                                            </span>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Cambiar Estado
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item text-center" href="#">Aprobado</a></li>
                                                    <li><a className="dropdown-item text-center" href="#">Enviado</a></li>
                                                    <li><a className="dropdown-item text-center" href="#">Completado</a></li>
                                                </ul>
                                            </div>
                                        </td>                                  
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorOrders;