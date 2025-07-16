import {
  Box,
  Divider,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import BasicCustomChip from "./components/chip/BasicCustomChip";
import logo from "./assets/logo.svg";
import DockIcon from "./assets/dock_icon.svg";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { grey } from "@mui/material/colors";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 8px 4px 4px",
        position: "relative",
        width: "100%",
        height: "44px",
        background: "#000000",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img src={logo} alt="logo" />
        <Divider
          orientation="vertical"
          sx={{
            height: "24px",
          }}
        />
        <img src={DockIcon} alt="dock" />
        <BasicCustomChip label="ASIA" />
        <Typography variant="tableHeader" color="white">
          Vessel Name
        </Typography>
        <IconButton>
          <ExpandCircleDownIcon
            sx={{
              rotate: "90deg",
            }}
          />
        </IconButton>
        <Typography variant="tableHeader" color="white">
          Voyage Info
        </Typography>
        <IconButton>
          <ExpandCircleDownIcon sx={{ rotate: "270deg" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <TextField
          placeholder="Search"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: grey[300], fontSize: "16px" }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiInputBase-root": {
              height: "26px",
              width: "200px",
              borderRadius: "4px",
              backgroundColor: grey[800],
              color: grey[300],
              fontSize: "13px",
              fontWeight: 400,
            },
          }}
        />
        <IconButton>
          <InfoOutlineIcon sx={{ color: grey[300] }} />
        </IconButton>
        <IconButton>
          <AccountCircleIcon sx={{ color: grey[300] }} />
        </IconButton>
      </Box>
    </Box>
  );
}
