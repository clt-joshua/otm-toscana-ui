import { Box, type BoxProps } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { customColors } from "../../theme";

/**
 * SearchContainer 컴포넌트의 속성 정의
 */
interface SearchContainerProps extends BoxProps {
	/** 컨테이너 내부에 표시될 콘텐츠 */
	children: React.ReactNode;
}

/**
 * 검색 기능을 위한 회색 배경 컨테이너 컴포넌트
 *
 * @description
 * 연한 회색 배경과 테두리를 가진 컨테이너로, 주로 검색 폼이나 필터 영역에 사용됩니다.
 * 시각적으로 검색 관련 요소들을 구분하여 표시할 때 유용합니다.
 *
 * @example
 * ```tsx
 * // 검색 폼과 함께 사용
 * <SearchContainer>
 *   <TextField placeholder="검색어를 입력하세요" />
 *   <Button>검색</Button>
 * </SearchContainer>
 *
 * // 필터 영역으로 사용
 * <SearchContainer sx={{ padding: 2 }}>
 *   <Typography variant="h6">필터</Typography>
 *   <FormGroup>
 *     <FormControlLabel control={<Checkbox />} label="옵션 1" />
 *     <FormControlLabel control={<Checkbox />} label="옵션 2" />
 *   </FormGroup>
 * </SearchContainer>
 * ```
 *
 * @param {SearchContainerProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 렌더링된 검색 컨테이너
 */
export default function SearchContainer({
	children,
	...props
}: SearchContainerProps) {
	return (
		<Box
			bgcolor={customColors.blueGrey[20]} // 연한 회색 배경
			borderRadius={1}
			border={1}
			borderColor={blueGrey[200]}
			{...props}
		>
			{children}
		</Box>
	);
}
