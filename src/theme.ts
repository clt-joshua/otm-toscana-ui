import { createTheme } from "@mui/material/styles";

// 타입 확장: 커스텀 타이포그래피 variant 추가
// import type { TypographyVariantsOptions } from "@mui/material/styles"; // 사용하지 않으므로 제거

declare module "@mui/material/styles" {
  interface TypographyVariants {
    alertTitle: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    buttonSmall: React.CSSProperties;
    tableHeader: React.CSSProperties;
    inputValue: React.CSSProperties;
    badgeLabel: React.CSSProperties;
    datagridAggregationColumnHeaderLabel: React.CSSProperties;
    inputLabel11: React.CSSProperties;
    chipLabel: React.CSSProperties;
    avatarInitialsMd: React.CSSProperties;
    tooltipLabel: React.CSSProperties;
    inputHelper: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    alertTitle?: React.CSSProperties;
    buttonLarge?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
    tableHeader?: React.CSSProperties;
    inputValue?: React.CSSProperties;
    badgeLabel?: React.CSSProperties;
    datagridAggregationColumnHeaderLabel?: React.CSSProperties;
    inputLabel11?: React.CSSProperties;
    chipLabel?: React.CSSProperties;
    avatarInitialsMd?: React.CSSProperties;
    tooltipLabel?: React.CSSProperties;
    inputHelper?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    alertTitle: true;
    buttonLarge: true;
    buttonSmall: true;
    tableHeader: true;
    inputValue: true;
    badgeLabel: true;
    datagridAggregationColumnHeaderLabel: true;
    inputLabel11: true;
    chipLabel: true;
    avatarInitialsMd: true;
    tooltipLabel: true;
    inputHelper: true;
  }
}

// 커스텀 컬러 팔레트 (별도 export)
export const customColors = {
  lightBlue: {
    100: "#B3E5FC",
    200: "#81D4FA",
  },
  blueGrey: {
    20: "#F8FBFD",
    50: "#ECEFF1",
    100: "#CFD8DC",
    200: "#B0BEC5",
    300: "#90A4AE",
    900: "#263238",
  },
  teal: {
    50: "#E0F2F1",
  },
  amber: {
    100: "#FFECB3",
    200: "#FFE082",
  },
  grey: {
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    800: "#424242",
  },
  components: {
    rating: {
      enabledBorder: "rgba(0, 0, 0, 0.23)",
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
      contrastText: "#fff",
    },
    info: {
      main: "#0288D1",
      dark: "#01579B",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#2E7D32",
      dark: "#1B5E20",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D32F2F",
    },
    secondary: {
      main: "#9c27b0",
      light: "#d05ce3",
      dark: "#6a0080",
      contrastText: "#fff",
    },
    grey: {
      50: customColors.blueGrey[50],
      100: customColors.blueGrey[100],
      200: customColors.blueGrey[200],
      300: customColors.grey[300],
      400: customColors.grey[400],
      500: customColors.grey[500],
      600: customColors.grey[600],
      800: customColors.grey[800],
      900: customColors.blueGrey[900],
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.2)",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    divider: "#E0E0E0",
    // action은 palette 내부에 위치해야 함
    action: {
      active: "rgba(84, 110, 122, 0.88)",
      hover: "rgba(84, 110, 122, 0.04)",
      selected: "rgba(84, 110, 122, 0.12)",
      focus: "rgba(84, 110, 122, 0.16)",
      disabled: "rgba(84, 110, 122, 0.48)",
      disabledBackground: "rgba(84, 110, 122, 0.16)",
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    h6: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.6, // 160%
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.57, // 157%
      letterSpacing: 0.1,
    },
    body2: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.43, // 143%
      letterSpacing: 0.17,
    },
    // 커스텀 variant
    alertTitle: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5, // 150%
      letterSpacing: 0.15,
    },
    buttonLarge: {
      fontWeight: 500,
      fontSize: 15,
      lineHeight: "26px",
      letterSpacing: 0.46,
      textTransform: "uppercase",
    },
    buttonSmall: {
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "22px",
      letterSpacing: 0.46,
      textTransform: "uppercase",
    },
    tableHeader: {
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "23px",
      letterSpacing: 0.17,
    },
    inputValue: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "19px",
      letterSpacing: 0.15,
    },
    badgeLabel: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "20px",
      letterSpacing: 0.14,
    },
    datagridAggregationColumnHeaderLabel: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "12px",
      letterSpacing: 0.15,
    },
    inputLabel11: {
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "11px",
      letterSpacing: 0.15,
    },
    chipLabel: {
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "16px",
      letterSpacing: 0.16,
    },
    avatarInitialsMd: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "12px",
      letterSpacing: 0,
    },
    tooltipLabel: {
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      letterSpacing: 0,
    },
    inputHelper: {
      fontWeight: 400,
      fontSize: 8,
      lineHeight: "8px",
      letterSpacing: 0.4,
    },
  },
  components: {
    // 예시: Rating, Chip 등 컴포넌트별 색상 커스터마이즈
    // MuiRating: {
    //   styleOverrides: {
    //     iconEmpty: {
    //       borderColor: "rgba(0, 0, 0, 0.23)",
    //     },
    //   },
    // },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: "26px",
          paddingTop: 0,
          paddingBottom: 0,
          lineHeight: "26px",
          minHeight: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: customColors.components.rating.enabledBorder,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          height: "26px",
          "& .MuiToggleButton-root": {
            borderColor: customColors.components.rating.enabledBorder,
          },
        },
      },
    },
    // 예시: native 스크롤바 색상, outline 등은 필요시 styleOverrides에서 활용
  },
  // typography 등 추가 확장 가능
});

export default theme;
