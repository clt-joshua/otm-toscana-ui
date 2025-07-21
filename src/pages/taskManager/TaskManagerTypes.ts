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

export interface TaskManagerTableProps {
	status: string;
	cargo: string;
	planType: string;
	type: string;
	opr: string;
	pod: string;
	npod: string;
	fpod: string;
	from: string;
	to: string;
	transporter: string;
	startEq: string;
	fa: string;
	recDelCardNo: string;
	waiting: string;
	planSeq: string;
	opProcess: string;
	port: string;
}
