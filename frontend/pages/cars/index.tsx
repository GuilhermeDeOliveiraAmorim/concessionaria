import { Menu } from "../../util/menu";
import { Nav } from "../../util/nav";

const menuCars = [
    {
        id: 1,
        title: "Adicionar",
        link: "cars/add",
    },
    {
        id: 2,
        title: "Listar",
        link: "cars/list",
    },
];

export default function Cars() {
    return (
        <div>
            <Nav />
            <Menu title={"Carros"} menu={menuCars} />
            Cars
        </div>
    );
}