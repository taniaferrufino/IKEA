// import { Link } from "react-router-dom";
// import logo from "../logo.svg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductDetail() {
    const baseUrl = "http://127.0.0.1:8000/api"; 
    const [productData, setProductData] = useState([]);
    const [productImgs, setproductImgs] = useState([]);
    const [productTags, setproductTags] = useState([]);
    const { product_id } = useParams();

    useEffect(() => {
        fetchData(baseUrl + "/product/" + product_id);
    }, [product_id]);

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProductData(data);
                setproductImgs(data.product_imgs);
                setproductTags(data.tags ? data.tags.split(',') : []);
            });
    }
    const tagsLinks = [];
    for (let i = 0; i < productTags.length; i++) {
    let tag = productTags[i].trim();
    tagsLinks.push(
        <Link 
        className="badge bg-secondary text-white me-1" 
        to={`/products/${tag}`}
        >
        {tag}
        </Link>
    );
    }

     console.log(productData.product_imgs);

    return (
        <section className="container mt-4">
          <h3 className="mb-4">Detalle del Producto</h3>
          <div className="row">
            <div className="col-4">
              <div id="relatedThumbnailsSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                {
                    productImgs.map((img, index) => {
                        if (index === 0) {
                            return (
                                <div className="carousel-item active">
                                    <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                                </div>
                            );
                        } else {
                            return (
                                <div className="carousel-item">
                                    <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                                </div>
                            );
                        }
                    })
                }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
                <div className="col-8">
                    <h4>{productData.title}</h4>
                    <p>{productData.detail}</p>
                    <p className="text-muted">Precio:C$ {productData.price}</p>
                    <p className="mt-3">
                        <button title="Demo" target="_blank" className="btn btn-dark">
                            <i className="fa-solid fa-cart-plus"></i> Demo
                        </button>
                        <button title="Agregar al carrito" target="_blank" className="btn btn-primary ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Agregar al carrito
                        </button>
                        <button title="Comprar ahora" target="_blank" className="btn btn-success ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Comprar ahora
                        </button>
                        <button title="Agregar a la lista" target="_blank" className="btn btn-danger ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Agregar a la lista
                        </button>
                    </p>
                    <hr />
                    <div className="product-tags mt-4">
                        <h5>Tags</h5>
                        <p>
                            {tagsLinks}
                            </p>
                    </div>
                </div>
            </div>
            {/* Productos relacionados */}
            <h3 className="mt-5 mb-3">Productos Relacionados</h3>
            <div id="relatedProductSlider" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row mb-5">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-5">
                     </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-5">
                      </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Fin de productos relacionados */}
        </section>
    );
}

export default ProductDetail;