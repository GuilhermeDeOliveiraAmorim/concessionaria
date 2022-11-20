import useMovieList from "../../../hooks/use-movies/useMovieList";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import Image from "next/image";
import Link from "next/link";

export default function ListMovies() {

    const movies = useMovieList();

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>poster</Th>
                        <Th>title</Th>
                        <Th>imdb_id</Th>
                        <Th isNumeric>year</Th>
                        <Th isNumeric>youchooseRating</Th>
                        <Th isNumeric>imdbRating</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {movies.data?.map(movie =>
                        <Tr key={movie.id}>
                            <Td>{movie.id}</Td>
                            <Td>
                                <Image src={movie.poster} width={50} height={70} />
                            </Td>
                            <Td>{movie.title}</Td>
                            <Td>{movie.imdb_id}</Td>
                            <Td isNumeric>{movie.year}</Td>
                            <Td isNumeric>{movie.youchooseRating}</Td>
                            <Td isNumeric>{movie.imdbRating}</Td>
                            <Td>
                                <Link passHref href={`/movies/${movie.id}`} >
                                    ver
                                </Link>
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}