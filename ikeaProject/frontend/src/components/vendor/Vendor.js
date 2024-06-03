import { Link } from "react-router-dom";

function Vendor(props) {
  return (
    <div className="col-12 col-md-3 mb-2">
      <div className="card">
        <Link to={`/vendor/${props.vendor.user}/${props.vendor.id}`}>
          <img src={props.vendor.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/vendor/${props.vendor.user}/${props.vendor.id}`}>{props.vendor.user}</Link>
          </h5>
          <div className="card-footer">
            <button
              title="Agregar al carrito"
              className="btn btn-success btn-sm"
            > 
              <i className="fa-solid fa-cart-plus"></i>
            </button>
            <button
              title="Agregar a la lista"
              className="btn btn-danger btn-sm ms-1">
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendor;
