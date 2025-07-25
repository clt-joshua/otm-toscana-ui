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

// 공통 테마 설정
const getCommonTheme = () => ({
	typography: {
		fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
		h6: {
			fontWeight: 400,
			fontSize: 20,
			lineHeight: 1.6, // 160%
			letterSpacing: 0.15,
		},
		subtitle1: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: 1.57, // 150%
			letterSpacing: 0.1,
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
			textTransform: "uppercase" as const,
		},
		buttonSmall: {
			fontWeight: 500,
			fontSize: 13,
			lineHeight: "22px",
			letterSpacing: 0.46,
			textTransform: "uppercase" as const,
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
		MuiCheckbox: {
			defaultProps: {
				color: "info" as const,
				size: "small" as const,
			},
			styleOverrides: {
				root: {
					width: "26px",
					height: "26px",
				},
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					margin: 0,
					"& .MuiFormControlLabel-label": {
						fontSize: "13px",
						textWrap: "nowrap",
					},
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				root: {
					height: "40px",
					minHeight: "40px",
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					height: "40px",
					minHeight: "40px",
					padding: "0 16px",
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					"& .MuiInputBase-root": {
						height: "26px",
						backgroundColor: "white",
						"& .MuiInputBase-input": {
							fontSize: "13px",
							paddingLeft: "10px",
							paddingRight: "10px",
						},
						"&.Mui-disabled": {
							backgroundColor: "rgba(84, 110, 122, 0.16)",
						},
					},
					// multiline일 때만 별도 스타일 적용
					"& .MuiInputBase-multiline.MuiInputBase-root": {
						height: "100%",
						padding: "4px 0px",
					},
					"& .MuiInputBase-multiline.MuiInputBase-root textarea": {
						height: "100% !important",
						lineHeight: "1.5",
					},
					"& .MuiInputLabel-root": {
						transform: "translate(10px, 3px) scale(1)",
						fontSize: "13px",
						"&.Mui-focused, &.MuiFormLabel-filled": {
							transform: "translate(10px, -6px) scale(0.75)",
						},
					},
					"& .MuiInputLabel-asterisk": {
						color: "#D32F2F", // error.main 색상과 동일
					},
					"& .MuiOutlinedInput-notchedOutline": {
						"& legend": {
							fontSize: "9px",
						},
					},
				},
			},
		},
	},
});

// 라이트 테마
export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#2196F3",
			contrastText: "#fff",
		},
		info: {
			main: "#0288D1",
			contrastText: "#FFFFFF",
		},
		success: {
			main: "#2E7D32",
			contrastText: "#FFFFFF",
		},
		error: {
			main: "#D32F2F",
		},
		secondary: {
			main: "#9c27b0",
			light: "#d05ce3",
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
		action: {
			active: "rgba(84, 110, 122, 0.88)",
			hover: "rgba(84, 110, 122, 0.04)",
			selected: "rgba(84, 110, 122, 0.12)",
			focus: "rgba(84, 110, 122, 0.16)",
			disabled: "rgba(84, 110, 122, 0.48)",
			disabledBackground: "rgba(84, 110, 122, 0.16)",
		},
	},
	...getCommonTheme(),
});

// 기본 테마 (라이트 테마)
const theme = lightTheme;

export default theme;
