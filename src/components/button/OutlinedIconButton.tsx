import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";

export default function OutlinedIconButton(props: ButtonProps) {
  return (
    <Button
      variant="outlined"
      color="info"
      sx={{
        minWidth: 26,
        width: 26,
        height: 26,
        padding: 0,
        borderRadius: 1,
      }}
      {...props}
    />
  );
}
