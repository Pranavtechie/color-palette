export default function NavBar() {
	return (
		<nav className="bg-gray-200 py-2 px-4 flex justify-between items-center">
			<a
				href="/"
				className="text-3xl font-bold rounded-lg hover:bg-gray-300 px-4 py-2"
			>
				Color Palette Generator
			</a>
			<a
				href="/my-palette"
				className="py-2.5 px-5 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:text-gray-100 hover:bg-blue-600 focus:z-10 focus:ring-4 focus:ring-gray-200"
			>
				My Palettes
			</a>
		</nav>
	);
}
