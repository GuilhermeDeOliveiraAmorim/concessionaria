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
import { Menu } from '../../../util/menu';
import { Nav } from '../../../util/nav';

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

const menuCars = [
    {
        id: 1,
        title: "Adicionar",
        link: "add",
    },
    {
        id: 2,
        title: "Listar",
        link: "list",
    },
];

export default function ListCars(props: ListCarsProps) {
    const { cars } = props;
    return (
        <div>
            <Nav />
            <Menu title={"Carros"} menu={menuCars} />
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
        </div>
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