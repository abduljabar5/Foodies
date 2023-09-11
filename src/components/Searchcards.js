import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Search } from '../api/search';
import image from '../style.css/arrow.svg';

export default function Searchcards() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("term");

    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const locations = "minneapolis";

    useEffect(() => {
        const fetchData = async () => {
            const data = await Search(locations, searchTerm);
            setResults(data.businesses);
        };

        fetchData();
    }, [searchTerm]);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = results.slice(firstItemIndex, lastItemIndex);

    const totalPages = Math.ceil(results.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container">

            <div className="row">
                {currentItems.map((item) => (
                    <div className="col-lg-12 mb-4" key={item.id}>
                        <div className="row">
                            {/* Left side - Search results */}
                            <div className="col-lg-8">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-5">
                                            <div className="image" style={{ height: "300px", overflow: "hidden" }}>
                                                <img src={item.image_url} alt={item.name} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                            </div>


                                        </div>
                                        <div className="col-lg-6 col-sm-7">
                                            <div className="right-content">
                                                <h4>{item.name}</h4>
                                                <span>
                                                    {item.categories.length > 0
                                                        ? item.categories.map((category, index) => (
                                                            <span key={index}>
                                                                {category.title}
                                                                {(index !== item.categories.length - 1) && ', '}
                                                            </span>
                                                        ))
                                                        : 'Category Not Available'
                                                    }
                                                </span>

                                                <p>
                                                    {item.location.address1}, {item.location.city}
                                                </p>
                                                <ul className="info d-flex">
                                                    <li className="d-flex align-items-center">
                                                        <i className="fa fa-phone mr-2"></i>
                                                        <img src='https://www.svgrepo.com/show/6064/phone-call.svg' style={{ width: '25px' }} alt="Phone Icon" className="mr-2" />
                                                        <a href={`tel:${item.display_phone}`}>{item.display_phone}</a>
                                                    </li>


                                                    <li>
                                                        <i className="fa fa-globe" /> {item.price}
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" /> {item.rating} Stars
                                                    </li>
                                                </ul>
                                                <div className="text-button">
                                                    <a href={item.url} className='px-4 py-2 rounded-full color' target="_blank" rel="noreferrer">
                                                        Vist on yelp <i className="fa fa-arrow-right" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right side - Google Maps */}
                            <div className="col-lg-4" style={{ position: 'relative' }}>
                                <iframe
                                    width="100%"
                                    height="250px"
                                    frameborder="0"
                                    style={{ border: 0, borderRadius: 23 }}
                                    allowfullscreen=""
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(item.name)}&z=15&output=embed`}>
                                </iframe>


                                <a href={`https://www.google.com/maps/search/${encodeURIComponent(item.name)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="frosted-button flex items-center">
                                    Get Directions
                                    <img src={image} alt="Directions Icon" className="ml-2" style={{ width: "20px", height: "20px" }} />
                                </a>

                            </div>

                        </div>
                    </div>
                ))}
                <div className="col-lg-12">
                    <ul className="page-numbers">
                        {/* {currentPage > 1 && 
    <li>
        <a href="#" onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}>
            <i className="fa fa-arrow-left" />
        </a>
    </li>
} */}

                        {Array.from({ length: totalPages }, (_, index) => (
                            <li className={index + 1 === currentPage ? "active" : ""}>
                                <a href="#" onClick={() => handlePageChange(index + 1)}>
                                    {index + 1}
                                </a>
                            </li>
                        ))}
                        {/* {currentPage < totalPages && 
    <li>
        <a href="#" onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}>
            <i className="fa fa-arrow-right" />
        </a>
    </li>
} */}

                    </ul>
                </div>
            </div>
        </div>
    )
}
