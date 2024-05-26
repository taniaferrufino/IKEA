import SellerSideBar from "./SellerSidebar";

function SellerDashboard(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar />
                </div>
                <div className="col-md-9 col-12 mb-2"> 
                    <div className="row"> 
                        <div className="col-md-4 mb-2">
                            <div className="card shadow bg-warning">
                                
                                <div className="card-body text-center">
                                <h4>Pedidos Totales</h4>
                                <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card bg-warning">
                                <div className="card-body text-center">
                                    <h4>Ordenes Totales</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card bg-warning">
                                <div className="card-body text-center">
                                    <h4>Total customer</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerDashboard;