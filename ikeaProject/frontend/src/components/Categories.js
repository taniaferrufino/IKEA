import { Link } from "react-router-dom";

import logo from '../logo.svg'
import { useState, useEffect } from "react";


function Categories() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [categories, setCategories] = useState([]);
    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        fetchData(`${baseUrl}/categories/`);
    }, []);

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCategories(data.data);
                setTotalResult(data.count);
            });
    }

    function changeUrl(url) {
        fetchData(url);
    }

    const links = [];
    const limit = 4;
    const totalLinks = Math.ceil(totalResult / limit);

    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item" key={i}>
                <Link
                    onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)}
                    to={`/categories/?page=${i}`}
                    className="page-link"
                >
                    {i}
                </Link>
            </li>
        );
    }  
    return (
        <section className="container mt-4">
            {/* latest category section */}
            <h3 className="mb-4">Todas las categorias
            </h3>
            <div className="row mb-2">
                {categories.map((category) => (
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className=" card-body">
                                <h4 className="card-title">
                                <Link to={`/category/${category.title}/${category.id}`} style={{textDecoration : 'none'}}>{category.title}</Link>
                                </h4>
                            </div>
                            <div className="card-footer">Descargar producto 1234</div>
                        </div>
                    </div>
                ))}

            </div>
            {/* end latest category section */}

            {/* pagiantion */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {links}
            </ul>
            </nav>

            {/* end pagiantion */}
                
        </section>
    );
}
export default Categories;