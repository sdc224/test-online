import React from "react";

const useFocusHandler = (): Array<boolean> => {
	const [focus, setFocus] = React.useState(false);

	const onFocus = () => setFocus(true);

	const onBlur = () => setFocus(false);

	React.useEffect(() => {
		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);

		// Specify how to clean up after this effect:
		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	});

	return [focus];
};

export default useFocusHandler;
