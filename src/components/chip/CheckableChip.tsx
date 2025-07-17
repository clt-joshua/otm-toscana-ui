import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import Avatar from "@mui/material/Avatar";
import Chip, { type ChipProps } from "@mui/material/Chip";

export default function CheckableChip(props: ChipProps & { checked: boolean }) {
	const { checked, label, ...rest } = props;
	return (
		<Chip
			icon={
				checked ? (
					<Avatar
						sx={{ backgroundColor: "info.dark", width: "18px", height: "18px" }}
					>
						<CheckIcon sx={{ fontSize: "18px", color: "white" }} />
					</Avatar>
				) : undefined
			}
			sx={{
				"& .MuiChip-label": {
					paddingRight: checked ? "4px" : undefined,
					display: "flex",
					alignItems: "center",
				},
			}}
			label={
				<>
					{label}
					{checked && (
						<ArrowDropDownIcon sx={{ fontSize: "18px", ml: "4px" }} />
					)}
				</>
			}
			color={checked ? "info" : "default"}
			variant={checked ? "filled" : "outlined"}
			{...rest}
		/>
	);
}
