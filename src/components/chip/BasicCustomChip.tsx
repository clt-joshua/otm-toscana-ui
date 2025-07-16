import Chip from "@mui/material/Chip";

export default function BasicCustomChip({ label }: { label: string }) {
  return (
    <Chip
      label={label}
      color="info"
      size="small"
      variant="filled"
      sx={{
        borderRadius: "4px",
        "& .MuiChip-label": {
          fontWeight: 500,
        },
      }}
    />
  );
}
