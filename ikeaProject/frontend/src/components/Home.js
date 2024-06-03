import logo from "../logo.svg";
import { Link } from "react-router-dom";
import SingleProduct from './SingleProduct';
import { useEffect, useState } from "react";
import marlon from "../image/Marlon.png";
import tania from "../image/Tania.png";
import mario from "../image/Diego.png";
import Mayi from "../image/Mayi.jpg"
import Vendor from "./vendor/Vendor";

function Home() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + "/products/");
    fetchDataVendor(baseUrl + "/vendors/");
  }, []);

  function fetchData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results || []);
        setTotalResult(data.count || 0);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  function fetchDataVendor(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setVendors(data.results || []); // Assuming your API returns the vendors under 'results'
        setTotalResult(data.count || 0);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
      });
  }

  return (
    <main className="mt-4">
      <div className="container">
        {/* latest product section */}
        <h3 className="mt-4"> Ultimos modelos <Link to="/products" className="float-end btn btn-danger"> Ver serigrafiados disponibles{" "}<i className="fa-solid fa-arrow-right-long"></i></Link></h3>
        <div className="row mb-4">
          {products.map((product) => <SingleProduct key={product.id} product={product} />)}
        </div>

        {/* latest category section */}
        <h3 className="mt-4">categorias populares
          <a href="#" className="float-end btn btn-danger">
            Ver todos las categorias populares{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>
        {/* end latest category section */}
        <div className="row mb-4 ">
          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Termo</h4>
              </div>
              <div className="card-footer">Products downloads: 202555</div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre categoria</h4>
              </div>
              <div className="card-footer">Products downloads: 202555</div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-center">Camiseta</h4>
              </div>
              <div className="card-footer text-center ">producto en oferta</div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre categoria</h4>
              </div>
              <div className="card-footer">Products downloads: 202555</div>
            </div>
          </div>
          {/* product box end */}
        </div>
        {/* end product section */}

        {/* latest vendors product section */}
        <h3 className="mt-4">
          Vendedores populares
          <Link to="vendors/" className="float-end btn btn-danger">
            Ver todos los vendedores populares{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          {vendors.map((vendor) => <Vendor key={vendor.id} vendor={vendor} />)}
        </div>
        {/* end product section */}
      </div>

      {/* Carusel */}
      <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-warning text-dark p-5" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>100% recomendado</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className='fa fa-star text-white'></i>
                <i className='fa fa-star text-white'></i>
                <i className='fa fa-star text-white'></i>
                <cite title="Source Title" className="text-dark"> Mayra Rodriguez</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>completamente satisfecha con el servicio</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className='fa fa-star text-white'></i>
                <i className='fa fa-star text-white'></i>
                <i className='fa fa-star text-white'></i>
                <i className='fa fa-star text-white'></i>
                <cite title="Source Title" className="text-dark">Tania Tellez</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Excelente atencion, la calidad de la camiseta es muy buena</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className='fa fa-star text-white'></i>
                <i className='fa fa-star text-white'></i>
                <cite title="Source Title" className="text-dark"> Maria Rocha</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* EndRating and Reviews section  */}
    </main>
  );
}

export default Home;
