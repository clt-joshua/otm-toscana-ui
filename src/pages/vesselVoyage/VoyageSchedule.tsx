import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import BasicContainer from "../../components/container/BasicContainer";
import OutlinedIconButton from "../../components/button/OutlinedIconButton";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export default function VoyageSchedule() {
  return (
    <BasicContainer title="Voyage Schedule">
      <Grid container spacing={1} padding={1}>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="ETA" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="ATA" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Time of Stay (ATD-ATB)" value="Value" />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="ETB" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="ATB" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField label="Long Term Delay" value="Value" />
          <TextField value="Value" />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="ETD" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Work Start" value="Value" disabled />
          <TextField
            value="Value"
            sx={{ minWidth: "64px", width: "64px" }}
            disabled
          />
          <OutlinedIconButton>
            <SaveOutlinedIcon sx={{ fontSize: 20 }} />
          </OutlinedIconButton>
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField label="Arrival Delay" value="Value" />
          <TextField value="Value" />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="LBL0004458" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField label="Berthing Delay" value="Value" />
          <TextField value="Value" />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField label="Work Finish" value="Value" disabled />
          <TextField
            value="Value"
            sx={{ minWidth: "64px", width: "64px" }}
            disabled
          />
          <OutlinedIconButton>
            <SaveOutlinedIcon sx={{ fontSize: 20 }} />
          </OutlinedIconButton>
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Gate Open" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="ATD" value="Value" disabled />
          <TextField
            value="Value"
            sx={{ minWidth: "64px", width: "64px" }}
            disabled
          />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField label="Working Delay" value="Value" />
          <TextField value="Value" />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="CCT" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Discharge Start" value="Value" disabled />
          <TextField
            value="Value"
            sx={{ minWidth: "64px", width: "64px" }}
            disabled
          />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Departure Delay" value="Value" />
          <TextField value="Value" />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Discharge End" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Calling Seq." value="Value" />
          <Button variant="outlined">LINK</Button>
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField label="Arrival" value="Value" />
          <TextField label="Departure" value="Value" />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Charter Commerce" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Prev.Port Arrival" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Prev.Port Departure" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Loading Start" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Loading End" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Next Port Arrival" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={3} display="flex" flexDirection="row" gap={0.5}>
          <TextField fullWidth label="Charter Completed" value="Value" />
          <TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
        </Grid>
        <Grid size={4} display="flex" flexDirection="row" gap={1}>
          <FormControlLabel control={<Checkbox />} label="Diversion" />
          <TextField value="Value" fullWidth disabled />
        </Grid>
        <Grid size={4} display="flex" flexDirection="row" gap={1}>
          <FormControlLabel control={<Checkbox />} label="Voyage Cancel" />
          <TextField value="Value" fullWidth disabled />
        </Grid>
        <Grid size={4} display="flex" flexDirection="row" gap={1}>
          <FormControlLabel control={<Checkbox />} label="Voyage Close" />
          <TextField value="Value" fullWidth disabled />
        </Grid>
        <Grid
          size={12}
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          gap={0.5}
        >
          <Button variant="contained" color="info" disabled>
            VOYAGE CLOSE
          </Button>
          <Button variant="contained" color="primary" disabled>
            VOYAGE CLOSE CANCEL
          </Button>
        </Grid>
      </Grid>
    </BasicContainer>
  );
}
