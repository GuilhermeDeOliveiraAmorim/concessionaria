import { Flex, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import Link from "next/link";
import React from "react";

interface IItem {
    id: number,
    title: string,
    link: string,
}

interface IMenu {
    title: string;
    menu: IItem[]
}

function Menu(props: IMenu) {
    const { title, menu } = props;
    return (
        <Flex bgColor={"gray.100"} p={4} gap={4} justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
                <Text fontSize={20} fontWeight={"black"}>
                    {title}
                </Text>
            </Flex>
            <Flex gap={4}>
                {menu.map(item =>
                    <Link key={item.id} href={item.link}>
                        <Button colorScheme={"green"} size={"sm"}>{item.title}</Button>
                    </Link>
                )}
            </Flex>
        </Flex>
    )
}

export { Menu };