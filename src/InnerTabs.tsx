import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function InnerTabs() {
	const [tabs, setTabs] = useState<string[]>([
		"Tab 1",
		"Task Manager",
		"Tab 3",
	]);
	const [activeTab, setActiveTab] = useState<string>("Tab 1");

	return (
		<Box
			component="div"
			sx={{
				width: "100%",
				height: "28px",
				backgroundColor: blueGrey[200],
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "flex-start",
			}}
		>
			{tabs.map((tab) => (
				<InnerTab key={tab} label={tab} active={activeTab === tab} />
			))}
		</Box>
	);
	function InnerTab(props: { label: string; active: boolean }) {
		const { label, active } = props;
		return (
			<>
				<Box
					component="div"
					sx={{
						width: "fit-content",
						height: "100%",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						padding: "4px 8px 4px 12px",
						gap: "4px",
						cursor: "pointer",
						backgroundColor: active ? blueGrey[50] : "transparent",
						borderRadius: "4px 4px 0 0",
					}}
					onClick={() => setActiveTab(label)}
				>
					<Typography variant="tableHeader">{label}</Typography>
					<IconButton
						sx={{ width: "20px", height: "20px" }}
						onClick={(e) => {
							e.stopPropagation();
							e.preventDefault();
							setTabs(tabs.filter((tab) => tab !== label));
						}}
					>
						<CloseIcon sx={{ fontSize: "16px" }} />
					</IconButton>
				</Box>
				<Divider
					orientation="vertical"
					sx={{
						borderColor: "#90a4ae",
					}}
				/>
			</>
		);
	}
}
