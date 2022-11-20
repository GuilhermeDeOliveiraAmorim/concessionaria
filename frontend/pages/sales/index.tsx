import api from "../../services/backend";
import { Nav } from "../../util/nav";

export default function Sales() {
    return (
        <div>
            <Nav />
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