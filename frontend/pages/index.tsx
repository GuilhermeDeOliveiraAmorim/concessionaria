import { Box, Grid, GridItem } from "@chakra-ui/react";
import WithSubnavigation from "../components/nav";
import Ranking from "../components/ranking";
import YouChoose from "../components/youchoose";

export default function Home() {
	return (
		<div>
			<WithSubnavigation />
			<Grid templateColumns='repeat(3, 1fr)' gap={4}>
				<GridItem colSpan={2}>
					<YouChoose />
				</GridItem>
				<GridItem colSpan={1}>
					<Ranking />
				</GridItem>
			</Grid>
		</div>
	);
}
