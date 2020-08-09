import React from "react";
import { Box } from "@chakra-ui/core";
import Header from "@components/Header";

interface MainProps {
	children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
	return (
		<Box height="100%">
			<Header />
			<Box height="100%">{children}</Box>
		</Box>
	);
};

export default Main;
