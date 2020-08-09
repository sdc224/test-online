import React from "react";
import {
	Box,
	Text,
	Divider,
	RadioGroup,
	Radio,
	Button,
	Flex
} from "@chakra-ui/core";
import { shuffleArray } from "@utils/arrayHelper";

export default function Dashboard() {
	const [data, setData] = React.useState(null);
	// const [answers, setAnswers] = React.useState([]);

	React.useEffect(() => {
		fetch(
			"https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple"
		)
			.then((res) => res.json())
			.then((result) => setData(result))
			.catch((err) => console.log(err));
	}, []);

	if (data && data.results)
		return (
			<Flex flexDir="column">
				{data.results.map((result, index) => (
					<Box key={result.question}>
						<Text>{result.question}</Text>
						<RadioGroup
						// onChange={(e) => {
						// 	const modifiedAnswers = [...answers];
						// 	modifiedAnswers.splice(
						// 		index,
						// 		0,
						// 		e.target.value
						// 	);
						// 	setAnswers(modifiedAnswers);
						// }}
						// value={answers.find((a) => a === index + 1)}
						>
							{shuffleArray([
								...result.incorrect_answers,
								result.correct_answer
							]).map((option) => (
								<Radio key={option} value={option}>
									{option}
								</Radio>
							))}
						</RadioGroup>
						<Divider />
					</Box>
				))}

				<Flex justifyContent="space-around">
					<Button type="reset">Reset</Button>
					<Button type="submit">Submit</Button>
				</Flex>
			</Flex>
		);

	return null;
}
