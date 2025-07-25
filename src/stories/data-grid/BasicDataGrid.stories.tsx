import { Chip } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import BasicDataGrid from "../../components/data-grid/BasicDataGrid";
import BasicCustomChip from "../../components/chip/BasicCustomChip";

/**
 * BasicDataGrid는 테이블 형태로 데이터를 표시하는 기본 데이터 그리드 컴포넌트입니다.
 * 헤더가 고정되어 있고, 셀을 클릭하여 선택할 수 있습니다.
 */
const meta = {
  title: "Components/DataGrid/BasicDataGrid",
  component: BasicDataGrid,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "선택 가능한 셀과 고정 헤더를 가진 데이터 그리드 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    header: {
      description: "테이블 헤더 컬럼 정의",
      control: false,
    },
    data: {
      description: "테이블에 표시할 데이터",
      control: false,
    },
  },
} satisfies Meta<typeof BasicDataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 데이터 그리드
 */
export const Default: Story = {
  args: {
    header: [
      { key: "id", label: "ID", width: "80px" },
      { key: "name", label: "이름", width: "150px" },
      { key: "email", label: "이메일", width: "200px" },
      { key: "role", label: "역할", width: "120px" },
      { key: "status", label: "상태", width: "100px", align: "center" },
    ],
    data: [
      {
        id: "1",
        name: "홍길동",
        email: "hong@example.com",
        role: "관리자",
        status: "활성",
      },
      {
        id: "2",
        name: "김철수",
        email: "kim@example.com",
        role: "사용자",
        status: "활성",
      },
      {
        id: "3",
        name: "이영희",
        email: "lee@example.com",
        role: "사용자",
        status: "비활성",
      },
      {
        id: "4",
        name: "박민수",
        email: "park@example.com",
        role: "편집자",
        status: "활성",
      },
      {
        id: "5",
        name: "정수현",
        email: "jung@example.com",
        role: "사용자",
        status: "대기",
      },
    ],
  },
};

/**
 * 컴포넌트를 포함한 데이터 그리드
 */
export const WithComponents: Story = {
  args: {
    header: [
      { key: "id", label: "ID", width: "60px" },
      { key: "product", label: "상품명", width: "200px" },
      { key: "category", label: "카테고리", width: "120px" },
      { key: "price", label: "가격", width: "100px", align: "right" },
      { key: "stock", label: "재고", width: "80px", align: "center" },
      { key: "status", label: "상태", width: "100px", align: "center" },
    ],
    data: [
      {
        id: "1",
        product: "노트북 Pro 15",
        category: <Chip label="전자제품" size="small" />,
        price: "1,500,000원",
        stock: "25",
        status: (
          <BasicCustomChip
            label="판매중"
            bgColor="#4caf50"
            textColor="#ffffff"
          />
        ),
      },
      {
        id: "2",
        product: "무선 마우스",
        category: <Chip label="액세서리" size="small" />,
        price: "35,000원",
        stock: "150",
        status: (
          <BasicCustomChip
            label="판매중"
            bgColor="#4caf50"
            textColor="#ffffff"
          />
        ),
      },
      {
        id: "3",
        product: "USB-C 허브",
        category: <Chip label="액세서리" size="small" />,
        price: "45,000원",
        stock: "0",
        status: (
          <BasicCustomChip label="품절" bgColor="#f44336" textColor="#ffffff" />
        ),
      },
      {
        id: "4",
        product: "모니터 27인치",
        category: <Chip label="전자제품" size="small" />,
        price: "350,000원",
        stock: "12",
        status: (
          <BasicCustomChip
            label="재고부족"
            bgColor="#ff9800"
            textColor="#ffffff"
          />
        ),
      },
    ],
  },
};

/**
 * 많은 데이터가 있는 그리드
 */
export const WithManyRows: Story = {
  args: {
    header: [
      { key: "no", label: "번호", width: "60px", align: "center" },
      { key: "date", label: "날짜", width: "120px" },
      { key: "type", label: "유형", width: "100px" },
      { key: "description", label: "설명", width: "300px" },
      { key: "amount", label: "금액", width: "120px", align: "right" },
    ],
    data: Array.from({ length: 50 }, (_, i) => ({
      no: String(i + 1),
      date: `2024-01-${String(i + 1).padStart(2, "0")}`,
      type: i % 3 === 0 ? "입금" : i % 3 === 1 ? "출금" : "이체",
      description: `거래 내역 설명 #${i + 1}`,
      amount: `${((i + 1) * 10000).toLocaleString()}원`,
    })),
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", overflow: "hidden" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * 최소 컬럼 그리드
 */
export const MinimalColumns: Story = {
  args: {
    header: [
      { key: "name", label: "이름" },
      { key: "value", label: "값" },
    ],
    data: [
      { name: "CPU 사용률", value: "45%" },
      { name: "메모리 사용률", value: "72%" },
      { name: "디스크 사용률", value: "28%" },
      { name: "네트워크 사용률", value: "15%" },
    ],
  },
};

/**
 * 다양한 정렬이 적용된 그리드
 */
export const WithAlignments: Story = {
  args: {
    header: [
      { key: "left", label: "왼쪽 정렬", align: "left" },
      { key: "center", label: "가운데 정렬", align: "center" },
      { key: "right", label: "오른쪽 정렬", align: "right" },
    ],
    data: [
      { left: "왼쪽 텍스트", center: "가운데 텍스트", right: "오른쪽 텍스트" },
      {
        left: "Left aligned",
        center: "Center aligned",
        right: "Right aligned",
      },
      { left: "123", center: "456", right: "789" },
    ],
  },
};
