import { Box, TextField } from "@mui/material";
import BasicContainer from "../../components/container/BasicContainer";
import SearchContainer from "../../components/container/SearchContainer";
import DetailContainer from "../../components/container/DetailContainer";
import BasicDataGrid from "../../components/data-grid/BasicDataGrid";
import {
  SIMPLE_TABLE_DATA,
  VESSEL_SCHEDULE_LIST_TABLE_DATA,
} from "../../constants/vesselVoyageData";

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
                { key: "vessel", label: "Vessel" },
                { key: "voyage", label: "Voyage" },
                { key: "oprVoyage", label: "OPR Voyage" },
                { key: "opr", label: "OPR" },
                { key: "vesselName", label: "Vessel Name" },
                { key: "ata", label: "ATA" },
                { key: "atb", label: "ATB" },
                { key: "atd", label: "ATD" },
                { key: "callingStatus", label: "Calling Status" },
                { key: "berth", label: "Berth" },
                { key: "alongside", label: "Alongside" },
                { key: "head", label: "Head" },
                { key: "bittNumber", label: "Bitt Number" },
                { key: "diversion", label: "Diversion" },
                { key: "cancel", label: "Cancel" },
                { key: "close", label: "Close" },
                { key: "workQuantity", label: "Work Quantity" },
              ]}
              data={VESSEL_SCHEDULE_LIST_TABLE_DATA.map((item) => ({
                vessel: item.vessel,
                voyage: item.voyage,
                oprVoyage: item.oprVoyage,
                opr: item.opr,
                vesselName: item.vesselName,
                ata: item.ata.toLocaleDateString(),
                atb: item.atb.toLocaleDateString(),
                atd: item.atd.toLocaleDateString(),
                callingStatus: item.callingStatus,
                berth: item.berth,
                alongside: item.alongside,
                head: item.head,
                bittNumber: item.bittNumber,
                diversion: item.diversion,
                cancel: item.cancel,
                close: item.close,
                workQuantity: item.workQuantity,
              }))}
            />
          </DetailContainer>
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
