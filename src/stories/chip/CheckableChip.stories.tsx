import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import CheckableChip from "../../components/chip/CheckableChip";

/**
 * CheckableChip은 체크 상태에 따라 아이콘과 스타일이 변경되는 칩 컴포넌트입니다.
 * 선택 가능한 옵션이나 필터 기능에 사용됩니다.
 */
const meta = {
	title: "Components/Chip/CheckableChip",
	component: CheckableChip,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"체크 상태에 따라 아이콘과 스타일이 변경되는 칩 컴포넌트입니다.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "칩에 표시될 텍스트",
			control: "text",
		},
		checked: {
			description: "체크 상태 여부",
			control: "boolean",
		},
		color: {
			description: "칩의 색상 테마",
			control: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"error",
				"info",
				"success",
				"warning",
			],
		},
		disabled: {
			description: "비활성화 여부",
			control: "boolean",
		},
		size: {
			description: "칩 크기",
			control: "select",
			options: ["small", "medium"],
		},
		onClick: {
			description: "클릭 이벤트 핸들러",
			action: "clicked",
		},
	},
} satisfies Meta<typeof CheckableChip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 체크 가능한 칩
 */
export const Default: Story = {
	args: {
		label: "체크 가능한 칩",
		checked: false,
	},
};

/**
 * 체크된 상태의 칩
 */
export const Checked: Story = {
	args: {
		label: "선택됨",
		checked: true,
		color: "info",
	},
};

/**
 * 다양한 색상의 체크된 칩들
 */
export const CheckedColors: Story = {
	args: {
		label: "Colors",
		checked: true,
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<CheckableChip label="Primary" checked={true} color="primary" />
			<CheckableChip label="Secondary" checked={true} color="secondary" />
			<CheckableChip label="Success" checked={true} color="success" />
			<CheckableChip label="Error" checked={true} color="error" />
			<CheckableChip label="Warning" checked={true} color="warning" />
			<CheckableChip label="Info" checked={true} color="info" />
		</div>
	),
};

/**
 * 체크되지 않은 칩들
 */
export const Unchecked: Story = {
	args: {
		label: "Unchecked",
		checked: false,
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<CheckableChip label="옵션 1" checked={false} />
			<CheckableChip label="옵션 2" checked={false} />
			<CheckableChip label="옵션 3" checked={false} />
			<CheckableChip label="옵션 4" checked={false} />
		</div>
	),
};

/**
 * 인터랙티브 체크 칩
 */
export const Interactive: Story = {
	args: {
		label: "Interactive",
		checked: false,
	},
	render: () => {
		const [checkedItems, setCheckedItems] = useState<string[]>([]);

		const handleToggle = (value: string) => {
			setCheckedItems((prev) =>
				prev.includes(value)
					? prev.filter((item) => item !== value)
					: [...prev, value],
			);
		};

		const options = ["JavaScript", "TypeScript", "React", "Node.js", "Python"];

		return (
			<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
				{options.map((option) => (
					<CheckableChip
						key={option}
						label={option}
						checked={checkedItems.includes(option)}
						onClick={() => handleToggle(option)}
						color="info"
					/>
				))}
			</div>
		);
	},
};

/**
 * 다양한 크기의 칩들
 */
export const Sizes: Story = {
	args: {
		label: "Sizes",
		checked: true,
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
			<CheckableChip label="Small" checked={true} size="small" color="info" />
			<CheckableChip label="Medium" checked={true} size="medium" color="info" />
		</div>
	),
};

/**
 * 비활성화된 칩들
 */
export const Disabled: Story = {
	args: {
		label: "Disabled",
		checked: false,
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<CheckableChip
				label="비활성화 (체크됨)"
				checked={true}
				disabled
				color="info"
			/>
			<CheckableChip label="비활성화 (체크안됨)" checked={false} disabled />
		</div>
	),
};
