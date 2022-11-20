export class Movie {
    id: number;
    imdb_id: string;
    year: number;
    youchooseRating: number;
    imdbRating: number;
    title: string;
    poster: string;

    constructor(
        id: number,
        imdb_id: string,
        year: number,
        youchooseRating: number,
        imdbRating: number,
        title: string,
        poster: string
    ) {
        this.id = id;
        this.imdb_id = imdb_id;
        this.year = year;
        this.youchooseRating = youchooseRating;
        this.imdbRating = imdbRating;
        this.title = title;
        this.poster = poster;
    }
}
