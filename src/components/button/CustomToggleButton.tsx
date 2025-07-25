import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";
import ToggleButton, {
	type ToggleButtonProps,
} from "@mui/material/ToggleButton";
import { forwardRef } from "react";

/**
 * CustomToggleButton 컴포넌트의 속성 정의
 * @interface CustomToggleButtonProps
 * @extends {ToggleButtonProps} - MUI ToggleButton의 모든 속성을 상속
 */
interface CustomToggleButtonProps extends ToggleButtonProps {
	/** 버튼 내부에 표시될 콘텐츠 */
	children: React.ReactNode;
	/** 토글 버튼 그룹의 현재 선택된 값 (그룹 내에서 사용 시) */
	groupValue?: string;
}

/**
 * 사용자 정의 토글 버튼 컴포넌트
 *
 * @description
 * MUI의 ToggleButton을 확장하여 선택 시 체크 아이콘을 표시하는 사용자 정의 토글 버튼입니다.
 * 단독으로 사용하거나 ToggleButtonGroup 내에서 사용할 수 있습니다.
 *
 * @example
 * ```tsx
 * // 단독 사용
 * <CustomToggleButton value="option1">Option 1</CustomToggleButton>
 *
 * // 그룹 내에서 사용
 * <ToggleButtonGroup value={selectedValue} exclusive>
 *   <CustomToggleButton value="option1" groupValue={selectedValue}>Option 1</CustomToggleButton>
 *   <CustomToggleButton value="option2" groupValue={selectedValue}>Option 2</CustomToggleButton>
 * </ToggleButtonGroup>
 * ```
 *
 * @param {CustomToggleButtonProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 렌더링된 토글 버튼
 */
const CustomToggleButton = forwardRef<
	HTMLButtonElement,
	CustomToggleButtonProps
>(({ children, value, groupValue, ...props }, ref) => {
	// groupValue가 있으면 그룹 내 선택 상태를 확인, 없으면 false
	const isSelected = groupValue ? groupValue === value : false;

	return (
		<ToggleButton
			ref={ref}
			value={value}
			sx={{
				color: "text.primary",
				"&.Mui-selected": {
					color: "text.primary",
					backgroundColor: "action.selected",
				},
				"&:hover": {
					backgroundColor: "action.hover",
				},
			}}
			{...props}
		>
			<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
				{/* 선택된 상태일 때만 체크 아이콘 표시 */}
				{isSelected && (
					<CheckIcon
						sx={{
							fontSize: 16,
							color: "primary.main",
						}}
					/>
				)}
				{children}
			</Box>
		</ToggleButton>
	);
});

CustomToggleButton.displayName = "CustomToggleButton";

export default CustomToggleButton;
