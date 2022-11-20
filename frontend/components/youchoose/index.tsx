import { Box } from "@chakra-ui/react";
import useMovie from "../../hooks/use-movies/useMovie";
import MovieChooseCard from "./movie";

export default function YouChoose() {

    const movie_1 = useMovie('1');
    const movie_2 = useMovie('2');

    return (
        <Box display={'flex'}>
            <MovieChooseCard {...movie_1.data} />
            <MovieChooseCard {...movie_2.data} />
        </Box>
    )
}