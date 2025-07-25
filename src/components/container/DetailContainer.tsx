import { Box, type BoxProps } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

/**
 * 스크롤 가능한 상세 정보 컨테이너 컴포넌트
 *
 * @description
 * 테두리가 있고 스크롤이 가능한 컨테이너 컴포넌트입니다.
 * 상세 정보나 긴 콘텐츠를 표시할 때 사용되며,
 * 컨테이너 크기를 초과하는 내용은 자동으로 스크롤됩니다.
 *
 * @example
 * ```tsx
 * // 기본 사용
 * <DetailContainer>
 *   <div>상세 내용이 여기에 표시됩니다</div>
 * </DetailContainer>
 *
 * // 높이 제한과 함께 사용
 * <DetailContainer sx={{ height: 400 }}>
 *   <LongContentComponent />
 * </DetailContainer>
 *
 * // padding과 함께 사용
 * <DetailContainer sx={{ padding: 2 }}>
 *   <DetailedInformation />
 * </DetailContainer>
 * ```
 *
 * @param {BoxProps} props - MUI Box의 모든 속성을 받을 수 있습니다
 * @returns {JSX.Element} 렌더링된 상세 컨테이너
 */
export default function DetailContainer({ children, ...props }: BoxProps) {
  return (
    <Box
      borderRadius={1}
      border={1}
      borderColor={blueGrey[200]}
      sx={{
        overflow: "auto", // 세로 스크롤 활성화
        overflowX: "auto", // 가로 스크롤 활성화
        width: "100%",
        height: "100%",
        minWidth: 0, // flex 아이템에서 최소 너비 제한 해제
        minHeight: 0, // flex 아이템에서 최소 높이 제한 해제
        maxWidth: "100%",
        flexShrink: 1, // 공간이 부족할 때 축소 허용
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
