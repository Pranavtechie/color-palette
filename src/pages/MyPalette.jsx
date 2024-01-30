import useLocalStorage from "../hooks/useLocalStorage";
import Palette from "../components/Palette";

export default function MyPalette() {
	const [savedPallets, setSavedPallets] = useLocalStorage("palettes", []);

	function deletePalette(firstId) {
		setSavedPallets(
			savedPallets.filter((Palette) => Palette[0].id !== firstId)
		);
	}

	console.log({
		page: "myPallete",
		savedPallets,
	});

	return (
		<section className="p-2 ">
			<span className="font-bold text-xl mb-2">
				My Palettes ({savedPallets.length})
			</span>
			<hr></hr>
			<div className="mt-5 flex flex-row gap-5 flex-wrap items-center justify-around">
				{savedPallets.map((colorsArray, index) => {
					return (
						<Palette
							colorsArray={colorsArray}
							key={index}
							deletePalette={deletePalette}
						/>
					);
				})}
			</div>
		</section>
	);
}
