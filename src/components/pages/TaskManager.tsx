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

export default function TaskManager() {
  const [toggleSelection, setToggleSelection] = useState<string>("cn");
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  function handleChipClick(chip: string) {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  }

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
              <Box display="flex" gap={0.5}>
                <CheckableCustomChip
                  bgColor="rgba(14, 142, 194, 1)"
                  color="white"
                  isChecked={selectedChips.includes("ds")}
                  onClick={() => handleChipClick("ds")}
                >
                  DS
                </CheckableCustomChip>
                <CheckableCustomChip
                  bgColor="rgba(240, 144, 40, 1)"
                  color="white"
                  isChecked={selectedChips.includes("ld")}
                  onClick={() => handleChipClick("ld")}
                >
                  LD
                </CheckableCustomChip>
                <CheckableCustomChip
                  bgColor="rgba(58, 58, 58, 1)"
                  color="white"
                  isChecked={selectedChips.includes("rs")}
                  onClick={() => handleChipClick("rs")}
                >
                  RS
                </CheckableCustomChip>
                <CheckableCustomChip
                  bgColor="rgba(246, 213, 109, 1)"
                  color="black"
                  isChecked={selectedChips.includes("lc")}
                  onClick={() => handleChipClick("lc")}
                >
                  LC
                </CheckableCustomChip>
                <CheckableCustomChip
                  bgColor="rgba(217, 214, 48, 1)"
                  color="black"
                  isChecked={selectedChips.includes("de")}
                  onClick={() => handleChipClick("de")}
                >
                  DE
                </CheckableCustomChip>
              </Box>
            </SearchContainer>
            <DetailContainer flex={1}>222</DetailContainer>
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
