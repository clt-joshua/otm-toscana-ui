import ToggleButton, {
  type ToggleButtonProps,
} from "@mui/material/ToggleButton";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";
import { forwardRef } from "react";

interface CustomToggleButtonProps extends ToggleButtonProps {
  children: React.ReactNode;
  groupValue?: string;
}

const CustomToggleButton = forwardRef<
  HTMLButtonElement,
  CustomToggleButtonProps
>(({ children, value, groupValue, ...props }, ref) => {
  const isSelected = groupValue ? groupValue === value : false;

  return (
    <ToggleButton
      ref={ref}
      value={value}
      sx={{
        color: "text.primary",
        "&.Mui-selected": {
          color: "text.primary",
          backgroundColor: "action.selected",
        },
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
      {...props}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        {isSelected && (
          <CheckIcon
            sx={{
              fontSize: 16,
              color: "primary.main",
            }}
          />
        )}
        {children}
      </Box>
    </ToggleButton>
  );
});

CustomToggleButton.displayName = "CustomToggleButton";

export default CustomToggleButton;
