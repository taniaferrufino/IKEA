import { Link } from "react-router-dom";

function SingleProduct(props) {
  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="card h-100 d-flex flex-column">
        <Link to={`/product/${props.product.slug}/${props.product.id}`}>
          <img 
            src={props.product.image} 
            className="card-img-top" 
            alt={props.product.title} 
            style={{ objectFit: 'cover', height: '200px' }} 
          />
        </Link>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title text-center">
              <Link className="text" to={`/product/${props.product.title}/${props.product.id}`} style={{textDecoration : 'none'}}>{props.product.title}</Link>
            </h5>
            <h5 className="card-title text-muted">Precio: c$ {props.product.price}</h5>
          </div>
          <div className="mt-auto">
            <div className="d-flex justify-content-end">
              <button
                title="Agregar al carrito"
                className="btn btn-success btn-sm me-1"
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
              <button
                title="Agregar a la lista"
                className="btn btn-danger btn-sm"
              >
                <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
