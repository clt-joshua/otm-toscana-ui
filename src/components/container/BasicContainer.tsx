import type { SxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

/**
 * BasicContainer 컴포넌트의 속성 정의
 */
interface BasicContainerProps {
  /** 컨테이너 내부에 표시될 콘텐츠 */
  children: React.ReactNode;
  /** 컨테이너 상단 헤더에 표시될 제목 */
  title: string;
  /** 헤더 우측에 표시될 버튼이나 액션 요소들 */
  buttonSlot?: React.ReactNode;
  /** 추가적인 스타일 속성 */
  sx?: SxProps;
}

/**
 * 기본 컨테이너 컴포넌트
 *
 * @description
 * 제목 헤더와 콘텐츠 영역을 가진 기본 컨테이너 컴포넌트입니다.
 * 헤더 영역에는 제목과 함께 우측에 버튼이나 액션 요소들을 배치할 수 있습니다.
 * 주로 섹션을 구분하거나 관련된 콘텐츠를 그룹화하는 용도로 사용됩니다.
 *
 * @example
 * ```tsx
 * // 기본 사용
 * <BasicContainer title="사용자 목록">
 *   <DataGrid />
 * </BasicContainer>
 *
 * // 버튼과 함께 사용
 * <BasicContainer
 *   title="상품 목록"
 *   buttonSlot={
 *     <>
 *       <Button size="small">추가</Button>
 *       <Button size="small">삭제</Button>
 *     </>
 *   }
 * >
 *   <ProductList />
 * </BasicContainer>
 * ```
 *
 * @param {BasicContainerProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 렌더링된 컨테이너
 */
export default function BasicContainer({
  children,
  title,
  buttonSlot,
  sx,
}: BasicContainerProps) {
  return (
    <Box
      flex={1}
      bgcolor="white"
      borderRadius={1}
      border={1}
      display="flex"
      flexDirection="column"
      borderColor={blueGrey[200]}
      sx={{ minWidth: 0, ...sx }}
    >
      {/* 헤더 영역 */}
      <Box
        padding="8px 12px"
        borderBottom={1}
        borderColor={blueGrey[200]}
        display="flex"
        justifyContent="space-between"
      >
        <Typography variant="tableHeader">{title}</Typography>
        <Box display="flex" gap={1}>
          {buttonSlot}
        </Box>
      </Box>
      {/* 콘텐츠 영역 */}
      <Box flex={1}>{children}</Box>
    </Box>
  );
}
