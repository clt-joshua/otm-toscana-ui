// font source
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import theme from "./theme";

// 전역 스타일 적용
const globalStyles = `
  * {
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif !important;
  }
  
  html, body, #root {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif !important;
  }
`;

// 전역 스타일 주입
const styleElement = document.createElement("style");
styleElement.textContent = globalStyles;
document.head.appendChild(styleElement);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</StrictMode>,
);
