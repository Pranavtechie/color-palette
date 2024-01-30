import React, { useState } from "react";
import ColorPicker from "../components/ColorPicker";
import useLocalStorage from "../hooks/useLocalStorage";
import { generateRandomColors } from "../utils";
function App() {
	const [savedPallets, setSavedPallets] = useLocalStorage("palettes", []);
	const [colorPickerColors, setColorPickerColors] = useState(
		generateRandomColors(5)
	);

	function addNewColorPalette(newPaletteFromInput) {
		let newPalette = [...savedPallets, newPaletteFromInput];
		setSavedPallets(newPalette);
		console.log(newPalette);
	}

	return (
		<>
			<main className="p-2">
				<ColorPicker
					addNewColorPalette={addNewColorPalette}
					colorPickerColors={colorPickerColors}
					setColorPickerColors={setColorPickerColors}
				/>
			</main>
		</>
	);
}

export default App;
