import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";
import { lightTheme } from "../src/theme";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			expanded: true, // Adds the description and default columns
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		withThemeFromJSXProvider({
			themes: {
				light: lightTheme,
			},
			defaultTheme: "light",
			Provider: ThemeProvider,
			GlobalStyles: CssBaseline,
		}),
	],
};

export default preview;
