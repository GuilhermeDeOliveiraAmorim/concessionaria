import api from "../../services/backend";
import { Menu } from "../../util/menu";
import { Nav } from "../../util/nav";

const menuSales = [
    {
        id: 1,
        title: "Adicionar",
        link: "sales/add",
    },
    {
        id: 2,
        title: "Listar",
        link: "sales/list",
    },
];

export default function Sales() {
    return (
        <div>
            <Nav />
            <Menu title={"Vendas"} menu={menuSales} />
            Sales
        </div>
    );
}

export const getServerSideProps = async () => {
    const [cars, sellers] = await Promise.all([
        api.get("cars/"),
        api.get("sellers/"),
    ])

    return {
        props: {
            cars: cars.data,
            sellers: sellers.data,
        }
    }
};