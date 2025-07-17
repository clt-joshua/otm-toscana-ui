import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import menuStore from "./stores/MenuStore";

interface InnerTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
  onClose: (e: React.MouseEvent) => void;
}

function InnerTab({ label, active, onClick, onClose }: InnerTabProps) {
  // TODO: InnerTab이 Detach될때 해당 페이지를 새 탭으로 여는 기능 추가
  return (
    <>
      <Box
        component="div"
        width="fit-content"
        height="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        padding="4px 8px 4px 12px"
        gap="4px"
        borderRadius="4px 4px 0 0"
        bgcolor={active ? blueGrey[50] : "transparent"}
        sx={{
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <Typography variant="tableHeader">{label}</Typography>
        <IconButton sx={{ width: "20px", height: "20px" }} onClick={onClose}>
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

const InnerTabsComponent = observer(function InnerTabsComponent() {
  return (
    <Box
      component="div"
      width="100%"
      height="28px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      bgcolor={blueGrey[200]}
      paddingX={1.5}
    >
      {menuStore.tabs.map((tab) => (
        <InnerTab
          key={tab}
          label={tab}
          active={menuStore.selectedMenu === tab}
          onClick={() => menuStore.setMenu(tab)}
          onClose={(e) => {
            e.stopPropagation();
            e.preventDefault();
            menuStore.closeTab(tab);
          }}
        />
      ))}
    </Box>
  );
});

export default InnerTabsComponent;
