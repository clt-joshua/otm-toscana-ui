import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import CheckableChip from "../../chip/CheckableChip";
import CheckableCustomChip from "../../chip/CheckableCustomChip";
import SearchContainer from "../../container/SearchContainer";
import type { ChipGroup, SearchFormData } from "./types";

interface TaskSearchSectionProps {
  chipGroups: ChipGroup[];
  statusOptions: string[];
  selectedChips: string[];
  formData: SearchFormData;
  onChipClick: (chip: string) => void;
  onFormChange: (field: keyof SearchFormData, value: string) => void;
}

export const TaskSearchSection = React.memo(function TaskSearchSection({
  chipGroups,
  statusOptions,
  selectedChips,
  formData,
  onChipClick,
  onFormChange,
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
        <TextField
          label="Equipment"
          value={formData.equipment}
          onChange={(e) => onFormChange("equipment", e.target.value)}
        />
        <TextField
          label="Vessel Kapal"
          value={formData.vesselKapal}
          onChange={(e) => onFormChange("vesselKapal", e.target.value)}
          disabled
        />
        <TextField
          label="Gang"
          value={formData.gang}
          onChange={(e) => onFormChange("gang", e.target.value)}
        />
        <TextField
          label="POW"
          value={formData.pow}
          onChange={(e) => onFormChange("pow", e.target.value)}
        />
        <TextField
          label="Cargo No."
          value={formData.cargoNo}
          onChange={(e) => onFormChange("cargoNo", e.target.value)}
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
