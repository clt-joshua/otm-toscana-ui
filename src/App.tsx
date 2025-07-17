import Box from "@mui/material/Box";
import Header from "./Header";
import SideNavigation from "./SideNavigation";
import { blueGrey } from "@mui/material/colors";
import InnerTabs from "./InnerTabs";

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
        <SideNavigation />
        <Box component="main" sx={{ flex: 1, backgroundColor: blueGrey[50] }}>
          <InnerTabs />
        </Box>
      </Box>
    </main>
  );
}

export default App;
