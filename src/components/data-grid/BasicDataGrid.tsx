import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import type { ReactNode } from "react";
import { useState } from "react";

export default function BasicDataGrid({
	header,
	data,
}: {
	header: {
		key: string;
		label: string;
		width?: string;
		align?: "left" | "center" | "right";
	}[];
	data: { [key: string]: string | number | ReactNode }[];
}) {
	// 선택된 셀 상태 관리
	const [selectedCell, setSelectedCell] = useState<{
		rowIdx: number;
		colKey: string;
	} | null>(null);

	const hashedKey = (row: { [key: string]: ReactNode }) => {
		return Object.values(row).join("-");
	};

	return (
		<TableContainer
			sx={{
				flexGrow: 1,
				width: "100%",
				height: "100%",
			}}
		>
			<Table
				stickyHeader
				size="small"
				sx={{
					minWidth: "max-content",
				}}
			>
				<TableHead>
					<TableRow>
						{header.map((col) => (
							<TableCell
								key={col.key}
								sx={{
									minWidth: "max-content",
									whiteSpace: "nowrap",
									borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
									backgroundColor: "white",
									position: "sticky",
									top: 0,
									zIndex: 1,
									...(col.width && { width: col.width }),
									...(col.align && { textAlign: col.align }),
								}}
							>
								{col.label}
								{header.length > 1 &&
									header[header.length - 1].key !== col.key && (
										<Box
											sx={{
												position: "absolute",
												right: 0,
												top: "50%",
												transform: "translateY(-50%)",
												height: "16px",
												width: "1px",
												backgroundColor: "rgba(0,0,0,0.12)",
											}}
										/>
									)}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, idx) => (
						<TableRow
							key={hashedKey(row)}
							sx={{
								...(selectedCell?.rowIdx === idx
									? { backgroundColor: "rgba(33, 150, 243, 0.08)" }
									: {}),
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.04)",
								},
							}}
						>
							{header.map((col) => (
								<TableCell
									key={col.key}
									onClick={() =>
										setSelectedCell({ rowIdx: idx, colKey: col.key })
									}
									sx={{
										minWidth: "max-content",
										whiteSpace: "nowrap",
										cursor: "pointer",
										padding: "4px 16px",
										borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
										...(selectedCell?.rowIdx === idx &&
										selectedCell?.colKey === col.key
											? {
													boxShadow: "inset 0 0 0 2px rgba(33, 150, 243, 1)",
												}
											: {}),
									}}
								>
									{row[col.key]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
