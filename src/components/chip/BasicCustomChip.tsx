import Chip from "@mui/material/Chip";

/**
 * BasicCustomChip 컴포넌트의 속성 정의
 */
interface BasicCustomChipProps {
	/** 칩에 표시될 텍스트 */
	label: string;
	/** 칩의 배경색 (CSS 색상값) */
	bgColor: string;
	/** 칩의 텍스트 색상 (CSS 색상값) */
	textColor: string;
}

/**
 * 커스텀 색상을 지원하는 기본 칩 컴포넌트
 *
 * @description
 * 사용자 정의 배경색과 텍스트 색상을 적용할 수 있는 작은 크기의 칩 컴포넌트입니다.
 * 상태 표시, 태그, 카테고리 등을 나타내는 용도로 사용됩니다.
 *
 * @example
 * ```tsx
 * // 성공 상태 표시
 * <BasicCustomChip
 *   label="완료"
 *   bgColor="#4caf50"
 *   textColor="#ffffff"
 * />
 *
 * // 경고 상태 표시
 * <BasicCustomChip
 *   label="대기중"
 *   bgColor="#ff9800"
 *   textColor="#ffffff"
 * />
 * ```
 *
 * @param {BasicCustomChipProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 렌더링된 칩
 */
export default function BasicCustomChip({
	label,
	bgColor,
	textColor,
}: BasicCustomChipProps) {
	return (
		<Chip
			label={label}
			size="small"
			variant="filled"
			sx={{
				backgroundColor: bgColor,
				color: textColor,
				borderRadius: "4px",
				"& .MuiChip-label": {
					fontWeight: 500,
				},
			}}
		/>
	);
}
