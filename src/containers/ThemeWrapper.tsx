import React from "react";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

interface ThemeWrapperProps {
	children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
	return (
		<ThemeProvider>
			<CSSReset />
			<ColorModeProvider>{children}</ColorModeProvider>
		</ThemeProvider>
	);
}
