import { Portal } from "@mui/material";
import Box from "@mui/material/Box";
import { useCallback } from "react";
import DetailContainer from "../../components/container/DetailContainer";
import {
	CHIP_GROUPS,
	END_BUTTON_DATA,
	START_BUTTON_DATA,
	STATUS_OPTIONS,
} from "../../constants/taskManagerData";
import { useTaskManager } from "../../hooks/useTaskManager";
import DataTableSection from "./DataTableSection";
import { TaskSearchSection } from "./SearchSection";
import { TaskManagerFooter } from "./TaskManagerFooter";
import { TaskManagerHeader } from "./TaskManagerHeader";

export default function TaskManager() {
	const { state, handleToggleChange, handleChipClick } = useTaskManager();
	const handleAction = useCallback((action: string) => {
		// 액션 처리 로직
		console.log("Action:", action);
	}, []);

	return (
		<Box
			component="div"
			display="flex"
			flexDirection="column"
			sx={{ flex: 1, minWidth: 0 }}
		>
			<Box flex={1} display="flex" flexDirection="column" sx={{ minWidth: 0 }}>
				<TaskManagerHeader
					toggleSelection={state.toggleSelection}
					onToggleChange={handleToggleChange}
				>
					<Box
						display="flex"
						flexDirection="column"
						gap={1.5}
						padding={1.5}
						flex={1}
						height="100%"
						sx={{ minWidth: 0 }}
					>
						<TaskSearchSection
							chipGroups={CHIP_GROUPS}
							statusOptions={STATUS_OPTIONS}
							selectedChips={state.selectedChips}
							onChipClick={handleChipClick}
						/>
						<DetailContainer
							sx={{
								display: "flex",
								flexDirection: "column",
								minWidth: 0,
							}}
						>
							<DataTableSection />
						</DetailContainer>
					</Box>
				</TaskManagerHeader>
			</Box>
			<Portal container={() => document.getElementById("footer")}>
				<TaskManagerFooter
					total={22100}
					startData={START_BUTTON_DATA}
					endData={END_BUTTON_DATA}
					onAction={handleAction}
				/>
			</Portal>
		</Box>
	);
}
