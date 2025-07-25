import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
	title: "Components/Button/MuiButton",
	component: Button,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["text", "contained", "outlined"],
		},
		color: {
			control: { type: "select" },
			options: ["primary", "secondary", "error", "info", "success", "warning"],
		},
		disabled: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const 기본: Story = {
	args: {
		children: "기본 버튼",
		variant: "contained",
		color: "primary",
	},
};

export const 아웃라인: Story = {
	args: {
		children: "아웃라인 버튼",
		variant: "outlined",
		color: "secondary",
	},
};

export const 텍스트: Story = {
	args: {
		children: "텍스트 버튼",
		variant: "text",
		color: "info",
	},
};

export const 비활성화: Story = {
	args: {
		children: "비활성화 버튼",
		variant: "contained",
		color: "primary",
		disabled: true,
	},
};

export const 커스텀스타일: Story = {
	args: {
		children: "커스텀 스타일",
		variant: "contained",
		color: "success",
		sx: { borderRadius: 8, fontWeight: "bold", px: 4 },
	},
};
