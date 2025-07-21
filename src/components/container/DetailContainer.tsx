import { Box, type BoxProps } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function DetailContainer({ children, ...props }: BoxProps) {
	return (
		<Box borderRadius={1} border={1} borderColor={blueGrey[200]} {...props}>
			{children}
		</Box>
	);
}
