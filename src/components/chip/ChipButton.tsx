import { Avatar, Chip, type ChipProps } from "@mui/material";

/**
 * 드롭다운 화살표가 있는 칩 버튼 컴포넌트
 *
 * @description
 * MUI Chip을 확장하여 우측에 드롭다운 화살표 아이콘이 추가된 버튼 형태의 칩입니다.
 * 아이콘이 제공되면 Avatar로 감싸서 표시하며, 주로 메뉴나 선택 옵션을 여는 용도로 사용됩니다.
 *
 * @example
 * ```tsx
 * // 텍스트만 있는 칩 버튼
 * <ChipButton
 *   label="카테고리 선택"
 *   onClick={() => handleMenuOpen()}
 * />
 *
 * // 아이콘과 함께 사용
 * <ChipButton
 *   label="필터"
 *   icon={<FilterIcon />}
 *   color="primary"
 *   onClick={() => handleFilterOpen()}
 * />
 * ```
 *
 * @param {ChipProps} props - MUI Chip의 모든 속성을 받을 수 있습니다
 * @returns {JSX.Element} 렌더링된 칩 버튼
 */
export default function ChipButton(props: ChipProps) {
	const { label, ...rest } = props;

	return (
		<Chip
			icon={
				props.icon ? (
					<Avatar
						sx={{
							backgroundColor: `${props.color}.dark`,
							width: "18px",
							height: "18px",
						}}
					>
						{props.icon}
					</Avatar>
				) : undefined
			}
			sx={{
				"& .MuiChip-label": {
					display: "flex",
					alignItems: "center",
				},
				// 우측에 드롭다운 화살표 생성
				"&::after": {
					content: '""',
					position: "absolute",
					right: "10px",
					top: "50%",
					transform: "translateY(-50%)",
					width: "0",
					height: "0",
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					borderTop: "4px solid currentColor",
				},
				position: "relative",
				paddingRight: "16px", // 화살표 공간 확보
			}}
			label={label}
			variant="filled"
			color={props.color}
			onClick={props.onClick}
			{...rest}
		/>
	);
}
