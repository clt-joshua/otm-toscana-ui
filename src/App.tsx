import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import { observer } from "mobx-react-lite";
import { getPageComponent } from "./components/pages";
import Header from "./Header";
import InnerTabs from "./InnerTabs";
import SideNavigation from "./SideNavigation";
import menuStore from "./stores/MenuStore";

const App = observer(function App() {
	const PageComponent = getPageComponent(menuStore.selectedMenu);
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
					flex={1}
					bgcolor={blueGrey[50]}
					height="100%"
					display="flex"
					flexDirection="column"
				>
					<InnerTabs />
					<PageComponent />
				</Box>
			</Box>
		</main>
	);
});

export default App;
