import { useCallback, useState } from "react";
import type {
	SearchFormData,
	TaskManagerState,
} from "../components/pages/taskManager/types";

export function useTaskManager() {
	const [state, setState] = useState<TaskManagerState>({
		toggleSelection: "cn",
		selectedChips: [],
	});

	const [formData, setFormData] = useState<SearchFormData>({
		equipment: "",
		vesselKapal: "",
		gang: "",
		pow: "",
		cargoNo: "",
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

	const handleFormChange = useCallback(
		(field: keyof SearchFormData, value: string) => {
			setFormData((prev) => ({ ...prev, [field]: value }));
		},
		[],
	);

	return {
		state,
		formData,
		handleToggleChange,
		handleChipClick,
		handleFormChange,
	};
}
