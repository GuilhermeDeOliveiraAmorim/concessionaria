import api from "../../services/backend";
import { useQuery } from "react-query";
import { Movie } from "../../classes/movie";

const getMovieList = async () => {
    const response = await api.get<[]>("/movies/");

    const arrMovies = Array<Movie>();

    response.data.map((r) => {
        const movie = new Movie(
            r.id,
            r.imdb_id,
            r.year,
            r.youchooseRating,
            r.imdbRating,
            r.title,
            r.poster
        );
        arrMovies.push(movie);
    });

    return arrMovies;
};

export default function useMovieList() {
    return useQuery(["movies"], () => getMovieList());
}
