import { Link } from "react-router-dom";

import logo from '../logo.svg'
import { useState, useEffect } from "react";


function Categories(props) {
    const baseUrl = "http://127.0.0.1:8000/api"
    const [categories, setCategories] = useState([]);

    //paginacion
    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        fetchData(baseUrl + "/categories");
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.data);
                setTotalResult(data.count);
            });
    }

    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    var links = [];
    var limit = 1;
    var totalLinks = totalResult / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item">
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
                            <img src={logo} className="card-img-top" alt={category.title} />
                            <div className=" card-body">
                                <h4 className="card-title">
                                    <Link to={`/category/${category.title}/${category.id}`}> {category.title}</Link>
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

            {/* end pagination */}

        </section>
    );
}
export default Categories;