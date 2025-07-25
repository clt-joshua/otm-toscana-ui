import { Add, SaveOutlined, Search, ZoomOutMap } from "@mui/icons-material";
import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import ShipIcon from "../../assets/icon_menu_ship.svg?react";
import OutlinedIconButton from "../../components/button/OutlinedIconButton";
import CheckableCustomChip from "../../components/chip/CheckableCustomChip";
import BasicContainer from "../../components/container/BasicContainer";
import SearchContainer from "../../components/container/SearchContainer";

export default function VoyageInformation() {
	return (
		<BasicContainer
			title="Voyage Information"
			buttonSlot={
				<>
					<OutlinedIconButton color="info" aria-label="add">
						<Add sx={{ fontSize: "20px" }} />
					</OutlinedIconButton>
					<OutlinedIconButton color="info" aria-label="search">
						<Search sx={{ fontSize: "20px" }} />
					</OutlinedIconButton>
					<OutlinedIconButton color="info" aria-label="save">
						<SaveOutlined sx={{ fontSize: "20px" }} />
					</OutlinedIconButton>
					<OutlinedIconButton color="info" aria-label="zoom">
						<ZoomOutMap sx={{ fontSize: "20px" }} />
					</OutlinedIconButton>
				</>
			}
		>
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
						<TextField fullWidth label="Berth Purpose" value="Value" required />
					</Grid>
					<Grid size={3}>
						<TextField fullWidth label="Berth" value="Value" required />
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField
							fullWidth
							label="Vessel Shifting"
							value="Value"
							disabled
						/>
						<CheckableCustomChip
							isChecked={true}
							bgColor="rgba(21, 179, 205, 1)"
							color="white"
						>
							<ShipIcon />
						</CheckableCustomChip>
					</Grid>
					<Grid size={3}>
						<TextField fullWidth label="Service Lane(In)" value="Value" />
					</Grid>
					<Grid size={3}>
						<TextField fullWidth label="Alongside" value="Value" required />
					</Grid>
					<Grid size={3}>
						<TextField fullWidth label="Est. Volume" value="Value" />
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField
							fullWidth
							label="Service Lane(Out)"
							value="Value"
							required
						/>
						<Button variant="outlined">APPLY</Button>
					</Grid>
					<Grid size={3}>
						<TextField fullWidth label="Operator" value="Value" required />
					</Grid>
					<Grid size={3}>
						<TextField fullWidth label="Cargo Agent" value="Value" />
					</Grid>
					<Grid size={3}>
						<TextField
							fullWidth
							label="Departure Draft (m)"
							value="Value"
							slotProps={{
								input: {
									endAdornment: (
										<InputAdornment position="end">m</InputAdornment>
									),
								},
							}}
						/>
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField
							fullWidth
							label="Berth Position"
							value="Value"
							required
						/>
						<TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField
							fullWidth
							label="Berth Position (Bitt)"
							value="Value"
							required
						/>
						<TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField fullWidth label="Moorning Bitt" value="Value" required />
						<TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField label="Bridge Position" value="Value" disabled />
						<Button variant="outlined" size="small" sx={{ width: "140px" }}>
							CALCULATION
						</Button>
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField fullWidth label="DS" value="Value" />
						<TextField fullWidth label="LD" value="Value" />
						<TextField fullWidth label="SH" value="Value" />
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField fullWidth label="Bulk In/Out" value="Value" />
						<TextField value="Value" sx={{ minWidth: "64px", width: "64px" }} />
					</Grid>
					<Grid size={3} display="flex" flexDirection="row" gap={0.5}>
						<TextField fullWidth label="TOT" value="Value" disabled />
						<TextField fullWidth label="DS" value="Value" />
						<TextField fullWidth label="LD GB" value="Value" />
					</Grid>
					<Grid size={9}>
						<TextField fullWidth label="Voyage Remark" value="Value" />
					</Grid>
				</Grid>
			</Box>
		</BasicContainer>
	);
}
