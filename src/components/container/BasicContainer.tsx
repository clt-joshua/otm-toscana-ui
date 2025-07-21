import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function BasicContainer({
	children,
	title,
	buttonSlot,
}: {
	children: React.ReactNode;
	title: string;
	buttonSlot: React.ReactNode;
}) {
	return (
		<Box
			margin={1}
			flex={1}
			bgcolor="white"
			borderRadius={1}
			border={1}
			display="flex"
			flexDirection="column"
			borderColor={blueGrey[200]}
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
