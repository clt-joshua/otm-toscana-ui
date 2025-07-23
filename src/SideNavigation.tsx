import Box from "@mui/material/Box";
import IconMenuAdmin from "./assets/icon_menu_admin.svg?react";
import IconMenuBilling from "./assets/icon_menu_billing.svg?react";
import IconMenuDashboard from "./assets/icon_menu_dashboard.svg?react";
import IconMenuDocument from "./assets/icon_menu_document.svg?react";
import IconMenuEquipment from "./assets/icon_menu_equipment.svg?react";
import IconMenuHr from "./assets/icon_menu_hr.svg?react";
import IconMenuInterface from "./assets/icon_menu_interface.svg?react";
import IconMenuInventory from "./assets/icon_menu_inventory.svg?react";
import IconMenuMaster from "./assets/icon_menu_master.svg?react";
import IconMenuMonitoring from "./assets/icon_menu_monitoring.svg?react";
import IconMenuOperation from "./assets/icon_menu_operation.svg?react";
import IconMenuVessel from "./assets/icon_menu_ship.svg?react";
import IconMenuTruck from "./assets/icon_menu_truck.svg?react";
import IconMenuCfs from "./assets/icon_menu_warehouse.svg?react";
import IconMenuYard from "./assets/icon_menu_yard.svg?react";
import theme from "./theme";

const menuItems = [
	{
		id: "master",
		label: "Master",
		icon: <IconMenuMaster />,
	},
	{
		id: "document",
		label: "Document",
		icon: <IconMenuDocument />,
	},
	{
		id: "inventory",
		label: "Inventory",
		icon: <IconMenuInventory />,
	},
	{
		id: "truck",
		label: "Truck",
		icon: <IconMenuTruck />,
	},
	{
		id: "vessel",
		label: "Vessel",
		icon: <IconMenuVessel />,
	},
	{
		id: "yard",
		label: "Yard",
		icon: <IconMenuYard />,
	},
	{
		id: "cfs",
		label: "CFS & Warehouse",
		icon: <IconMenuCfs />,
	},
	{
		id: "operation",
		label: "Operation",
		icon: <IconMenuOperation />,
	},
	{
		id: "equipment",
		label: "Equipment",
		icon: <IconMenuEquipment />,
	},
	{
		id: "billing",
		label: "Billing",
		icon: <IconMenuBilling />,
	},
	{
		id: "hr",
		label: "HR",
		icon: <IconMenuHr />,
	},
	{
		id: "monitoring",
		label: "Monitoring",
		icon: <IconMenuMonitoring />,
	},
	{
		id: "dashboard",
		label: "Dashboard",
		icon: <IconMenuDashboard />,
	},
	{
		id: "interface",
		label: "Interface",
		icon: <IconMenuInterface />,
	},
	{
		id: "admin",
		label: "Admin",
		icon: <IconMenuAdmin />,
	},
];

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
		>
			{menuItems.map((item, index) => (
				<Box
					key={item.id}
					padding={1}
					width="42px"
					height="42px"
					display="flex"
					justifyContent="center"
					alignItems="center"
					borderBottom={
						index === menuItems.length - 1 ? "none" : "1px solid #E0E0E0"
					}
					sx={{
						color: theme.palette.action.active,
						cursor: "pointer",
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.04)",
						},
					}}
				>
					{item.icon}
				</Box>
			))}
		</Box>
	);
}
