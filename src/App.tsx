import Box from "@mui/material/Box";
import BasicCustomChip from "./components/chip/BasicCustomChip";
import Typography from "@mui/material/Typography";

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
      <Box
        component="header"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "4px 8px 4px 4px",
          gap: "4px",
          position: "relative",
          width: "100%",
          height: "44px",
          background: "#000000",
        }}
      >
        <Typography color="white">OPUS Terminal</Typography>
        <BasicCustomChip label="ASIA" />
        <Typography variant="tableHeader" color="white">
          Vessel Name
        </Typography>
      </Box>
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
