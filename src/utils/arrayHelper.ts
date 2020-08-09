export function shuffleArray<T>(array: Array<T>) {
	const modifiedArray = [...array];
	for (let i = modifiedArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[modifiedArray[i], modifiedArray[j]] = [
			modifiedArray[j],
			modifiedArray[i]
		];
	}

	return modifiedArray;
}
