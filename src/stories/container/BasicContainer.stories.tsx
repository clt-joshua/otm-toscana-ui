import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import type { Meta, StoryObj } from "@storybook/react";
import BasicContainer from "../../components/container/BasicContainer";
import OutlinedIconButton from "../../components/button/OutlinedIconButton";

/**
 * BasicContainer는 제목 헤더와 콘텐츠 영역을 가진 기본 컨테이너 컴포넌트입니다.
 * 섹션을 구분하거나 관련된 콘텐츠를 그룹화하는 용도로 사용됩니다.
 */
const meta = {
  title: "Components/Container/BasicContainer",
  component: BasicContainer,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "헤더와 콘텐츠 영역을 가진 기본 컨테이너 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "컨테이너 헤더에 표시될 제목",
      control: "text",
    },
    children: {
      description: "컨테이너 내부에 표시될 콘텐츠",
      control: false,
    },
    buttonSlot: {
      description: "헤더 우측에 표시될 버튼이나 액션 요소들",
      control: false,
    },
    sx: {
      description: "추가적인 스타일 속성",
      control: false,
    },
  },
} satisfies Meta<typeof BasicContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 컨테이너
 */
export const Default: Story = {
  args: {
    title: "기본 컨테이너",
    children: (
      <Box padding={2}>
        <Typography>컨테이너 내용이 여기에 표시됩니다.</Typography>
      </Box>
    ),
  },
};

/**
 * 버튼이 있는 컨테이너
 */
export const WithButtons: Story = {
  args: {
    title: "사용자 관리",
    buttonSlot: (
      <>
        <Button size="small" variant="contained" startIcon={<AddIcon />}>
          추가
        </Button>
        <Button size="small" variant="outlined">
          내보내기
        </Button>
      </>
    ),
    children: (
      <Box padding={2}>
        <Typography>사용자 목록이 여기에 표시됩니다.</Typography>
      </Box>
    ),
  },
};

/**
 * 아이콘 버튼이 있는 컨테이너
 */
export const WithIconButtons: Story = {
  args: {
    title: "대시보드",
    buttonSlot: (
      <>
        <OutlinedIconButton>
          <RefreshIcon fontSize="small" />
        </OutlinedIconButton>
        <OutlinedIconButton>
          <SettingsIcon fontSize="small" />
        </OutlinedIconButton>
      </>
    ),
    children: (
      <Box padding={2}>
        <Typography>대시보드 콘텐츠가 여기에 표시됩니다.</Typography>
      </Box>
    ),
  },
};

/**
 * 긴 콘텐츠가 있는 컨테이너
 */
export const WithLongContent: Story = {
  args: {
    title: "공지사항",
    children: (
      <Box padding={2} sx={{ maxHeight: 300, overflow: "auto" }}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography paragraph>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Typography paragraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Typography>
        <Typography paragraph>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </Typography>
      </Box>
    ),
  },
};

/**
 * 커스텀 스타일이 적용된 컨테이너
 */
export const WithCustomStyle: Story = {
  args: {
    title: "커스텀 스타일",
    sx: {
      minHeight: 400,
      boxShadow: 3,
    },
    children: (
      <Box
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Typography>커스텀 스타일이 적용된 컨테이너입니다.</Typography>
      </Box>
    ),
  },
};
