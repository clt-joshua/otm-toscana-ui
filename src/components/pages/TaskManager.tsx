import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { customColors } from "../../theme";
import { formatNumber } from "../../util";

export default function TaskManager() {
  return (
    <Box component="div" display="flex" flexDirection="column" sx={{ flex: 1 }}>
      <Box flex={1}>11</Box>
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
      </Box>
    </Box>
  );
}
