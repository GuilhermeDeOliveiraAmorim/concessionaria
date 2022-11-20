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

interface ISeller {
    id: number,
    name: string
}

interface ISale {
    id: number,
    car_id: number,
    seller_id: number,
    created_at: string,
    is_available: number
    car: ICar,
    seller: ISeller
}

interface IListSales {
    sales: ISale[];
}

const menuSales = [
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

export default function ListSales(props: IListSales) {
    const { sales } = props;
    return (
        <div>
            <Nav />
            <Menu title={"Vendas"} menu={menuSales} />
            <Container maxW='1280px'>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <Thead>
                            <Tr>
                                <Th>Vendedor</Th>
                                <Th>Modelo</Th>
                                <Th>Data</Th>
                                <Th isNumeric>Valor</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {sales.map(sale =>
                                <Tr key={sale.id}>
                                    <Td>{sale.seller.name}</Td>
                                    <Td>{sale.car.model}</Td>
                                    <Td>{sale.created_at}</Td>
                                    <Td isNumeric>{sale.car.value}</Td>
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
    const [sales] = await Promise.all([
        api.get("sales/"),
    ])

    return {
        props: {
            sales: sales.data,
        }
    }
};