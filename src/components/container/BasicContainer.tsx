import type { SxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function BasicContainer({
	children,
	title,
	buttonSlot,
	sx,
}: {
	children: React.ReactNode;
	title: string;
	buttonSlot?: React.ReactNode;
	sx?: SxProps;
}) {
	return (
		<Box
			flex={1}
			bgcolor="white"
			borderRadius={1}
			border={1}
			display="flex"
			flexDirection="column"
			borderColor={blueGrey[200]}
			sx={{ minWidth: 0, ...sx }}
		>
			<Box
				padding="8px 12px"
				borderBottom={1}
				borderColor={blueGrey[200]}
				display="flex"
				justifyContent="space-between"
			>
				<Typography variant="tableHeader">{title}</Typography>
				<Box display="flex" gap={1}>
					{buttonSlot}
				</Box>
			</Box>
			<Box flex={1}>{children}</Box>
		</Box>
	);
}
