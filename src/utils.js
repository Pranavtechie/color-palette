import { v4 as uuidv4 } from "uuid";

export function generateRandomColors(count) {
	const array = [];
	let subString = "";
	let hexVal = "";
	let simpleObj = {};
	for (let i = 0; i < count; i++) {
		subString = "#";
		for (let j = 0; j < 3; j++) {
			hexVal = Math.floor(Math.random() * 255)
				.toString(16)
				.padStart(2, "0");
			subString += hexVal;
		}
		simpleObj = {
			id: uuidv4(),
			color: subString,
		};
		array.push(simpleObj);
	}

	return array;
}
