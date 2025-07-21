import { Avatar, Chip, type ChipProps } from "@mui/material";

export default function ChipButton(props: ChipProps) {
	const { label, ...rest } = props;

	return (
		<Chip
			icon={
				props.icon ? (
					<Avatar
						sx={{
							backgroundColor: `${props.color}.dark`,
							width: "18px",
							height: "18px",
						}}
					>
						{props.icon}
					</Avatar>
				) : undefined
			}
			sx={{
				"& .MuiChip-label": {
					display: "flex",
					alignItems: "center",
				},
				"&::after": {
					content: '""',
					position: "absolute",
					right: "10px",
					top: "50%",
					transform: "translateY(-50%)",
					width: "0",
					height: "0",
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					borderTop: "4px solid currentColor",
				},
				position: "relative",
				paddingRight: "16px",
			}}
			label={label}
			variant="filled"
			color={props.color}
			onClick={props.onClick}
			{...rest}
		/>
	);
}
