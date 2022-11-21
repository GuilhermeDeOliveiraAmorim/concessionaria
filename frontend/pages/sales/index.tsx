import api from "../../services/backend";
import { Menu } from "../../util/menu";
import { Nav } from "../../util/nav";
import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
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
    sold_in: string,
    is_available: number,
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
        link: "sales/add",
    },
    {
        id: 2,
        title: "Listar",
        link: "sales/list",
    },
];

export default function Sales(props: IListSales) {
    const { sales } = props;
    console.log(sales);

    const sold_by_day = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: sales.map(sale => sale.sold_in)
            }
        },
        series: [
            {
                name: "series-1",
                data: sales.map(sale => sale.car.value)
            }
        ]
    };

    const seller_by_sold = {
        options: {},
        series: sales.map(sale => sale.car.value),
        labels: sales.map(sale => sale.seller.name)
    };

    return (
        <div>
            <Nav />
            <Menu title={"Vendas"} menu={menuSales} />
            <Box p={4}>
                <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                    <GridItem w='100%' h='10'>
                        <ApexCharts
                            options={sold_by_day.options}
                            series={sold_by_day.series}
                            type="bar"
                            width="100%"
                        />
                    </GridItem>
                    <GridItem w='100%' h='10'>
                        <Flex justifyContent={"center"} alignItems={"center"}>
                            <ApexCharts options={seller_by_sold.options} series={seller_by_sold.series} type="donut" width="380" />
                        </Flex>
                    </GridItem>
                    <GridItem w='100%' h='10' bg='blue.500' />
                </Grid>
            </Box>
        </div>
    );
}

export const getServerSideProps = async () => {
    const [sales] = await Promise.all([
        api.get("sales/")
    ])

    return {
        props: {
            sales: sales.data
        }
    }
};