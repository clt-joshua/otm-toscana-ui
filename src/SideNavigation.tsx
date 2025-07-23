import Box from "@mui/material/Box";
import { observer } from "mobx-react-lite";
import { motion, AnimatePresence } from "motion/react";
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
import menuStore from "./stores/MenuStore";
import { Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

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

const SideNavigation = observer(function SideNavigation() {
  const handleMenuClick = () => {
    menuStore.toggleNavExpansion();
  };

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
              onClick={handleMenuClick}
            >
              {item.icon}
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
                overflow: "hidden",
              }}
            >
              {menuItems.map((item, index) => (
                <Box
                  key={item.id}
                  width="100%"
                  height="42px"
                  display="flex"
                  overflow="hidden"
                  flexShrink={0}
                  alignItems="center"
                  whiteSpace="nowrap"
                  borderBottom={
                    index === menuItems.length - 1
                      ? "none"
                      : "1px solid #E0E0E0"
                  }
                  sx={{
                    color: theme.palette.action.active,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                  onClick={handleMenuClick}
                >
                  <Box
                    width="42px"
                    height="42px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexShrink={0}
                  >
                    {item.icon}
                  </Box>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
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
                    <Typography variant="subtitle1" color="black">
                      {item.label}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.2,
                    }}
                  >
                    <Box
                      width="42px"
                      height="42px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexShrink={0}
                    >
                      <ArrowDropDown />
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
});

export default SideNavigation;
