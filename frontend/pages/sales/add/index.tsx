import { FormControl, FormLabel, Input, Flex, Button } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { FormEvent, useState } from "react";
import api from "../../../services/backend";
import { Nav } from "../../../util/nav";

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

interface IAddSales {
    cars: ICar[],
    sellers: ISeller[]
}

export default function AddSales(props: IAddSales) {
    const { cars, sellers } = props;

    // const carsFiltered = cars.filter(car => car.is_available === 1);

    const [car, setCar] = useState("");
    const [seller, setSeller] = useState("");

    const toast = useToast()

    async function addCar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(car, seller);

        try {
            const response = await api.post("/sales", {
                car_id: car,
                seller_id: seller
            });

            toast({
                title: 'Venda adicionada',
                description: "A venda foi adicionada",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            setCar("");
            setSeller("");
        } catch (error) {
            console.log(error);

            toast({
                title: 'Erro ao adicionadar venda',
                description: "A venda não foi adicionada",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <div>
            <Nav />
            <Container maxW='1280px'>
                <form onSubmit={addCar}>
                    <Flex w='100%' p={4} gap={4} flexDirection={"column"}>
                        <FormControl>
                            <Select placeholder='Carro' onChange={event => setCar(event.target.value)} value={car}>
                                {cars.map(car =>
                                    <option key={car.id} value={car.id}>{car.model}</option>
                                )}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select placeholder='Vendedor' onChange={event => setSeller(event.target.value)} value={seller}>
                                {sellers.map(seller =>
                                    <option key={seller.id} value={seller.id}>{seller.name}</option>
                                )}
                            </Select>
                        </FormControl>
                        <Button colorScheme='blue' type="submit">Adicionar</Button>
                    </Flex>
                </form>
            </Container>
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