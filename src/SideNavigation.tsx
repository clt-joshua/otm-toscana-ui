import Box from "@mui/material/Box";
import IconMenuMaster from "./assets/icon_menu_master.svg?react";
import IconMenuDocument from "./assets/icon_menu_document.svg?react";

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
