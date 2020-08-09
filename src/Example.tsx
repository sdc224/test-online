import React from "react";
import { useColorMode, Box, Button } from "@chakra-ui/core";
import Header from "./Header";

export default function Example(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box>
			<Header />
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				fontSize={["sm", "md", "lg", "xl"]}
			>
				Hello World
				<Button onClick={toggleColorMode}>
					{colorMode === "light" ? "Dark" : "Light"}
				</Button>
			</Box>
		</Box>
	);
}
