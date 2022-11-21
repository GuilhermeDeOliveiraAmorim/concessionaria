import { Grid, GridItem, Flex, Box } from "@chakra-ui/react";
import api from "../../services/backend";
import { Nav } from "../../util/nav";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

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
	cars: ICar[];
	sellers: ISeller[];
	sales: ISale[];
}

export default function Dashboard(props: HomeProps) {
	const { cars, sellers, sales } = props;
	console.log(cars, sellers, sales);

	return (
		<div>
			<Nav />
			<Box p={4}>
				<Grid templateColumns='repeat(3, 1fr)' gap={4}>
					<GridItem w='100%' h='10'>
						<Flex justifyContent={"center"} alignItems={"center"}>
							Graph 01
						</Flex>
					</GridItem>
					<GridItem w='100%' h='10'>
						<Flex justifyContent={"center"} alignItems={"center"}>
							Graph 01
						</Flex>
					</GridItem>
					<GridItem w='100%' h='10' >
						<Flex justifyContent={"center"} alignItems={"center"}>
							Graph 01
						</Flex>
					</GridItem>
				</Grid>
			</Box>
		</div >
	);
}

export const getServerSideProps = async () => {
	const [cars, sellers, sales] = await Promise.all([
		api.get("cars/"),
		api.get("sellers/"),
		api.get("sales/"),
	])

	return {
		props: {
			cars: cars.data,
			sellers: sellers.data,
			sales: sales.data,
		}
	}
};
