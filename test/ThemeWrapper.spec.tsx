import React from "react";
import { render, RenderResult } from "@testing-library/react";
import ThemeWrapper from "@containers/ThemeWrapper";
import MockComponent from "./mocks/MockComponent";

let documentBody: RenderResult;

describe("<ThemeWrapper />", () => {
	beforeEach(() => {
		documentBody = render(
			<ThemeWrapper>
				<MockComponent />
			</ThemeWrapper>
		);
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});
