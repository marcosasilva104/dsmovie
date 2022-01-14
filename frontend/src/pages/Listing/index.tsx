import axios from "axios";
import MovieCar from "components/MovieCard";
//import MovieScore from "components/MovieScore";
//import MovieStars from "components/MovieStars";
import { MoviePage } from "types/movies";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/request";



function Listing() {
    
    const [pageNumber, setPageNumber] = useState(0);
    
    useEffect(() => {
            axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number);
            console.log(response.data);
        });
    }, [])
    // FORMA ERRADA
    
    
    return (
        <>
            <p>{pageNumber}</p>

            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCar />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCar />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCar />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCar />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCar />
                    </div>
                </div>

            </div>

        </>
    );
}

export default Listing;