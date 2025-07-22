import Chip from "@mui/material/Chip";

export default function BasicCustomChip({
	label,
	bgColor,
	textColor,
}: {
	label: string;
	bgColor: string;
	textColor: string;
}) {
	return (
		<Chip
			label={label}
			size="small"
			variant="filled"
			sx={{
				backgroundColor: bgColor,
				color: textColor,
				borderRadius: "4px",
				"& .MuiChip-label": {
					fontWeight: 500,
				},
			}}
		/>
	);
}
