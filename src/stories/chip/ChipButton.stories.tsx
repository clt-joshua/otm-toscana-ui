import FilterListIcon from "@mui/icons-material/FilterList";
import CategoryIcon from "@mui/icons-material/Category";
import SortIcon from "@mui/icons-material/Sort";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import type { Meta, StoryObj } from "@storybook/react";
import ChipButton from "../../components/chip/ChipButton";

/**
 * ChipButton은 우측에 드롭다운 화살표가 있는 칩 버튼 컴포넌트입니다.
 * 메뉴나 선택 옵션을 여는 용도로 사용됩니다.
 */
const meta = {
  title: "Components/Chip/ChipButton",
  component: ChipButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "드롭다운 화살표가 있는 칩 버튼 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "칩에 표시될 텍스트",
      control: "text",
    },
    icon: {
      description: "칩 좌측에 표시될 아이콘",
      control: false,
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
} satisfies Meta<typeof ChipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 칩 버튼
 */
export const Default: Story = {
  args: {
    label: "카테고리 선택",
  },
};

/**
 * 아이콘이 있는 칩 버튼
 */
export const WithIcon: Story = {
  args: {
    label: "필터",
    icon: <FilterListIcon />,
    color: "primary",
  },
};

/**
 * 다양한 색상의 칩 버튼들
 */
export const Colors: Story = {
  args: {
    label: "Colors",
    color: "primary",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <ChipButton label="Default" />
      <ChipButton label="Primary" color="primary" />
      <ChipButton label="Secondary" color="secondary" />
      <ChipButton label="Success" color="success" />
      <ChipButton label="Error" color="error" />
      <ChipButton label="Warning" color="warning" />
      <ChipButton label="Info" color="info" />
    </div>
  ),
};

/**
 * 다양한 아이콘을 가진 칩 버튼들
 */
export const WithVariousIcons: Story = {
  args: {
    label: "Icons",
    icon: <FilterListIcon />,
    color: "primary",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <ChipButton label="필터" icon={<FilterListIcon />} color="primary" />
      <ChipButton label="카테고리" icon={<CategoryIcon />} color="secondary" />
      <ChipButton label="정렬" icon={<SortIcon />} color="success" />
      <ChipButton label="더보기" icon={<MoreHorizIcon />} color="info" />
    </div>
  ),
};

/**
 * 다양한 크기의 칩 버튼들
 */
export const Sizes: Story = {
  args: {
    label: "Sizes",
    icon: <FilterListIcon />,
    color: "primary",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ChipButton
        label="Small"
        icon={<FilterListIcon />}
        color="primary"
        size="small"
      />
      <ChipButton
        label="Medium"
        icon={<FilterListIcon />}
        color="primary"
        size="medium"
      />
    </div>
  ),
};

/**
 * 비활성화된 칩 버튼
 */
export const Disabled: Story = {
  args: {
    label: "비활성화",
    icon: <FilterListIcon />,
    color: "primary",
    disabled: true,
  },
};

/**
 * 클릭 이벤트가 있는 칩 버튼
 */
export const WithClickHandler: Story = {
  args: {
    label: "클릭해보세요",
    icon: <FilterListIcon />,
    color: "primary",
    onClick: () => alert("칩 버튼이 클릭되었습니다!"),
  },
};

/**
 * 메뉴 스타일의 칩 버튼들
 */
export const MenuStyle: Story = {
  args: {
    label: "Menu",
    color: "primary",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <ChipButton
        label="정렬 기준"
        icon={<SortIcon />}
        color="primary"
        onClick={() => alert("정렬 메뉴 열기")}
      />
      <ChipButton
        label="필터 옵션"
        icon={<FilterListIcon />}
        color="secondary"
        onClick={() => alert("필터 메뉴 열기")}
      />
      <ChipButton
        label="카테고리"
        icon={<CategoryIcon />}
        color="info"
        onClick={() => alert("카테고리 메뉴 열기")}
      />
    </div>
  ),
};
