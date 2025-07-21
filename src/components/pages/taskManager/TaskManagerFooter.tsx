import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import { customColors } from "../../../theme";
import { formatNumber } from "../../../util";
import type { ButtonData } from "./TaskManagerTypes";

interface TaskManagerFooterProps {
  total: number;
  startData: ButtonData[];
  endData: ButtonData[];
  onAction: (action: string) => void;
}

export const TaskManagerFooter = React.memo(function TaskManagerFooter({
  total,
  startData,
  endData,
  onAction,
}: TaskManagerFooterProps) {
  const renderButtonGroup = (buttons: ButtonData[]) => (
    <Box display="flex" gap={1}>
      {buttons.map((button, index) => (
        <Button
          key={`${button.label}-${index}`}
          variant={button.variant}
          color="info"
          disabled={button.disabled}
          onClick={() => button.action && onAction(button.action)}
        >
          {button.label}
        </Button>
      ))}
    </Box>
  );

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
        {formatNumber(total)}
      </Typography>
      <Divider orientation="vertical" sx={{ height: "24px" }} />
      <Typography variant="buttonLarge">START</Typography>
      {renderButtonGroup(startData)}
      <KeyboardDoubleArrowRightIcon color="action" />
      <Typography variant="buttonLarge">END</Typography>
      {renderButtonGroup(endData)}
      <Divider orientation="vertical" sx={{ height: "24px" }} />
      <Button
        variant="contained"
        color="info"
        onClick={() => onAction("rollback")}
      >
        ROLL BACK
      </Button>
    </Box>
  );
});
