import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import TaskManager from "./components/pages/TaskManager";
import Header from "./Header";
import InnerTabs from "./InnerTabs";
import SideNavigation from "./SideNavigation";

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
			<Box component="section" display="flex" flexDirection="row" flex={1}>
				<SideNavigation />
				<Box
					component="main"
					sx={{
						flex: 1,
						backgroundColor: blueGrey[50],
						height: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<InnerTabs />
					<TaskManager />
				</Box>
			</Box>
		</main>
	);
}

export default App;
