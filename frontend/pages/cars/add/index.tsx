import { FormControl, FormLabel, Input, FormHelperText, Box, Flex, Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
import { FormEvent, useState } from "react";
import api from "../../../services/backend";

interface ICar {
    id: number,
    make: string,
    model: string,
    transmission: string,
    year: number,
    value: number,
    is_available: number
}

export default function AddCars() {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [transmission, setTransmission] = useState("");
    const [year, setYear] = useState("");
    const [value, setValue] = useState("");

    const toast = useToast()

    async function addCar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await api.post("/cars", {
                make: make,
                model: model,
                transmission: transmission,
                year: year,
                value: value,
            });

            toast({
                title: 'Carro adicionado',
                description: "O veículo foi adicionado",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            setMake("");
            setModel("");
            setTransmission("");
            setYear("");
            setValue("");
        } catch (error) {
            console.log(error);

            toast({
                title: 'Erro ao adicionadar carro',
                description: "O carro não foi adicionado",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <Container maxW='1280px'>
            <form onSubmit={addCar}>
                <Flex w='100%' p={4} gap={4} flexDirection={"column"}>
                    <FormControl>
                        <FormLabel>Montadora</FormLabel>
                        <Input type='text' onChange={event => setMake(event.target.value)} value={make} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Modelo</FormLabel>
                        <Input type='text' onChange={event => setModel(event.target.value)} value={model} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tipo de Transmissão</FormLabel>
                        <Input type='text' onChange={event => setTransmission(event.target.value)} value={transmission} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ano</FormLabel>
                        <Input type='text' onChange={event => setYear(event.target.value)} value={year} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Valor</FormLabel>
                        <Input type='text' onChange={event => setValue(event.target.value)} value={value} />
                    </FormControl>
                    <Button colorScheme='blue' type="submit">Adicionar</Button>
                </Flex>
            </form>
        </Container>
    );
}