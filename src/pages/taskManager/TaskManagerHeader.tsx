import SearchIcon from "@mui/icons-material/Search";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { ToggleButtonGroup } from "@mui/material";
import React from "react";
import CustomToggleButton from "../../components/button/CustomToggleButton";
import OutlinedIconButton from "../../components/button/OutlinedIconButton";
import BasicContainer from "../../components/container/BasicContainer";

interface TaskManagerHeaderProps {
  toggleSelection: string;
  onToggleChange: (value: string) => void;
  children: React.ReactNode;
}

export const TaskManagerHeader = React.memo(function TaskManagerHeader({
  toggleSelection,
  onToggleChange,
  children,
}: TaskManagerHeaderProps) {
  return (
    <BasicContainer
      title="Task Manager"
      buttonSlot={
        <>
          <ToggleButtonGroup
            size="small"
            exclusive
            value={toggleSelection}
            onChange={(_, value) => value !== null && onToggleChange(value)}
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
      {children}
    </BasicContainer>
  );
});
