import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
import api from "../../../services/backend";

interface ICar {
    id: number,
    make: string,
    model: string,
    transmission: string,
    year: number,
    value: number,
    is_available: number
}

interface ListCarsProps {
    cars: ICar[];
}

export default function ListCars(props: ListCarsProps) {
    const { cars } = props;
    return (
        <Container maxW='1280px'>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Montadora</Th>
                            <Th>Modelo</Th>
                            <Th>Transmissão</Th>
                            <Th isNumeric>Ano</Th>
                            <Th isNumeric>Valor</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {cars.map(car =>
                            <Tr key={car.id}>
                                <Td>{car.make}</Td>
                                <Td>{car.model}</Td>
                                <Td>{car.transmission}</Td>
                                <Td isNumeric>{car.year}</Td>
                                <Td isNumeric>{car.value}</Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export const getServerSideProps = async () => {
    const [cars] = await Promise.all([
        api.get("cars/")
    ])

    return {
        props: {
            cars: cars.data
        }
    }
};