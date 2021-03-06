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

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
            .then(response => {
                const data = response.data as MoviePage;
                //   setPageNumber(data.number);
                //    console.log(response.data);
                setPage(data);
            });
    }, [pageNumber]);

    const handlarPageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlarPageChange}/>

            <div className="container">
                <div className="row">

                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCar movie={movie} />
                        </div>
                    )
                    )}

                </div>

            </div>

        </>
    );
}

export default Listing;