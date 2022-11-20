export interface IMovie {
    id: number;
    imdb_id: string;
    year: number;
    youchooseRating: number;
    imdbRating: number;
    title: string;
    poster: string;
    genres: [];
    directors: [];
    writers: [];
    actors: [];
}
