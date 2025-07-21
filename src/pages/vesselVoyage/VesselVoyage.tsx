import { Box, TextField } from "@mui/material";
import BasicContainer from "../../components/container/BasicContainer";
import SearchContainer from "../../components/container/SearchContainer";
import DetailContainer from "../../components/container/DetailContainer";
import BasicDataGrid from "../../components/data-grid/BasicDataGrid";
import { SIMPLE_TABLE_DATA } from "../../constants/vesselVoyageData";

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
        <Box
          padding={1}
          display="flex"
          flexDirection="column"
          gap={1}
          flex={1}
          sx={{ minWidth: 0 }}
          height="100%"
        >
          <SearchContainer padding={1}>
            <TextField label="Period" value="Value" />
          </SearchContainer>
          <DetailContainer>12</DetailContainer>
        </Box>
      </BasicContainer>
      <BasicContainer
        title="Vessel Schedule List"
        sx={{ gridColumn: "span 2" }}
      >
        2
      </BasicContainer>
      <BasicContainer title="Voyage Information (Supplement)">
        <Box
          padding={1}
          display="flex"
          flexDirection="column"
          gap={1}
          flex={1}
          sx={{ minWidth: 0 }}
          height="100%"
        >
          <DetailContainer>12</DetailContainer>
        </Box>
      </BasicContainer>
      <BasicContainer title="Voyage Log">
        <Box
          padding={1}
          display="flex"
          flexDirection="column"
          gap={1}
          flex={1}
          sx={{ minWidth: 0 }}
          height="100%"
        >
          <DetailContainer
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              flexShrink: 1,
              height: 0,
              minWidth: 0,
              overflow: "auto",
            }}
          >
            <BasicDataGrid
              header={[
                { key: "item", label: "Item" },
                { key: "value", label: "Value" },
                { key: "description", label: "Description" },
              ]}
              data={SIMPLE_TABLE_DATA.map((item) => ({
                item: item.item,
                value: item.value,
                description: item.description,
              }))}
            />
          </DetailContainer>
        </Box>
      </BasicContainer>
    </Box>
  );
}
