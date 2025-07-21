import { ButtonBase } from "@mui/material";
import theme from "../../theme";

export default function CheckableCustomChip({
  children,
  bgColor,
  onClick,
  color,
  isChecked,
}: {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  isChecked?: boolean;
  onClick?: () => void;
}) {
  // 자식이 문자열인지 확인
  const isText = typeof children === "string" || typeof children === "number";

  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        height: 26,
        width: 26,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        bgcolor: isChecked
          ? bgColor
          : (theme) => theme.palette.action.disabledBackground,
        fontSize: isText ? "13px" : "20px",
        color: isChecked ? color : theme.palette.action.disabled,
        cursor: "pointer",
        userSelect: "none",
        fontWeight: isText ? "500 !important" : "normal !important",
        "&:hover": {
          opacity: 0.8,
        },
        "& *": {
          fontWeight: isText ? "500 !important" : "normal !important",
        },
      }}
    >
      {children}
    </ButtonBase>
  );
}
