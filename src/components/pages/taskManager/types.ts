export interface ChipItem {
	label: string;
	type: "icon" | "text";
	icon?: React.ReactNode;
	color: string;
	bgColor: string;
}

export interface ChipGroup {
	id: string;
	items: ChipItem[];
}

export interface TaskManagerState {
	toggleSelection: string;
	selectedChips: string[];
}

export interface SearchFormData {
	equipment: string;
	vesselKapal: string;
	gang: string;
	pow: string;
	cargoNo: string;
}

export interface ButtonData {
	label: string;
	variant: "outlined" | "contained";
	disabled?: boolean;
	action?: string;
}
