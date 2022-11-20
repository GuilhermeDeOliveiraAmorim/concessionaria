import api from "../../services/backend";

export default function Sales() {
    return (
        <div>
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