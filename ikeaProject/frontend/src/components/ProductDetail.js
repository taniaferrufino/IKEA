import { Link } from "react-router-dom";
import logo from "../logo.svg";
// import SingleProduct from  "./SingleProduct"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function ProductDetail(){
    const baseUrl = "http://127.0.0.1:8000/api"
    const [productData, setProductData] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    //paginacion
    const { product_slug, product_id } = useParams();

    useEffect(() => {
        fetchData(baseUrl + "/product/" + product_id);
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setProductData(data.data)
                setProductImgs(data.data.product_imgs)
                
            });
    }

    console.log(productData.product_imgs);
    return (<section className="container mt-4">
        <h3 className=" mb-4">Detalle del Producto</h3>
            <div className="row">

                <div className="col-4">
                <div id="relatedThumbnailSlider" className="carousel slide bg- slide carousel-fade" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                           <img src={logo} className="img-thumbnail" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src={logo} className="img-thumbnail" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src={logo} className="img-thumbnail" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <div className="col-8">
                    <h3>{productData.title}</h3>
                    <p className="text-muted">Precio:{productData.price}</p>
                    <p>{productData.Detail}</p>
                    <button title="Demo" target="_blanck" className="btn btn-dark">
                        <i className="fa-solid fa-cart-plus"></i>Demo
                    </button>
                    <button title="Agregar al carrito" target="_blanck" className="btn btn-primary ms-1">
                        <i className="fa-solid fa-cart-plus"></i>Agregar al carrito
                    </button>
                    <button title="Comprar ahora" target="_blanck" className="btn btn-success ms-1">
                        <i className="fa-solid fa-cart-plus"></i>Comprar ahora
                    </button>
                    <button title="gregar a la lista" target="_blanck" className="btn btn-danger ms-1">
                        <i className="fa-solid fa-cart-plus"></i>Agregar a la lista
                    </button>
                </div>

            </div>

            {/* Related carousel products */}
            <h3 className="mt-5 mb-3">Productos Relacionados</h3>
            <div id="relatedProductSlider" className="carousel slide bg-light" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row mb-5">

                        {/* <SingleProduct title="Python Product 1 "/>
                        <SingleProduct title="Python Product 2 "/>
                        <SingleProduct title="Python Product 3 "/>
                        <SingleProduct title="Python Product 4 "/> */}
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row mb-5">
                        {/* <SingleProduct title="Python Product 1 "/>
                        <SingleProduct title="Python Product 2 "/>
                        <SingleProduct title="Python Product 3 "/>
                        <SingleProduct title="Python Product 4 "/> */}
                </div>
                </div>
                <div className="carousel-item">
                <div className="row mb-5">
                        {/* <SingleProduct title="Python Product 1 "/>
                        <SingleProduct title="Python Product 2 "/>
                        <SingleProduct title="Python Product 3 "/>
                        <SingleProduct title="Python Product 4 "/> */}
                </div>
                </div>
            </div>
            </div>
    </section>
    );
}
export default ProductDetail    