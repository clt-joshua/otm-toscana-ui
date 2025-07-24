import { Box, type BoxProps } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function DetailContainer({ children, ...props }: BoxProps) {
	return (
		<Box
			borderRadius={1}
			border={1}
			borderColor={blueGrey[200]}
			sx={{
				overflow: "auto",
				overflowX: "auto",
				width: "100%",
				height: "100%",
				minWidth: 0,
				minHeight: 0,
				maxWidth: "100%",
				flexShrink: 1,
				...props.sx,
			}}
			{...props}
		>
			{children}
		</Box>
	);
}
