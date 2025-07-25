import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import DetailContainer from "../../components/container/DetailContainer";

/**
 * DetailContainer는 스크롤 가능한 상세 정보 컨테이너 컴포넌트입니다.
 * 긴 콘텐츠나 상세 정보를 표시할 때 사용됩니다.
 */
const meta = {
  title: "Components/Container/DetailContainer",
  component: DetailContainer,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "테두리가 있고 스크롤이 가능한 상세 정보 컨테이너입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "컨테이너 내부에 표시될 콘텐츠",
      control: false,
    },
    sx: {
      description: "추가적인 스타일 속성",
      control: false,
    },
  },
} satisfies Meta<typeof DetailContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 상세 컨테이너
 */
export const Default: Story = {
  args: {
    children: (
      <Box padding={2}>
        <Typography variant="h6" gutterBottom>
          상세 정보
        </Typography>
        <Typography>
          이것은 기본 상세 컨테이너입니다. 내용이 컨테이너를 넘어가면 자동으로
          스크롤됩니다.
        </Typography>
      </Box>
    ),
  },
};

/**
 * 긴 콘텐츠가 있는 컨테이너 (세로 스크롤)
 */
export const WithLongContent: Story = {
  args: {
    sx: { height: 300 },
    children: (
      <Box padding={2}>
        <Typography variant="h6" gutterBottom>
          긴 콘텐츠 예시
        </Typography>
        {Array.from({ length: 20 }, (_, i) => ({
          id: `paragraph-${i}`,
          index: i,
        })).map((item) => (
          <Typography key={item.id} paragraph>
            이것은 {item.index + 1}번째 문단입니다. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </Typography>
        ))}
      </Box>
    ),
  },
};

/**
 * 넓은 콘텐츠가 있는 컨테이너 (가로 스크롤)
 */
export const WithWideContent: Story = {
  args: {
    sx: { height: 200 },
    children: (
      <Box padding={2} sx={{ minWidth: 800 }}>
        <Typography variant="h6" gutterBottom>
          넓은 콘텐츠 예시 (가로 스크롤)
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            minWidth: 1000,
          }}
        >
          {Array.from({ length: 10 }, (_, i) => ({
            id: `card-${i}`,
            index: i,
          })).map((item) => (
            <Box
              key={item.id}
              sx={{
                minWidth: 100,
                height: 80,
                bgcolor: "primary.light",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >
              <Typography color="white">카드 {item.index + 1}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    ),
  },
};

/**
 * 리스트가 있는 컨테이너
 */
export const WithList: Story = {
  args: {
    sx: { height: 250 },
    children: (
      <Box>
        <Typography variant="h6" sx={{ padding: 2, paddingBottom: 1 }}>
          항목 목록
        </Typography>
        <List>
          {Array.from({ length: 15 }, (_, i) => ({
            id: `list-item-${i}`,
            index: i,
          })).map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={`항목 ${item.index + 1}`}
                secondary={`이것은 ${item.index + 1}번째 항목의 설명입니다.`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    ),
  },
};

/**
 * 테이블이 있는 컨테이너
 */
export const WithTable: Story = {
  args: {
    sx: { height: 300 },
    children: (
      <Box padding={2}>
        <Typography variant="h6" gutterBottom>
          데이터 테이블
        </Typography>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>ID</th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>이름</th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                이메일
              </th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>부서</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }, (_, i) => ({
              id: `table-row-${i}`,
              index: i,
            })).map((item) => (
              <tr key={item.id}>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  {item.index + 1}
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  사용자 {item.index + 1}
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  user{item.index + 1}@example.com
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  개발팀
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    ),
  },
};

/**
 * 크기가 제한된 컨테이너
 */
export const WithFixedSize: Story = {
  args: {
    sx: { width: 400, height: 200 },
    children: (
      <Box padding={2}>
        <Typography variant="h6" gutterBottom>
          고정 크기 컨테이너
        </Typography>
        <Typography>
          이 컨테이너는 400x200 픽셀로 크기가 고정되어 있습니다. 내용이 많으면
          스크롤이 나타납니다.
        </Typography>
        {Array.from({ length: 10 }, (_, i) => ({
          id: `content-${i}`,
          index: i,
        })).map((item) => (
          <Typography key={item.id} paragraph>
            추가 내용 {item.index + 1}: 이 내용들은 컨테이너 높이를 초과하여
            스크롤을 발생시킵니다.
          </Typography>
        ))}
      </Box>
    ),
  },
};

/**
 * 이미지 갤러리가 있는 컨테이너
 */
export const WithImageGallery: Story = {
  args: {
    sx: { height: 250 },
    children: (
      <Box padding={2}>
        <Typography variant="h6" gutterBottom>
          이미지 갤러리
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {Array.from({ length: 12 }, (_, i) => ({
            id: `image-${i}`,
            index: i,
          })).map((item) => (
            <Box
              key={item.id}
              sx={{
                width: 100,
                height: 100,
                bgcolor: "grey.300",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >
              <Typography variant="caption">이미지 {item.index + 1}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    ),
  },
};
