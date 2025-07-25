import CheckIcon from "@mui/icons-material/Check";
import Avatar from "@mui/material/Avatar";
import Chip, { type ChipProps } from "@mui/material/Chip";

/**
 * CheckableChip 컴포넌트의 속성 정의
 */
interface CheckableChipProps extends ChipProps {
	/** 체크 상태 여부 */
	checked: boolean;
}

/**
 * 체크 상태를 표시하는 칩 컴포넌트
 *
 * @description
 * MUI Chip을 확장하여 체크 상태에 따라 체크 아이콘과 스타일이 변경되는 칩 컴포넌트입니다.
 * 체크되었을 때는 filled 스타일과 체크 아이콘이 표시되고, 체크되지 않았을 때는 outlined 스타일로 표시됩니다.
 *
 * @example
 * ```tsx
 * // 체크된 상태
 * <CheckableChip label="선택됨" checked={true} color="info" />
 *
 * // 체크되지 않은 상태
 * <CheckableChip label="선택안됨" checked={false} />
 *
 * // 클릭 이벤트와 함께
 * <CheckableChip
 *   label="옵션"
 *   checked={isChecked}
 *   onClick={() => setIsChecked(!isChecked)}
 * />
 * ```
 *
 * @param {CheckableChipProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 렌더링된 체크 가능한 칩
 */
export default function CheckableChip(props: CheckableChipProps) {
	const { checked, label, ...rest } = props;

	return (
		<Chip
			icon={
				checked ? (
					<Avatar
						sx={{
							backgroundColor: `${props.color}.dark`,
							width: "18px",
							height: "18px",
						}}
					>
						<CheckIcon sx={{ fontSize: "18px", color: "white" }} />
					</Avatar>
				) : undefined
			}
			sx={{
				"& .MuiChip-label": {
					display: "flex",
					alignItems: "center",
				},
			}}
			label={label}
			color={checked ? "info" : "default"}
			variant={checked ? "filled" : "outlined"}
			{...rest}
		/>
	);
}
