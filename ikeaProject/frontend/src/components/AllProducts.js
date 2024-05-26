import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SingleProduct from "./SingleProduct";
function AllProduct(props) {
    const baseUrl = "http://127.0.0.1:8000/api";
    const [products, setProducts] = useState([]);
    //pagination
    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        fetchData(baseUrl + "/products")
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.data);
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
                    onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)}
                    to={`/products/?page=${i}`}
                    className="page-link">
                    {i}
                </Link>

            </li>
        );
    }

    return (
        <section className="container mt-4">
            <h3 className="mb-4">< span className=" text-success"></span> Python Products </h3>

            <div className="row mb-4">
                {products.map((product) =>(
                    <SingleProduct product={product} />
                ))};
                
            </div>

            {/* pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination">{links}</ul>
            </nav>

            {/* end pagination */}

        </section>
    )
}
export default AllProduct