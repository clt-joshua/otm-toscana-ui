import { ButtonBase } from "@mui/material";
import theme from "../../theme";

/**
 * CheckableCustomChip 컴포넌트의 속성 정의
 */
interface CheckableCustomChipProps {
	/** 칩 내부에 표시될 콘텐츠 (텍스트 또는 React 컴포넌트) */
	children: React.ReactNode;
	/** 체크된 상태일 때의 배경색 */
	bgColor?: string;
	/** 체크된 상태일 때의 텍스트/아이콘 색상 */
	color?: string;
	/** 체크 상태 여부 */
	isChecked?: boolean;
	/** 클릭 이벤트 핸들러 */
	onClick?: () => void;
}

/**
 * 사용자 정의 스타일의 체크 가능한 칩 컴포넌트
 *
 * @description
 * 26x26 픽셀 크기의 정사각형 칩으로, 체크 상태에 따라 배경색과 텍스트 색상이 변경됩니다.
 * 텍스트나 아이콘을 표시할 수 있으며, 주로 필터나 선택 옵션으로 사용됩니다.
 * 체크되지 않은 상태에서는 비활성화된 스타일로 표시됩니다.
 *
 * @example
 * ```tsx
 * // 텍스트와 함께 사용
 * <CheckableCustomChip
 *   isChecked={true}
 *   bgColor="#2196f3"
 *   color="#ffffff"
 *   onClick={() => handleToggle()}
 * >
 *   A
 * </CheckableCustomChip>
 *
 * // 아이콘과 함께 사용
 * <CheckableCustomChip
 *   isChecked={false}
 *   bgColor="#4caf50"
 *   color="#ffffff"
 *   onClick={() => handleToggle()}
 * >
 *   <StarIcon />
 * </CheckableCustomChip>
 * ```
 *
 * @param {CheckableCustomChipProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 렌더링된 체크 가능한 커스텀 칩
 */
export default function CheckableCustomChip({
	children,
	bgColor,
	onClick,
	color,
	isChecked,
}: CheckableCustomChipProps) {
	// 자식이 문자열이나 숫자인지 확인하여 폰트 크기 조정
	const isText = typeof children === "string" || typeof children === "number";

	return (
		<ButtonBase
			onClick={onClick}
			sx={{
				height: 26,
				width: 26,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: 1,
				// 체크 상태에 따른 배경색 변경
				bgcolor: isChecked
					? bgColor
					: (theme) => theme.palette.action.disabledBackground,
				// 텍스트면 13px, 아이콘이면 20px 폰트 크기
				fontSize: isText ? "13px" : "20px",
				// 체크 상태에 따른 텍스트 색상 변경
				color: isChecked ? color : theme.palette.action.disabled,
				cursor: "pointer",
				userSelect: "none",
				fontWeight: 500,
				"&:hover": {
					opacity: 0.8,
				},
			}}
		>
			{children}
		</ButtonBase>
	);
}
