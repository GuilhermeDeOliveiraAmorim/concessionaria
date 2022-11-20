import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import api from "../../../services/backend";
import { Menu } from '../../../util/menu';
import { Nav } from '../../../util/nav';

interface ISeller {
    id: number,
    name: string
}

interface IListSellers {
    sellers: ISeller[];
}

const menuSellers = [
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

export default function ListSellers(props: IListSellers) {
    const { sellers } = props;
    return (
        <div>
            <Nav />
            <Menu title="Vendedores" menu={menuSellers} />
            <Container maxW='1280px'>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <Thead>
                            <Tr>
                                <Th>Vendedor</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {sellers.map(seller =>
                                <Tr key={seller.id}>
                                    <Td>{seller.name}</Td>
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
    const [sellers] = await Promise.all([
        api.get("sellers/"),
    ])

    return {
        props: {
            sellers: sellers.data,
        }
    }
};