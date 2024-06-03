import SingleProduct from './SingleProduct';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CategoryProducts() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { category_slug, category_id } = useParams();  

    useEffect(() => {
        if (category_id) {
            fetchData(`${baseUrl}/products?category=${category_id}`);
        }
    }, [category_id]);

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data.results); 
                setTotalResult(data.count);
            })
    }
        
    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    const links = [];
    const limit = 4; 
    const totalLinks = totalResult / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item" >
                <Link
                    onClick={() => changeUrl(`${baseUrl}/products?category=${category_id}&page=${i}`)}
                    to={`/category/${category_slug}/${category_id}/?page=${i}`}
                    className="page-link"
                >
                    {i}
                </Link>                                                                                      
            </li>
        );
    }

    return (
        <section className="container mt-4">
            <h3 className="mb-4">Todos los Productos de {category_slug}</h3>
            <div className="row mb-4">
                {products.map((product) => (
                    <SingleProduct product={product} />
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">{links}</ul>
            </nav>
        </section>
    );
}

export default CategoryProducts;