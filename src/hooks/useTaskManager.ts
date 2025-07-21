import { useCallback, useState } from "react";
import type { TaskManagerState } from "../pages/taskManager/TaskManagerTypes";

export function useTaskManager() {
	const [state, setState] = useState<TaskManagerState>({
		toggleSelection: "cn",
		selectedChips: [],
	});

	const handleToggleChange = useCallback((value: string) => {
		setState((prev) => ({ ...prev, toggleSelection: value }));
	}, []);

	const handleChipClick = useCallback((chip: string) => {
		setState((prev) => ({
			...prev,
			selectedChips: prev.selectedChips.includes(chip)
				? prev.selectedChips.filter((c) => c !== chip)
				: [...prev.selectedChips, chip],
		}));
	}, []);

	return {
		state,
		handleToggleChange,
		handleChipClick,
	};
}
