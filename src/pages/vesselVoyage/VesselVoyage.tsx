import { Box } from "@mui/material";
import BasicContainer from "../../components/container/BasicContainer";

export default function VesselVoyage() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      padding={1}
      gap={1}
      sx={{ flex: 1, minWidth: 0 }}
    >
      <BasicContainer
        title="Vessel Schedule List"
        sx={{ gridColumn: "span 2" }}
      >
        1
      </BasicContainer>
      <BasicContainer
        title="Vessel Schedule List"
        sx={{ gridColumn: "span 2" }}
      >
        2
      </BasicContainer>
      <BasicContainer title="Voyage Information (Supplement)">3</BasicContainer>
      <BasicContainer title="Voyage Log">4</BasicContainer>
    </Box>
  );
}
