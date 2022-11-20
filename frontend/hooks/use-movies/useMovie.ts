import api from "../../services/backend";
import { useQuery } from "react-query";
import { IMovie } from "../../interfaces/movie";

const getMovie = async (movie_id: string | string[]) => {
    const response = await api.get<IMovie>(`/movies/${movie_id}`);
    return response.data;
};

export default function useMovie(movie_id: string | string[]) {
    return useQuery(["movie", movie_id], () => getMovie(movie_id));
}
