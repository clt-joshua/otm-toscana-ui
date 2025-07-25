import { ToggleButtonGroup } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import CustomToggleButton from "../../components/button/CustomToggleButton";

/**
 * CustomToggleButton은 MUI의 ToggleButton을 확장한 컴포넌트로,
 * 선택된 상태에서 체크 아이콘을 표시합니다.
 * 단독으로 사용하거나 ToggleButtonGroup과 함께 사용할 수 있습니다.
 */
const meta = {
	title: "Components/Button/CustomToggleButton",
	component: CustomToggleButton,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "체크 아이콘이 포함된 사용자 정의 토글 버튼 컴포넌트입니다.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "버튼에 표시될 텍스트 또는 컴포넌트",
			control: "text",
		},
		value: {
			description: "버튼의 고유 값",
			control: "text",
		},
		groupValue: {
			description: "토글 버튼 그룹의 현재 선택된 값",
			control: "text",
		},
		disabled: {
			description: "버튼 비활성화 여부",
			control: "boolean",
		},
		size: {
			description: "버튼 크기",
			control: "select",
			options: ["small", "medium", "large"],
		},
	},
} satisfies Meta<typeof CustomToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 토글 버튼
 */
export const Default: Story = {
	args: {
		children: "Option 1",
		value: "option1",
	},
};

/**
 * 선택된 상태의 토글 버튼
 */
export const Selected: Story = {
	args: {
		children: "Selected Option",
		value: "selected",
		groupValue: "selected",
	},
};

/**
 * 비활성화된 토글 버튼
 */
export const Disabled: Story = {
	args: {
		children: "Disabled Option",
		value: "disabled",
		disabled: true,
	},
};

/**
 * 다양한 크기의 토글 버튼
 */
export const Sizes: Story = {
	args: {
		children: "Size Example",
		value: "size",
	},
	render: () => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<CustomToggleButton value="small" size="small">
				Small
			</CustomToggleButton>
			<CustomToggleButton value="medium" size="medium">
				Medium
			</CustomToggleButton>
			<CustomToggleButton value="large" size="large">
				Large
			</CustomToggleButton>
		</div>
	),
};

/**
 * 토글 버튼 그룹 내에서 사용
 */
export const InToggleButtonGroup: Story = {
	args: {
		children: "Group Example",
		value: "group",
		size: "small",
	},
	render: () => {
		const [alignment, setAlignment] = useState<string | null>("left");

		const handleAlignment = (
			_event: React.MouseEvent<HTMLElement>,
			newAlignment: string | null,
		) => {
			setAlignment(newAlignment);
		};

		return (
			<ToggleButtonGroup
				value={alignment}
				exclusive
				onChange={handleAlignment}
				aria-label="text alignment"
			>
				<CustomToggleButton value="left" groupValue={alignment || undefined}>
					Left
				</CustomToggleButton>
				<CustomToggleButton value="center" groupValue={alignment || undefined}>
					Center
				</CustomToggleButton>
				<CustomToggleButton value="right" groupValue={alignment || undefined}>
					Right
				</CustomToggleButton>
			</ToggleButtonGroup>
		);
	},
};

/**
 * 복수 선택이 가능한 토글 버튼 그룹
 */
export const MultipleSelection: Story = {
	args: {
		children: "Multiple Selection",
		value: "multiple",
	},
	render: () => {
		const [formats, setFormats] = useState<string[]>([]);

		const handleFormat = (
			_event: React.MouseEvent<HTMLElement>,
			newFormats: string[],
		) => {
			setFormats(newFormats);
		};

		return (
			<ToggleButtonGroup
				value={formats}
				onChange={handleFormat}
				aria-label="text formatting"
			>
				<CustomToggleButton
					value="bold"
					groupValue={formats.includes("bold") ? "bold" : undefined}
				>
					Bold
				</CustomToggleButton>
				<CustomToggleButton
					value="italic"
					groupValue={formats.includes("italic") ? "italic" : undefined}
				>
					Italic
				</CustomToggleButton>
				<CustomToggleButton
					value="underlined"
					groupValue={formats.includes("underlined") ? "underlined" : undefined}
				>
					Underlined
				</CustomToggleButton>
			</ToggleButtonGroup>
		);
	},
};
