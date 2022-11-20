import { useRouter } from "next/router"
import Movie from "../../components/movies/movie";
import useMovie from "../../hooks/use-movies/useMovie"

export default function DetalheMovies() {

    const router = useRouter();

    const { id } = router.query;

    const movie = useMovie(id);

    return (
        <Movie
            id={movie.data?.id}
            imdb_id={movie.data?.imdb_id}
            year={movie.data?.year}
            youchooseRating={movie.data?.youchooseRating}
            imdbRating={movie.data?.imdbRating}
            title={movie.data?.title}
            poster={movie.data?.poster}
            genres={movie.data?.genres}
            directors={movie.data?.directors}
            writers={movie.data?.writers}
            actors={movie.data?.actors}
        />
    )
}