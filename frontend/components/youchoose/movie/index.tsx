import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { IMovie } from '../../../interfaces/movie';

const data = {
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 0.2,
};

function MovieChooseCard(props: IMovie) {

    const { id, poster, title, genres, imdbRating } = props;

    return (
        <Link key={id} onClick={() => alert("Opa!")} p={50} w="full" alignItems="center" justifyContent="center">
            <Flex>
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">

                    <Image
                        src={poster}
                        alt={`Picture of ${data.name}`}
                        roundedTop="lg"
                    />

                    <Box p="6">

                        <Box display="flex" alignItems="baseline">
                            {genres?.map(g =>
                                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red" marginRight={1} >
                                    {g.name}
                                </Badge>
                            )}
                        </Box>

                        <Flex mt="1" justifyContent="space-between">
                            <span>{title}</span>
                            <span>{imdbRating}/10</span>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Link >
    );
}

export default MovieChooseCard;