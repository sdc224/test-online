import React from "react";
import { Box } from "@chakra-ui/core";
import Header from "@components/Header";

interface MinimalProps {
	children: React.ReactNode;
}

const Minimal = ({ children }: MinimalProps) => {
	return (
		<Box height="100%">
			<Header />
			<Box height="100%">{children}</Box>
		</Box>
	);
};

export default Minimal;
