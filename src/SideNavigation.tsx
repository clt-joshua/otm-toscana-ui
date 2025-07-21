import Box from "@mui/material/Box";

export default function SideNavigation() {
	return (
		<Box
			component="aside"
			sx={{
				minWidth: "42px",
				width: "42px",
				boxShadow:
					"0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
				zIndex: 2,
			}}
		></Box>
	);
}
