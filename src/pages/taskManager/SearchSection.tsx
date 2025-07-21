import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import CheckableChip from "../../components/chip/CheckableChip";
import CheckableCustomChip from "../../components/chip/CheckableCustomChip";
import SearchContainer from "../../components/container/SearchContainer";
import type { ChipGroup } from "./TaskManagerTypes";

interface TaskSearchSectionProps {
  chipGroups: ChipGroup[];
  statusOptions: string[];
  selectedChips: string[];
  onChipClick: (chip: string) => void;
}

export const TaskSearchSection = React.memo(function TaskSearchSection({
  chipGroups,
  statusOptions,
  selectedChips,
  onChipClick,
}: TaskSearchSectionProps) {
  return (
    <SearchContainer
      display="flex"
      flexDirection="column"
      gap={1.5}
      padding={1.5}
    >
      {/* Chip Filter Section */}
      <Box display="flex" flexDirection="row" gap={1.5}>
        {chipGroups.map((group, index) => (
          <React.Fragment key={group.id}>
            <Box display="flex" gap={0.5}>
              {group.items.map((item) => (
                <CheckableCustomChip
                  key={item.label}
                  bgColor={item.bgColor}
                  color={item.color}
                  isChecked={selectedChips.includes(item.label)}
                  onClick={() => onChipClick(item.label)}
                >
                  {item.type === "icon" ? item.icon : item.label}
                </CheckableCustomChip>
              ))}
            </Box>
            {index < chipGroups.length - 1 && (
              <Divider orientation="vertical" flexItem />
            )}
          </React.Fragment>
        ))}
        <Divider orientation="vertical" flexItem />
        <Box display="flex" flexDirection="row" alignItems="center" gap={0.5}>
          {statusOptions.map((item) => (
            <CheckableChip
              key={item}
              label={item}
              color="info"
              checked={selectedChips.includes(item)}
              onClick={() => onChipClick(item)}
            />
          ))}
          <TextField value={60} sx={{ width: "40px" }} disabled />
        </Box>
      </Box>

      {/* Search Form Section */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridTemplateRows="repeat(2, 1fr)"
        gap={1}
      >
        <TextField label="Equipment" />
        <TextField label="Vessel Kapal" disabled />
        <TextField label="Gang" />
        <TextField label="POW" />
        <TextField
          label="Cargo No."
          multiline
          maxRows={2}
          sx={{
            gridRow: "span 2",
          }}
        />
        <TextField label="Process Op." value="Value" />
        <TextField label="Vessel Kapal" disabled />
        <TextField label="Antrian" disabled value="Value" />
        <TextField label="N.POW" />
      </Box>
    </SearchContainer>
  );
});
