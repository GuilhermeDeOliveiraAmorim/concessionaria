import { Menu } from "../../util/menu";
import { Nav } from "../../util/nav";

const menuSellers = [
    {
        id: 1,
        title: "Adicionar",
        link: "sellers/add",
    },
    {
        id: 2,
        title: "Listar",
        link: "sellers/list",
    },
];

export default function Sellers() {
    return (
        <div>
            <Nav />
            <Menu title="Vendedores" menu={menuSellers} />
            Sellers
        </div>
    );
}