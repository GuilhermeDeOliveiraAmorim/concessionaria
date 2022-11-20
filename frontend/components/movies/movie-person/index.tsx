import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { IPerson } from "../../../interfaces/person";

export default function Person(props: IPerson) {

    const { id, imdb_id, name, headshot } = props;

    function isHeadshot(poster: string) {

        if (poster === "person.png") {

            poster = "/" + poster;

        }

        return poster;
    }

    return (
        <HStack key={id} >
            <Box>
                <Image src={isHeadshot(headshot)} width={50} height={70} />
            </Box>
            <Box>
                {name}
            </Box>
            <Box>
                {imdb_id}
            </Box>
        </HStack>
    );
}