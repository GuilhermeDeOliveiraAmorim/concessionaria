import { Box, Button, Flex, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { api } from "../get-api/axios";

export default function Home() {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const toast = useToast();

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			const response = await api.post("/users/login", {
				email: email,
				password: password
			});

			if (response.data !== null) {
				toast({
					title: 'Login aceito',
					description: "Direcionando para o dashboard",
					status: 'success',
					duration: 3000,
					isClosable: true,
				});

				setEmail("");
				setPassword("");

				router.push("/dashboard");
			} else {
				toast({
					title: 'Erro ao logar',
					description: "O login não foi aceito",
					status: 'error',
					duration: 3000,
					isClosable: true,
				})

				setEmail("");
				setPassword("");
			}

		} catch (error) {
			console.log(error);

			toast({
				title: 'Erro ao logar',
				description: "O login não foi aceito",
				status: 'error',
				duration: 5000,
				isClosable: true,
			})
		}
	}

	return (
		<Flex height={"100vh"} justifyContent={"center"} alignItems={"center"}>
			<form onSubmit={handleSubmit}>
				<Flex p={4} bgColor={"gray.200"} borderRadius={"15px"} gap={5} flexDirection={"column"}>
					<FormControl>
						<FormLabel>Login</FormLabel>
						<Input bg={"white"} placeholder={"Login"} type='text' onChange={event => setEmail(event.target.value)} value={email} />
					</FormControl>
					<FormControl>
						<FormLabel>Senha</FormLabel>
						<Input bg={"white"} placeholder={"Senha"} type='password' onChange={event => setPassword(event.target.value)} value={password} />
					</FormControl>
					<Button
						type="submit"
						colorScheme={"teal"}
					>
						Entrar
					</Button>
				</Flex>
			</form>
		</Flex>
	);
}
