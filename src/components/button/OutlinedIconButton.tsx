import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";

/**
 * 아이콘용 작은 아웃라인 버튼 컴포넌트
 *
 * @description
 * 26x26 픽셀 크기의 정사각형 아웃라인 버튼으로, 주로 아이콘을 표시하는 용도로 사용됩니다.
 * MUI Button의 모든 속성을 상속받으며, 기본적으로 info 색상과 outlined 변형을 사용합니다.
 *
 * @example
 * ```tsx
 * import CloseIcon from '@mui/icons-material/Close';
 *
 * // 아이콘 버튼으로 사용
 * <OutlinedIconButton>
 *   <CloseIcon fontSize="small" />
 * </OutlinedIconButton>
 *
 * // onClick 핸들러와 함께 사용
 * <OutlinedIconButton onClick={handleClose}>
 *   <CloseIcon fontSize="small" />
 * </OutlinedIconButton>
 * ```
 *
 * @param {ButtonProps} props - MUI Button의 모든 속성을 받을 수 있습니다
 * @returns {JSX.Element} 렌더링된 아이콘 버튼
 */
export default function OutlinedIconButton(props: ButtonProps) {
	return (
		<Button
			variant="outlined"
			color="info"
			sx={{
				minWidth: 26,
				width: 26,
				height: 26,
				padding: 0,
				borderRadius: 1,
			}}
			{...props}
		/>
	);
}
