import { TextField } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * TextField는 MUI의 기본 텍스트 입력 컴포넌트입니다.
 * 다양한 변형과 스타일을 지원하며, 폼 입력에 사용됩니다.
 */
const meta = {
	title: "Components/Input/TextField",
	component: TextField,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "사용자 입력을 받기 위한 기본 텍스트 필드 컴포넌트입니다.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "텍스트 필드의 라벨",
			control: "text",
		},
		placeholder: {
			description: "플레이스홀더 텍스트",
			control: "text",
		},
		helperText: {
			description: "도움말 텍스트",
			control: "text",
		},
		error: {
			description: "에러 상태",
			control: "boolean",
		},
		disabled: {
			description: "비활성화 상태",
			control: "boolean",
		},
		required: {
			description: "필수 입력 필드",
			control: "boolean",
		},
		multiline: {
			description: "여러 줄 입력",
			control: "boolean",
		},
		rows: {
			description: "여러 줄일 때 행 수",
			control: "number",
		},
		fullWidth: {
			description: "전체 너비 사용",
			control: "boolean",
		},
	},
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 TextField 스타일입니다.
 */
export const Default: Story = {
	args: {
		label: "기본 텍스트 필드",
		placeholder: "텍스트를 입력하세요",
		variant: "outlined",
	},
};

/**
 * 다양한 변형들을 보여줍니다.
 */
export const Variants: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<TextField
				variant="outlined"
				label="Outlined"
				placeholder="Outlined 변형"
			/>
			<TextField variant="filled" label="Filled" placeholder="Filled 변형" />
			<TextField
				variant="standard"
				label="Standard"
				placeholder="Standard 변형"
			/>
		</div>
	),
};

/**
 * 다양한 크기들을 보여줍니다.
 */
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<TextField size="small" label="Small" placeholder="작은 크기" />
			<TextField size="medium" label="Medium" placeholder="보통 크기" />
		</div>
	),
};

/**
 * 에러 상태의 TextField입니다.
 */
export const WithError: Story = {
	args: {
		label: "이메일",
		placeholder: "email@example.com",
		error: true,
		helperText: "올바른 이메일 형식이 아닙니다.",
		variant: "outlined",
	},
};

/**
 * 비활성화된 TextField입니다.
 */
export const Disabled: Story = {
	args: {
		label: "비활성화된 필드",
		placeholder: "입력할 수 없습니다",
		disabled: true,
		variant: "outlined",
	},
};

/**
 * 필수 입력 TextField입니다.
 */
export const Required: Story = {
	args: {
		label: "필수 입력 필드",
		placeholder: "반드시 입력해야 합니다",
		required: true,
		helperText: "이 필드는 필수입니다.",
		variant: "outlined",
	},
};

/**
 * 여러 줄 입력이 가능한 TextField입니다.
 */
export const Multiline: Story = {
	args: {
		label: "메모",
		placeholder: "여러 줄로 입력할 수 있습니다",
		multiline: true,
		rows: 4,
		variant: "outlined",
	},
};

/**
 * 전체 너비를 사용하는 TextField입니다.
 */
export const FullWidth: Story = {
	args: {
		label: "전체 너비 필드",
		placeholder: "전체 너비를 사용합니다",
		fullWidth: true,
		variant: "outlined",
	},
	parameters: {
		layout: "padded",
	},
};

/**
 * 도움말 텍스트가 있는 TextField입니다.
 */
export const WithHelperText: Story = {
	args: {
		label: "사용자명",
		placeholder: "사용자명을 입력하세요",
		helperText: "영문자와 숫자만 사용 가능합니다.",
		variant: "outlined",
	},
};
