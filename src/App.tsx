import React from "react";
import { CSSReset, ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import Example from "./Example";

export default function App(): JSX.Element {
	return (
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Example />
			</ColorModeProvider>
		</ThemeProvider>
	);
}
