import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import CheckableCustomChip from "../../components/chip/CheckableCustomChip";

/**
 * CheckableCustomChip은 26x26 픽셀의 정사각형 체크 가능한 칩 컴포넌트입니다.
 * 체크 상태에 따라 배경색과 텍스트 색상이 변경되며, 텍스트나 아이콘을 표시할 수 있습니다.
 */
const meta = {
	title: "Components/Chip/CheckableCustomChip",
	component: CheckableCustomChip,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"체크 상태에 따라 스타일이 변경되는 26x26 픽셀의 정사각형 칩 컴포넌트입니다.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "칩 내부에 표시될 콘텐츠",
			control: "text",
		},
		isChecked: {
			description: "체크 상태 여부",
			control: "boolean",
		},
		bgColor: {
			description: "체크된 상태일 때의 배경색",
			control: "color",
		},
		color: {
			description: "체크된 상태일 때의 텍스트/아이콘 색상",
			control: "color",
		},
		onClick: {
			description: "클릭 이벤트 핸들러",
			action: "clicked",
		},
	},
} satisfies Meta<typeof CheckableCustomChip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 체크 가능한 커스텀 칩
 */
export const Default: Story = {
	args: {
		children: "A",
		isChecked: false,
		bgColor: "#2196f3",
		color: "#ffffff",
	},
};

/**
 * 체크된 상태의 칩
 */
export const Checked: Story = {
	args: {
		children: "✓",
		isChecked: true,
		bgColor: "#4caf50",
		color: "#ffffff",
	},
};

/**
 * 아이콘이 있는 칩
 */
export const WithIcon: Story = {
	args: {
		children: <StarIcon />,
		isChecked: true,
		bgColor: "#ff9800",
		color: "#ffffff",
	},
};

/**
 * 다양한 텍스트 칩들
 */
export const TextChips: Story = {
	args: {
		children: "Examples",
		isChecked: true,
		bgColor: "#2196f3",
		color: "#ffffff",
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<CheckableCustomChip isChecked={true} bgColor="#2196f3" color="#ffffff">
				A
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#4caf50" color="#ffffff">
				B
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#ff9800" color="#ffffff">
				C
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#f44336" color="#ffffff">
				1
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#9c27b0" color="#ffffff">
				2
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#607d8b" color="#ffffff">
				3
			</CheckableCustomChip>
		</div>
	),
};

/**
 * 다양한 아이콘 칩들
 */
export const IconChips: Story = {
	args: {
		children: <StarIcon />,
		isChecked: true,
		bgColor: "#ff9800",
		color: "#ffffff",
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<CheckableCustomChip isChecked={true} bgColor="#ff9800" color="#ffffff">
				<StarIcon />
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#e91e63" color="#ffffff">
				<FavoriteIcon />
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#3f51b5" color="#ffffff">
				<BookmarkIcon />
			</CheckableCustomChip>
		</div>
	),
};

/**
 * 체크되지 않은 상태의 칩들
 */
export const UncheckedChips: Story = {
	args: {
		children: "Unchecked",
		isChecked: false,
		bgColor: "#2196f3",
		color: "#ffffff",
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<CheckableCustomChip isChecked={false} bgColor="#2196f3" color="#ffffff">
				A
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={false} bgColor="#4caf50" color="#ffffff">
				<StarIcon />
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={false} bgColor="#ff9800" color="#ffffff">
				1
			</CheckableCustomChip>
		</div>
	),
};

/**
 * 인터랙티브 칩들
 */
export const Interactive: Story = {
	args: {
		children: "Interactive",
		isChecked: false,
		bgColor: "#2196f3",
		color: "#ffffff",
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

		const items = [
			{ id: "A", content: "A", color: "#2196f3" },
			{ id: "B", content: "B", color: "#4caf50" },
			{ id: "C", content: "C", color: "#ff9800" },
			{ id: "star", content: <StarIcon />, color: "#e91e63" },
			{ id: "heart", content: <FavoriteIcon />, color: "#f44336" },
		];

		return (
			<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
				{items.map((item) => (
					<CheckableCustomChip
						key={item.id}
						isChecked={checkedItems.includes(item.id)}
						bgColor={item.color}
						color="#ffffff"
						onClick={() => handleToggle(item.id)}
					>
						{item.content}
					</CheckableCustomChip>
				))}
			</div>
		);
	},
};

/**
 * 다양한 색상 조합
 */
export const ColorVariations: Story = {
	args: {
		children: "Colors",
		isChecked: true,
		bgColor: "#2196f3",
		color: "#ffffff",
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<CheckableCustomChip isChecked={true} bgColor="#1976d2" color="#ffffff">
				A
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#388e3c" color="#ffffff">
				B
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#f57c00" color="#ffffff">
				C
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#d32f2f" color="#ffffff">
				D
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#7b1fa2" color="#ffffff">
				E
			</CheckableCustomChip>
			<CheckableCustomChip isChecked={true} bgColor="#303f9f" color="#ffffff">
				F
			</CheckableCustomChip>
		</div>
	),
};
