import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import { observer } from "mobx-react-lite";
import Header from "./Header";
import InnerTabs from "./InnerTabs";
import { getPageComponent } from "./pages";
import SideNavigation from "./SideNavigation";
import menuStore from "./stores/MenuStore";

const App = observer(function App() {
  const PageComponent = getPageComponent(menuStore.selectedMenu);
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header />
      <Box
        component="section"
        display="flex"
        flexDirection="row"
        flex={1}
        sx={{ minWidth: 0 }}
      >
        <SideNavigation />
        <Box
          component="main"
          flex={1}
          bgcolor={blueGrey[50]}
          display="flex"
          flexDirection="column"
          sx={{ minWidth: 0 }}
        >
          <InnerTabs />
          <PageComponent />
        </Box>
      </Box>
    </main>
  );
});

export default App;
