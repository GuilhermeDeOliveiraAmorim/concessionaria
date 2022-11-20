import { Flex, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Link from "next/link";
import React from "react";
import { CloseIcon } from '@chakra-ui/icons';

function Nav() {
    return (
        <Flex bgColor={"gray.200"} p={4} gap={4} justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
                <Text fontSize={24} fontWeight={"black"}>
                    Concessionária
                </Text>
            </Flex>
            <Flex gap={4}>
                <Link href={"/dashboard"}>
                    <Button colorScheme='blue'>Dashboard</Button>
                </Link>
                <Link href={"/sales"}>
                    <Button colorScheme='blue'>Vendas</Button>
                </Link>
                <Link href={"/cars"}>
                    <Button colorScheme='blue'>Carros</Button>
                </Link>
                <Link href={"/sellers"}>
                    <Button colorScheme='blue'>Vendedores</Button>
                </Link>
                <Link href={"/"}>
                    <Button colorScheme='red'>
                        <CloseIcon />
                    </Button>
                </Link>
            </Flex>
        </Flex>
    )
}

export { Nav };