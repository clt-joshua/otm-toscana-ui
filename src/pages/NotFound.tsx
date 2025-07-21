import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NotFound() {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100%"
		>
			<Typography variant="h4" color="error" sx={{ mt: 8 }}>
				404 - 페이지를 찾을 수 없습니다
			</Typography>
		</Box>
	);
}
