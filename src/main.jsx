import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import NavBar from "./components/NavBar";
import MyPalette from "./pages/MyPalette";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/my-palette",
		element: <MyPalette />,
	},
]);

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<NavBar />
		<RouterProvider router={router} />
	</React.StrictMode>
);
