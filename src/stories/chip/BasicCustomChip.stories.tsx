import type { Meta, StoryObj } from "@storybook/react-vite";
import BasicCustomChip from "../../components/chip/BasicCustomChip";

/**
 * BasicCustomChip은 커스텀 색상을 지원하는 기본 칩 컴포넌트입니다.
 * 상태 표시, 태그, 카테고리 등을 나타내는 용도로 사용됩니다.
 */
const meta = {
	title: "Components/Chip/BasicCustomChip",
	component: BasicCustomChip,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "사용자 정의 색상을 적용할 수 있는 기본 칩 컴포넌트입니다.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "칩에 표시될 텍스트",
			control: "text",
		},
		bgColor: {
			description: "칩의 배경색",
			control: "color",
		},
		textColor: {
			description: "칩의 텍스트 색상",
			control: "color",
		},
	},
} satisfies Meta<typeof BasicCustomChip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 칩
 */
export const Default: Story = {
	args: {
		label: "기본 칩",
		bgColor: "#2196f3",
		textColor: "#ffffff",
	},
};

/**
 * 다양한 상태를 나타내는 칩들
 */
export const StatusChips: Story = {
	args: {
		label: "상태",
		bgColor: "#2196f3",
		textColor: "#ffffff",
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<BasicCustomChip label="성공" bgColor="#4caf50" textColor="#ffffff" />
			<BasicCustomChip label="경고" bgColor="#ff9800" textColor="#ffffff" />
			<BasicCustomChip label="오류" bgColor="#f44336" textColor="#ffffff" />
			<BasicCustomChip label="정보" bgColor="#2196f3" textColor="#ffffff" />
			<BasicCustomChip label="비활성" bgColor="#9e9e9e" textColor="#ffffff" />
		</div>
	),
};

/**
 * 밝은 배경의 칩들
 */
export const LightBackgroundChips: Story = {
	args: {
		label: "라이트",
		bgColor: "#e3f2fd",
		textColor: "#0d47a1",
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<BasicCustomChip label="성공" bgColor="#e8f5e9" textColor="#2e7d32" />
			<BasicCustomChip label="경고" bgColor="#fff3e0" textColor="#e65100" />
			<BasicCustomChip label="오류" bgColor="#ffebee" textColor="#c62828" />
			<BasicCustomChip label="정보" bgColor="#e3f2fd" textColor="#0d47a1" />
		</div>
	),
};

/**
 * 카테고리 칩들
 */
export const CategoryChips: Story = {
	args: {
		label: "카테고리",
		bgColor: "#7c4dff",
		textColor: "#ffffff",
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<BasicCustomChip label="Frontend" bgColor="#7c4dff" textColor="#ffffff" />
			<BasicCustomChip label="Backend" bgColor="#00bcd4" textColor="#ffffff" />
			<BasicCustomChip label="DevOps" bgColor="#ff5722" textColor="#ffffff" />
			<BasicCustomChip label="Design" bgColor="#e91e63" textColor="#ffffff" />
		</div>
	),
};

/**
 * 긴 텍스트가 있는 칩
 */
export const LongTextChip: Story = {
	args: {
		label: "매우 긴 텍스트가 포함된 칩 예시",
		bgColor: "#3f51b5",
		textColor: "#ffffff",
	},
};
