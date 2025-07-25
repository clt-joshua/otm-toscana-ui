import {
	Add,
	Remove,
	SaveOutlined,
	Search,
	SettingsOutlined,
	ZoomOutMap,
} from "@mui/icons-material";
import { Box, Checkbox, Tab, Tabs, TextField } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { format } from "date-fns";
import { useState } from "react";
import ExcelIcon from "../../assets/icon_excel.svg?react";
import PdfIcon from "../../assets/icon_pdf.svg?react";
import OutlinedIconButton from "../../components/button/OutlinedIconButton";
import BasicCustomChip from "../../components/chip/BasicCustomChip";
import BasicContainer from "../../components/container/BasicContainer";
import DetailContainer from "../../components/container/DetailContainer";
import SearchContainer from "../../components/container/SearchContainer";
import BasicDataGrid from "../../components/data-grid/BasicDataGrid";
import {
	SIMPLE_TABLE_DATA,
	VESSEL_SCHEDULE_LIST_TABLE_DATA,
} from "../../constants/vesselVoyageData";
import VoyageInformation from "./VoyageInformation";
import VoyageSchedule from "./VoyageSchedule";

export default function VesselVoyage() {
	const [tab, setTab] = useState<string>("vesselInformation");

	return (
		<Box gap={1} flex={1} display="flex" flexDirection="column">
			<BasicContainer
				title="Vessel Schedule List"
				sx={{ gridColumn: "span 2" }}
				buttonSlot={
					<>
						<OutlinedIconButton color="info" aria-label="excel">
							<ExcelIcon />
						</OutlinedIconButton>
						<OutlinedIconButton color="info" aria-label="pdf">
							<PdfIcon />
						</OutlinedIconButton>
						<OutlinedIconButton color="info" aria-label="add">
							<Add sx={{ fontSize: "20px" }} />
						</OutlinedIconButton>
						<OutlinedIconButton color="info" aria-label="remove">
							<Remove sx={{ fontSize: "20px" }} />
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
							minWidth: 0,
							height: 200,
						}}
					>
						<BasicDataGrid
							header={[
								{ key: "no", label: "No" },
								{ key: "vessel", label: "Vessel" },
								{ key: "voyage", label: "Voyage" },
								{ key: "oprVoyage", label: "OPR Voyage" },
								{ key: "opr", label: "OPR" },
								{ key: "vesselName", label: "Vessel Name" },
								{ key: "ata", label: "ATA (ETA)" },
								{ key: "atb", label: "ATB (ETB)" },
								{ key: "atd", label: "ATD (ETD)" },
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
							data={VESSEL_SCHEDULE_LIST_TABLE_DATA.map((item, index) => ({
								no: index + 1,
								vessel: item.vessel,
								voyage: item.voyage,
								oprVoyage: item.oprVoyage,
								opr: <OPRCell opr={item.opr} />,
								vesselName: item.vesselName,
								ata: (
									<span style={{ textDecoration: "underline" }}>
										{format(item.ata, "yyyy-MM-dd HH:mm")}
									</span>
								),
								atb: (
									<span style={{ textDecoration: "underline" }}>
										{format(item.atb, "yyyy-MM-dd HH:mm")}
									</span>
								),
								atd: (
									<span style={{ textDecoration: "underline" }}>
										{format(item.atd, "yyyy-MM-dd HH:mm")}
									</span>
								),
								callingStatus: (
									<CallingStatusCell callingStatus={item.callingStatus} />
								),
								berth: item.berth,
								alongside: item.alongside,
								head: item.head,
								bittNumber: item.bittNumber,
								diversion: item.diversion,
								cancel: <Checkbox />,
								close: <Checkbox />,
								workQuantity: item.workQuantity,
							}))}
						/>
					</DetailContainer>
				</Box>
			</BasicContainer>
			<Box
				display="flex"
				flexDirection="column"
				bgcolor="white"
				borderRadius={1}
				border={1}
				borderColor={blueGrey[200]}
				sx={{
					gridColumn: "span 2",
				}}
			>
				<Box paddingX={1} borderBottom={1} borderColor={blueGrey[200]}>
					<Tabs value={tab} onChange={(_, value) => setTab(value)}>
						<Tab label="Vessel Information" value="vesselInformation" />
						<Tab label="Voyage Schedule" value="voyageSchedule" />
						<Tab label="Voyage Log" value="voyageLog" />
					</Tabs>
				</Box>
				<Box display="flex" flexDirection="row" padding={1} gap={1}>
					<VoyageInformation />
					<VoyageSchedule />
				</Box>
			</Box>
			<Box display="flex" flexDirection="row" gap={1}>
				<BasicContainer
					title="Voyage Information (Supplement)"
					buttonSlot={
						<>
							<OutlinedIconButton color="info" aria-label="settings">
								<SettingsOutlined sx={{ fontSize: "20px" }} />
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
								minWidth: 0,
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
				<BasicContainer
					title="Voyage Log"
					buttonSlot={
						<>
							<OutlinedIconButton color="info" aria-label="search">
								<Search sx={{ fontSize: "20px" }} />
							</OutlinedIconButton>
							<OutlinedIconButton color="info" aria-label="zoom">
								<ZoomOutMap sx={{ fontSize: "20px" }} />
							</OutlinedIconButton>
						</>
					}
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
						<DetailContainer
							sx={{
								display: "flex",
								flexDirection: "column",
								minWidth: 0,
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
		</Box>
	);
}

function OPRCell({ opr }: { opr: string }) {
	const chipMap: Record<string, { bgColor: string; textColor: string }> = {
		MOL: { bgColor: "rgba(195, 230, 203, 1)", textColor: "black" },
		MSC: { bgColor: "rgba(246, 241, 71, 1)", textColor: "black" },
		HSD: { bgColor: "rgba(201, 47, 35, 1)", textColor: "white" },
		MSK: { bgColor: "rgba(107, 176, 238, 1)", textColor: "black" },
	};

	const chip = chipMap[opr];

	if (!chip) {
		return null;
	}

	return (
		<BasicCustomChip
			label={opr}
			bgColor={chip.bgColor}
			textColor={chip.textColor}
		/>
	);
}

function CallingStatusCell({ callingStatus }: { callingStatus: string }) {
	const chipMap: Record<string, { bgColor: string; textColor: string }> = {
		BERTHING: { bgColor: "rgba(27, 58, 83, 1)", textColor: "white" },
		PLANNED: { bgColor: "rgba(244, 214, 115, 1)", textColor: "black" },
		READY: { bgColor: "rgba(86, 58, 168, 1)", textColor: "white" },
	};

	const chip = chipMap[callingStatus];

	if (!chip) {
		return null;
	}

	return (
		<BasicCustomChip
			label={callingStatus}
			bgColor={chip.bgColor}
			textColor={chip.textColor}
		/>
	);
}
