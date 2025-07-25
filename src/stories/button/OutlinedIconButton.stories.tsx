import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import type { Meta, StoryObj } from "@storybook/react-vite";
import OutlinedIconButton from "../../components/button/OutlinedIconButton";

/**
 * OutlinedIconButton은 아이콘을 표시하기 위한 26x26 픽셀의 작은 아웃라인 버튼입니다.
 * 주로 테이블의 액션 버튼, 닫기 버튼 등에 사용됩니다.
 */
const meta = {
	title: "Components/Button/OutlinedIconButton",
	component: OutlinedIconButton,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "아이콘 표시용 작은 아웃라인 버튼 컴포넌트입니다.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "버튼 내부에 표시될 아이콘 컴포넌트",
			control: false,
		},
		disabled: {
			description: "버튼 비활성화 여부",
			control: "boolean",
		},
		onClick: {
			description: "클릭 이벤트 핸들러",
			action: "clicked",
		},
	},
} satisfies Meta<typeof OutlinedIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 아이콘 버튼
 */
export const Default: Story = {
	args: {
		children: <CloseIcon fontSize="small" />,
	},
};

/**
 * 다양한 아이콘 버튼들
 */
export const VariousIcons: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px" }}>
			<OutlinedIconButton>
				<SearchIcon fontSize="small" />
			</OutlinedIconButton>
			<OutlinedIconButton>
				<EditIcon fontSize="small" />
			</OutlinedIconButton>
			<OutlinedIconButton>
				<DeleteIcon fontSize="small" />
			</OutlinedIconButton>
			<OutlinedIconButton>
				<MoreVertIcon fontSize="small" />
			</OutlinedIconButton>
		</div>
	),
};

/**
 * 비활성화된 아이콘 버튼
 */
export const Disabled: Story = {
	args: {
		children: <DeleteIcon fontSize="small" />,
		disabled: true,
	},
};

/**
 * 클릭 이벤트가 있는 아이콘 버튼
 */
export const WithClickHandler: Story = {
	args: {
		children: <CloseIcon fontSize="small" />,
		onClick: () => alert("Button clicked!"),
	},
};

/**
 * 툴팁이 있는 아이콘 버튼
 */
export const WithTooltip: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px" }}>
			<OutlinedIconButton title="검색">
				<SearchIcon fontSize="small" />
			</OutlinedIconButton>
			<OutlinedIconButton title="수정">
				<EditIcon fontSize="small" />
			</OutlinedIconButton>
			<OutlinedIconButton title="삭제">
				<DeleteIcon fontSize="small" />
			</OutlinedIconButton>
		</div>
	),
};
