import { FormControl, FormLabel, Input, FormHelperText, Box, Flex, Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
import { FormEvent, useState } from "react";
import api from "../../../services/backend";
import { Menu } from "../../../util/menu";
import { Nav } from "../../../util/nav";

interface ISeller {
    id: number,
    name: string
}

const menuSellers = [
    {
        id: 1,
        title: "Adicionar",
        link: "add",
    },
    {
        id: 2,
        title: "Listar",
        link: "list",
    },
];

export default function AddSellers() {
    const [name, setName] = useState("");

    const toast = useToast()

    async function addCar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await api.post("/sellers", {
                name: name
            });

            toast({
                title: 'Vendedor adicionado',
                description: "O vendedor foi adicionado",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            setName("");
        } catch (error) {
            console.log(error);

            toast({
                title: 'Erro ao adicionadar vendedor',
                description: "O vendedor não foi adicionado",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <div>
            <Nav />
            <Menu title="Vendedores" menu={menuSellers} />
            <Container maxW='1280px'>
                <form onSubmit={addCar}>
                    <Flex w='100%' p={4} gap={4} flexDirection={"column"}>
                        <FormControl>
                            <FormLabel>Vendedor</FormLabel>
                            <Input type='text' onChange={event => setName(event.target.value)} value={name} />
                        </FormControl>
                        <Button colorScheme='blue' type="submit">Adicionar</Button>
                    </Flex>
                </form>
            </Container>
        </div>

    );
}