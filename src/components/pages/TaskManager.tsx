import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { customColors } from "../../theme";
import { formatNumber } from "../../util";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedIconButton from "../button/OutlinedIconButton";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import CustomToggleButton from "../button/CustomToggleButton";
import BasicContainer from "../container/BasicContainer";
import SearchContainer from "../container/SearchContainer";
import DetailContainer from "../container/DetailContainer";
import CheckableCustomChip from "../chip/CheckableCustomChip";
import TruckIcon from "../../assets/icon_truck.svg";
import TerminalIcon from "../../assets/icon_terminal.svg";
import ShipIcon from "../../assets/icon_ship.svg?react";

export default function TaskManager() {
  const [toggleSelection, setToggleSelection] = useState<string>("cn");
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  function handleChipClick(chip: string) {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  }

  const group1 = [
    {
      label: "Ship",
      type: "icon",
      icon: <ShipIcon />,
      color: "white",
      bgColor: "rgba(21, 179, 205, 1)",
    },
    {
      label: "DS",
      type: "text",
      color: "white",
      bgColor: "rgba(14, 142, 194, 1)",
    },
    {
      label: "LD",
      type: "text",
      color: "white",
      bgColor: "rgba(240, 144, 40, 1)",
    },
    {
      label: "RS",
      type: "text",
      color: "white",
      bgColor: "rgba(58, 58, 58, 1)",
    },
    {
      label: "LC",
      type: "text",
      color: "black",
      bgColor: "rgba(246, 213, 109, 1)",
    },
    {
      label: "DE",
      type: "text",
      color: "black",
      bgColor: "rgba(217, 214, 48, 1)",
    },
  ];

  const group2 = [
    {
      label: "Truck",
      type: "icon",
      icon: TruckIcon,
      bgColor: "rgba(68, 162, 77, 1)",
      color: "white",
    },
    {
      label: "GI",
      type: "text",
      color: "black",
      bgColor: "rgba(72, 210, 98, 1)",
    },
    {
      label: "GO",
      type: "text",
      color: "white",
      bgColor: "rgba(250, 53, 51, 1)",
    },
    {
      label: "GC",
      type: "text",
      color: "white",
      bgColor: "rgba(160, 160, 160, 1)",
    },
  ];

  const group3 = [
    {
      label: "Terminal",
      type: "icon",
      icon: TerminalIcon,
      color: "white",
      bgColor: "rgba(251, 140, 0, 1)",
    },
    {
      label: "HK",
      type: "text",
      color: "white",
      bgColor: "rgba(91, 56, 170, 1)",
    },
    {
      label: "AH",
      type: "text",
      color: "black",
      bgColor: "rgba(206, 227, 238, 1)",
    },
    {
      label: "CT",
      type: "text",
      color: "white",
      bgColor: "rgba(22, 59, 84, 1)",
    },
  ];

  return (
    <Box component="div" display="flex" flexDirection="column" sx={{ flex: 1 }}>
      <Box flex={1} display="flex" flexDirection="column">
        <BasicContainer
          title="Task Manager"
          buttonSlot={
            <>
              <ToggleButtonGroup
                size="small"
                exclusive
                value={toggleSelection}
                onChange={(_, value) => {
                  if (value !== null) {
                    setToggleSelection(value);
                  }
                }}
              >
                <CustomToggleButton
                  value="cn"
                  color="info"
                  groupValue={toggleSelection}
                >
                  CN
                </CustomToggleButton>
                <CustomToggleButton
                  value="uc"
                  color="info"
                  groupValue={toggleSelection}
                >
                  UC
                </CustomToggleButton>
              </ToggleButtonGroup>
              <OutlinedIconButton color="info" aria-label="search">
                <SearchIcon sx={{ fontSize: "20px" }} />
              </OutlinedIconButton>
              <OutlinedIconButton color="info" aria-label="zoom">
                <ZoomOutMapIcon sx={{ fontSize: "20px" }} />
              </OutlinedIconButton>
            </>
          }
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={1.5}
            padding={1.5}
            flex={1}
            height="100%"
          >
            <SearchContainer
              display="flex"
              flexDirection="column"
              gap={1.5}
              padding={1.5}
            >
              <Box display="flex" flexDirection="row" gap={1.5}>
                <Box display="flex" gap={0.5}>
                  {group1.map((item) => (
                    <CheckableCustomChip
                      key={item.label}
                      bgColor={item.bgColor}
                      color={item.color}
                      isChecked={selectedChips.includes(item.label)}
                      onClick={() => handleChipClick(item.label)}
                    >
                      {item.type === "icon" ? item.icon : item.label}
                    </CheckableCustomChip>
                  ))}
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box display="flex" flexDirection="row" gap={0.5}>
                  {group2.map((item) => (
                    <CheckableCustomChip
                      key={item.label}
                      bgColor={item.bgColor}
                      color={item.color}
                      isChecked={selectedChips.includes(item.label)}
                      onClick={() => handleChipClick(item.label)}
                    >
                      {item.type === "icon" ? (
                        <img src={item.icon} alt={item.label} />
                      ) : (
                        item.label
                      )}
                    </CheckableCustomChip>
                  ))}
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box display="flex" flexDirection="row" gap={0.5}>
                  {group3.map((item) => (
                    <CheckableCustomChip
                      key={item.label}
                      bgColor={item.bgColor}
                      color={item.color}
                      isChecked={selectedChips.includes(item.label)}
                      onClick={() => handleChipClick(item.label)}
                    >
                      {item.type === "icon" ? (
                        <img src={item.icon} alt={item.label} />
                      ) : (
                        item.label
                      )}
                    </CheckableCustomChip>
                  ))}
                </Box>
              </Box>
            </SearchContainer>
            <DetailContainer flex={1} fontWeight="600">
              222
            </DetailContainer>
          </Box>
        </BasicContainer>
      </Box>
      <BottomButtonArea />
    </Box>
  );
}

function BottomButtonArea() {
  return (
    <Box
      height={48}
      bgcolor="white"
      borderTop={1}
      borderColor={customColors.components.rating.enabledBorder}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      paddingRight={2}
      gap={1.5}
    >
      <Typography variant="buttonLarge">TOTAL</Typography>
      <Typography variant="buttonLarge" color="info">
        {formatNumber(22100)}
      </Typography>
      <Divider orientation="vertical" sx={{ height: "24px" }} />
      <Typography variant="buttonLarge">START</Typography>
      <Box display="flex" gap={1}>
        <Button variant="outlined" color="info" disabled>
          RS
        </Button>
        <Button variant="outlined" color="info" disabled>
          RS01
        </Button>
        <Button variant="outlined" color="info" disabled>
          TP3-01-A-3
        </Button>
        <Button variant="outlined" color="info" disabled>
          2024-07-30 16:15
        </Button>
      </Box>
      <KeyboardDoubleArrowRightIcon color="action" />
      <Typography variant="buttonLarge">END</Typography>
      <Box display="flex" gap={1}>
        <Button variant="outlined" color="info">
          RS
        </Button>
        <Button variant="outlined" color="info">
          RS01
        </Button>
        <Button variant="outlined" color="info">
          TP3-01-A-3
        </Button>
        <Button variant="contained" color="info">
          RE-ALLOCATION
        </Button>
        <Button variant="contained" color="info">
          COMPLETE
        </Button>
      </Box>

      <Divider orientation="vertical" sx={{ height: "24px" }} />
      <Button variant="contained" color="info">
        ROLL BACK
      </Button>
    </Box>
  );
}
