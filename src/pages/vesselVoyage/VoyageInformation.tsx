import { Box, TextField, Grid } from "@mui/material";
import SearchContainer from "../../components/container/SearchContainer";
import BasicContainer from "../../components/container/BasicContainer";

export default function VoyageInformation() {
  return (
    <BasicContainer title="Voyage Information">
      <Box padding={1}>
        <SearchContainer padding={1} gap={1} display="flex">
          <TextField label="Vessel Code" value="Value" />
          <TextField label="Voyage Information" value="Value" />
        </SearchContainer>
        <Grid container spacing={1} mt={1} height="fit-content">
          <Grid size={3}>
            <TextField fullWidth label="OPR In Voyage" value="Value" />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Vessel Type" value="Value" />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="OPR Out Voyage" value="Value" />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Calling Type" value="Value" />
          </Grid>
          <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
            <TextField fullWidth label="ETA" value="Value" required />
            <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
          </Grid>
          <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
            <TextField fullWidth label="ETB" value="Value" required />
            <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Reference Voyage" value="Value" />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Service Type" value="Value" required />
          </Grid>
          <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
            <TextField fullWidth label="ETD" value="Value" required />
            <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Terminal Sequence" value="Value" />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
            <TextField
              fullWidth
              label="Calling Status"
              value="Value"
              disabled
            />
            <TextField
              value="Value"
              sx={{ minWidth: "64px", width: "64px" }}
              disabled
            />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={3}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
          <Grid size={9}>
            <TextField fullWidth label="Berth Group" value="Value" required />
          </Grid>
        </Grid>
      </Box>
    </BasicContainer>
  );
}
