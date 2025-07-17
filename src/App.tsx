import Box from "@mui/material/Box";
import Header from "./Header";

function App() {
	return (
		<main
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Header />
			<Box
				component="section"
				sx={{ display: "flex", flexDirection: "row", flex: 1 }}
			>
				<Box component="aside" sx={{ width: "42px" }}></Box>
				<Box component="main" sx={{ flex: 1 }}></Box>
			</Box>
		</main>
	);
}

export default App;
