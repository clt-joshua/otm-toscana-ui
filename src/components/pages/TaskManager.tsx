import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { customColors } from "../../theme";
import { formatNumber } from "../../util";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedIconButton from "../button/OutlinedIconButton";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

export default function TaskManager() {
  return (
    <Box component="div" display="flex" flexDirection="column" sx={{ flex: 1 }}>
      <Box flex={1} display="flex" flexDirection="column">
        <Box
          margin={1}
          flex={1}
          bgcolor="white"
          borderRadius={1}
          border={1}
          borderColor={blueGrey[200]}
        >
          <Box
            padding="8px 12px"
            borderBottom={1}
            borderColor={blueGrey[200]}
            display="flex"
            justifyContent="space-between"
          >
            <Typography variant="tableHeader">Task Manager</Typography>
            <Box display="flex" gap={1}>
              <OutlinedIconButton color="info" aria-label="search">
                <SearchIcon sx={{ fontSize: "20px" }} />
              </OutlinedIconButton>
              <OutlinedIconButton color="info" aria-label="zoom">
                <ZoomOutMapIcon sx={{ fontSize: "20px" }} />
              </OutlinedIconButton>
            </Box>
          </Box>
          <Box></Box>
        </Box>
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
