import { Place } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import DockIcon from "./assets/icon_dock.svg?react";
import Logo from "./assets/logo.svg?react";
import BasicCustomChip from "./components/chip/BasicCustomChip";
import ChipButton from "./components/chip/ChipButton";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate();

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
        <Logo />
        <Divider
          orientation="vertical"
          sx={{
            height: "24px",
          }}
        />
        <DockIcon />
        <BasicCustomChip
          label="ASIA"
          bgColor={theme.palette.info.main}
          textColor="white"
        />
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
        <ChipButton
          icon={<Place sx={{ fontSize: "16px" }} />}
          label="OTM"
          color="info"
          onClick={() => {}}
        />
        <IconButton>
          <InfoOutlineIcon sx={{ color: grey[300] }} />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("/login");
          }}
        >
          <AccountCircleIcon sx={{ color: grey[300] }} />
        </IconButton>
      </Box>
    </Box>
  );
}
