import axios from "axios";
import MovieCar from "components/MovieCard";
//import MovieScore from "components/MovieScore";
//import MovieStars from "components/MovieStars";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/request";

// FORMA ERRADA
axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data);
    });

function Listing() {
    return (
        <>

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