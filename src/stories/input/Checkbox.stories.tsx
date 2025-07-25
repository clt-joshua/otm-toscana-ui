import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

/**
 * Checkbox는 사용자가 옵션을 선택하거나 해제할 수 있는 입력 컴포넌트입니다.
 * 단일 체크박스, 그룹 체크박스, FormControlLabel과 함께 사용할 수 있습니다.
 */
const meta = {
	title: "Components/Input/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"사용자가 옵션을 선택하거나 해제할 수 있는 체크박스 컴포넌트입니다.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		checked: {
			description: "체크박스의 선택 상태",
			control: "boolean",
		},
		disabled: {
			description: "체크박스 비활성화 여부",
			control: "boolean",
		},
		indeterminate: {
			description: "부분 선택 상태 (부모-자식 관계에서 사용)",
			control: "boolean",
		},
		color: {
			description: "체크박스 색상",
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
		size: {
			description: "체크박스 크기",
			control: "select",
			options: ["small", "medium"],
		},
		onChange: {
			description: "상태 변경 이벤트 핸들러",
			action: "changed",
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 체크박스
 */
export const Default: Story = {
	args: {
		checked: false,
	},
};

/**
 * 체크된 상태의 체크박스
 */
export const Checked: Story = {
	args: {
		checked: true,
	},
};

/**
 * 비활성화된 체크박스
 */
export const Disabled: Story = {
	args: {
		checked: false,
		disabled: true,
	},
};

/**
 * 비활성화된 체크된 체크박스
 */
export const DisabledChecked: Story = {
	args: {
		checked: true,
		disabled: true,
	},
};

/**
 * 부분 선택 상태 (indeterminate)
 */
export const Indeterminate: Story = {
	args: {
		checked: false,
		indeterminate: true,
	},
};

/**
 * 다양한 색상의 체크박스
 */
export const Colors: Story = {
	render: () => (
		<Box display="flex" gap={2} flexWrap="wrap">
			<Checkbox color="default" />
			<Checkbox color="primary" />
			<Checkbox color="secondary" />
			<Checkbox color="error" />
			<Checkbox color="info" />
			<Checkbox color="success" />
			<Checkbox color="warning" />
		</Box>
	),
};

/**
 * 다양한 크기의 체크박스
 */
export const Sizes: Story = {
	render: () => (
		<Box display="flex" gap={2} alignItems="center">
			<Checkbox size="small" />
			<Checkbox size="medium" />
		</Box>
	),
};

/**
 * FormControlLabel과 함께 사용하는 체크박스
 */
export const WithLabel: Story = {
	render: () => (
		<FormControlLabel
			control={<Checkbox />}
			label="라벨과 함께 사용하는 체크박스"
		/>
	),
};

/**
 * 체크박스 그룹
 */
export const CheckboxGroup: Story = {
	render: () => {
		const [checkedItems, setCheckedItems] = useState<string[]>([]);

		const handleToggle = (value: string) => {
			setCheckedItems((prev) =>
				prev.includes(value)
					? prev.filter((item) => item !== value)
					: [...prev, value],
			);
		};

		const options = [
			{ value: "option1", label: "옵션 1" },
			{ value: "option2", label: "옵션 2" },
			{ value: "option3", label: "옵션 3" },
			{ value: "option4", label: "옵션 4" },
		];

		return (
			<FormControl component="fieldset">
				<FormLabel component="legend">체크박스 그룹</FormLabel>
				<FormGroup>
					{options.map((option) => (
						<FormControlLabel
							key={option.value}
							control={
								<Checkbox
									checked={checkedItems.includes(option.value)}
									onChange={() => handleToggle(option.value)}
								/>
							}
							label={option.label}
						/>
					))}
				</FormGroup>
			</FormControl>
		);
	},
};

/**
 * 인터랙티브 체크박스
 */
export const Interactive: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);

		return (
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						onChange={(e) => setChecked(e.target.checked)}
					/>
				}
				label="클릭하여 상태를 변경할 수 있습니다"
			/>
		);
	},
};

/**
 * 부모-자식 관계 체크박스 (indeterminate 예시)
 */
export const ParentChildCheckboxes: Story = {
	render: () => {
		const [checkedItems, setCheckedItems] = useState<string[]>([]);

		const childOptions = ["child1", "child2", "child3"];
		const allChecked = childOptions.every((item) =>
			checkedItems.includes(item),
		);
		const someChecked = childOptions.some((item) =>
			checkedItems.includes(item),
		);

		const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			if (event.target.checked) {
				setCheckedItems(childOptions);
			} else {
				setCheckedItems([]);
			}
		};

		const handleChildChange = (value: string) => {
			setCheckedItems((prev) =>
				prev.includes(value)
					? prev.filter((item) => item !== value)
					: [...prev, value],
			);
		};

		return (
			<FormControl component="fieldset">
				<FormLabel component="legend">부모-자식 체크박스</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={allChecked}
								indeterminate={someChecked && !allChecked}
								onChange={handleParentChange}
							/>
						}
						label="모두 선택"
					/>
					<Box sx={{ ml: 3 }}>
						{childOptions.map((option) => (
							<FormControlLabel
								key={option}
								control={
									<Checkbox
										checked={checkedItems.includes(option)}
										onChange={() => handleChildChange(option)}
									/>
								}
								label={`하위 옵션 ${option.slice(-1)}`}
							/>
						))}
					</Box>
				</FormGroup>
			</FormControl>
		);
	},
};
