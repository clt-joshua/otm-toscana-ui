import { ArrowDropDown } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { blueGrey, lightBlue } from "@mui/material/colors";
import { observer } from "mobx-react-lite";
import { AnimatePresence, motion } from "motion/react";
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
import { menuData } from "./constants/menuData";
import menuStore from "./stores/MenuStore";
import theme from "./theme";

// 메뉴 ID와 아이콘 매핑
const menuIconMap: Record<string, React.ReactNode> = {
	master: <IconMenuMaster />,
	document: <IconMenuDocument />,
	inventory: <IconMenuInventory />,
	truck: <IconMenuTruck />,
	vessel: <IconMenuVessel />,
	yard: <IconMenuYard />,
	cfs: <IconMenuCfs />,
	operation: <IconMenuOperation />,
	equipment: <IconMenuEquipment />,
	billing: <IconMenuBilling />,
	hr: <IconMenuHr />,
	monitoring: <IconMenuMonitoring />,
	dashboard: <IconMenuDashboard />,
	interface: <IconMenuInterface />,
	admin: <IconMenuAdmin />,
};

// MenuItem 컴포넌트 타입 정의
interface MenuItem {
	id: string;
	label: string;
	children?: MenuItem[];
}

interface MenuItemProps {
	item: MenuItem;
	level: number;
	isExpanded: boolean;
	// 현재 메뉴까지의 전체 경로
	fullPath: string[];
}

const MenuItem = observer(function MenuItem({
	item,
	level,
	isExpanded,
	fullPath,
}: MenuItemProps) {
	const hasChildren = item.children && item.children.length > 0;
	const expandedMenus = menuStore.expandedMenus;
	const isMenuExpanded = expandedMenus.includes(item.id);

	const handleClick = () => {
		if (level === 0) {
			// 최상위 메뉴
			if (hasChildren) {
				// Drawer Menu는 현재 클릭한 Depth 1의 메뉴만 펼치며, 나머지는 접어야 한다
				menuStore.expandTopLevelMenu(item.id);
			} else {
				// 하위 메뉴가 없는 최상위 메뉴 클릭 시 해당 페이지로 이동
				menuStore.setCurrentPagePath([item.id]);
				menuStore.toggleNavExpansion();
			}
		} else {
			// 하위 메뉴
			if (hasChildren) {
				menuStore.toggleMenu(item.id);
			} else {
				// 실제 페이지로 이동하는 로직
				// 탭이 없으면 추가하고 선택
				menuStore.addTabIfNotExists([...fullPath, item.id]);
				menuStore.toggleNavExpansion();
			}
		}
	};

	return (
		<>
			<Box
				width="100%"
				height="42px"
				display="flex"
				overflow="hidden"
				flexShrink={0}
				alignItems="center"
				whiteSpace="nowrap"
				borderBottom={1}
				sx={{
					// Depth별 스타일링 분기
					...(level === 0 && {
						height: "42px",
						backgroundColor: isMenuExpanded ? blueGrey[50] : "white",
						"&:hover": {
							backgroundColor: blueGrey[50],
						},
						borderColor: "#eceff1",
					}),
					...(level === 1 && {
						height: "32px",
						backgroundColor: isMenuExpanded ? blueGrey[200] : blueGrey[100],
						"&:hover": {
							backgroundColor: blueGrey[200],
						},
						borderColor: isMenuExpanded ? "#90a4ae" : "#b0bec5",
					}),
					...(level === 2 && {
						height: "30px",
						paddingLeft: "16px",
						color: isMenuExpanded ? "white" : "black",
						backgroundColor: isMenuExpanded ? blueGrey[500] : blueGrey[200],
						"&:hover": {
							backgroundColor: blueGrey[400],
						},
						borderColor: isMenuExpanded ? "#546e7a" : "#78909c",
					}),
					...(level === 3 && {
						height: "30px",
						paddingLeft: "24px",
						color: "white",
						backgroundColor: isMenuExpanded ? blueGrey[900] : blueGrey[800],
						"&:hover": {
							backgroundColor: blueGrey[900],
						},
					}),
					cursor: "pointer",
				}}
				onClick={handleClick}
			>
				<Box
					width="42px"
					height="42px"
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexShrink={0}
					color={theme.palette.action.active}
				>
					{level === 0 ? menuIconMap[item.id] : null}
				</Box>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isExpanded ? 1 : 0 }}
					exit={{ opacity: 0 }}
					transition={{
						delay: 0.15,
						duration: 0.2,
					}}
					style={{
						flex: 1,
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography variant="subtitle1" color="inherit">
						{item.label}
					</Typography>
				</motion.div>
				{hasChildren && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: isExpanded ? 1 : 0 }}
						exit={{ opacity: 0 }}
						transition={{
							delay: 0.15,
							duration: 0.2,
						}}
					>
						<motion.div
							style={{
								width: "42px",
								height: "42px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexShrink: 0,
							}}
							animate={{
								rotate: isMenuExpanded ? 180 : 0,
							}}
							transition={{ duration: 0.2 }}
						>
							<ArrowDropDown />
						</motion.div>
					</motion.div>
				)}
			</Box>

			{/* 자식 메뉴들 */}
			<AnimatePresence>
				{hasChildren && isMenuExpanded && (level === 0 ? isExpanded : true) && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						style={{ overflow: "hidden" }}
					>
						{item.children?.map((child, index) => (
							<motion.div
								key={child.id}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{
									delay: index * 0.05,
									duration: 0.2,
								}}
							>
								<MenuItem
									item={child}
									level={level + 1}
									isExpanded={true}
									fullPath={[...fullPath, item.id]}
								/>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
});

const SideNavigation = observer(function SideNavigation() {
	const handleMenuClick = (menuId: string) => {
		// Case 1, 2에 따른 처리
		menuStore.handleSideMenuClick(menuId);
	};

	// Case 3: Side Menu의 빈 공간 클릭 처리
	const handleEmptySpaceClick = (e: React.MouseEvent) => {
		// 메뉴 아이콘이 아닌 빈 공간을 클릭했는지 확인
		if (e.target === e.currentTarget) {
			menuStore.handleEmptySpaceClick();
		}
	};

	const currentDepth0Menu = menuStore.currentPagePath[0];

	return (
		<Box
			sx={{
				position: "relative",
				minWidth: "42px",
				height: "100%",
				boxShadow:
					"0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
				backgroundColor: "white",
				zIndex: 4,
			}}
		>
			{/* 기본 사이드 네비게이션 (항상 42px 고정) */}
			<motion.div
				animate={{
					opacity: menuStore.isNavExpanded ? 0 : 1,
				}}
				transition={{
					duration: 0.2,
					ease: "easeInOut",
				}}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "42px",
					height: "100%",
					zIndex: 1,
					pointerEvents: menuStore.isNavExpanded ? "none" : "auto",
				}}
			>
				<Box
					component="aside"
					sx={{
						minWidth: "42px",
						width: "42px",
						height: "100%",
						cursor: "pointer",
					}}
					onClick={handleEmptySpaceClick}
				>
					{menuData.map((item, index) => (
						<Box
							key={item.id}
							padding={1}
							width="42px"
							height="42px"
							display="flex"
							justifyContent="center"
							alignItems="center"
							bgcolor={currentDepth0Menu === item.id ? lightBlue[100] : "white"}
							borderBottom={
								index === menuData.length - 1 ? "none" : "1px solid #E0E0E0"
							}
							color={
								currentDepth0Menu === item.id
									? blueGrey[900]
									: theme.palette.action.active
							}
							sx={{
								cursor: "pointer",
							}}
							onClick={(e) => {
								e.stopPropagation();
								handleMenuClick(item.id);
							}}
						>
							{menuIconMap[item.id]}
						</Box>
					))}
				</Box>
			</motion.div>

			{/* 확장된 오버레이 메뉴 */}
			<AnimatePresence>
				{menuStore.isNavExpanded && (
					<motion.div
						key="expanded-menu"
						initial={{
							clipPath: "inset(0 calc(100% - 42px) 0 0)",
						}}
						animate={{
							clipPath: "inset(0 0 0 0)",
						}}
						exit={{
							clipPath: "inset(0 calc(100% - 42px) 0 0)",
						}}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
						}}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "264px",
							height: "100%",
							zIndex: 2,
						}}
					>
						<Box
							component="aside"
							sx={{
								width: "100%",
								height: "100%",
								boxShadow:
									"0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
								backgroundColor: "white",
								overflowY: "auto",
								overflowX: "hidden",
							}}
						>
							{menuData.map((item) => (
								<MenuItem
									key={item.id}
									item={item}
									level={0}
									isExpanded={menuStore.isNavExpanded}
									fullPath={[]}
								/>
							))}
						</Box>
					</motion.div>
				)}
			</AnimatePresence>
		</Box>
	);
});

export default SideNavigation;
