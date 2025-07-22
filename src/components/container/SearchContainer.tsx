import { Box, type BoxProps } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { customColors } from "../../theme";

export default function SearchContainer({
	children,
	...props
}: {
	children: React.ReactNode;
} & BoxProps) {
	return (
		<Box
			bgcolor={customColors.blueGrey[20]}
			borderRadius={1}
			border={1}
			borderColor={blueGrey[200]}
			{...props}
		>
			{children}
		</Box>
	);
}
