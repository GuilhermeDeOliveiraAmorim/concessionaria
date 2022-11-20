import { Badge, Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { IMovie } from "../../../interfaces/movie";
import Person from "../movie-person";

export default function Movie(props: IMovie) {

    const { id, title, year, poster, imdbRating, genres, directors, writers, actors } = props;

    console.log(poster);

    return (
        <HStack spacing='10px' flexDirection={"row"} justifyContent={"space-between"} alignItems={"flex-start"} >
            <Box>
                <img src={poster} width={150} height={200} />
            </Box>
            <Box>
                <p>
                    id: {id}
                </p>
                <p>
                    title: {title}
                </p>
                <p>
                    year: {year}
                </p>
                <p>
                    imdbRating:
                    <Badge colorScheme='orange'>
                        {imdbRating}
                    </Badge>
                </p>
                {genres?.map(g =>
                    <Badge key={g.id} colorScheme='green' marginRight={2}>
                        {g.name}
                    </Badge>
                )}
            </Box>
            <Box>
                {directors?.map(d =>
                    <Person key={d.id} {...d} />
                )}
            </Box>
            <Box>
                {writers?.map(w =>
                    <Person key={w.id} {...w} />
                )}
            </Box>
            <Box>
                {actors?.map(a =>
                    <Person key={a.id} {...a} />
                )}
            </Box>
        </HStack>
    )
}