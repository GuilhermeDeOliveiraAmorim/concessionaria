import { api } from "../get-api/axios";

interface IUser {
	id: number,
	email: string,
	password: string,
	is_available: number
}

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

interface HomeProps {
	user: IUser;
	cars: ICar[];
	sellers: ISeller[];
	sales: ISale[];
}

export default function Home(props: HomeProps) {
	const { user, cars, sellers, sales } = props;
	return (
		<div>
			{cars.map(car =>
				<p key={car.id}>
					{car.make}
				</p>
			)}
		</div>
	);
}

export const getServerSideProps = async () => {
	const [user, cars, sellers, sales] = await Promise.all([
		api.get("users/1"),
		api.get("cars/"),
		api.get("sellers/"),
		api.get("sales/"),
	])

	return {
		props: {
			user: user.data,
			cars: cars.data,
			sellers: sellers.data,
			sales: sales.data,
		}
	}
};
