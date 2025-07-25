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

/**
 * 테이블 헤더 컬럼 정의
 */
interface BasicDataGridColumn {
  /** 데이터 객체의 키값 */
  key: string;
  /** 헤더에 표시될 라벨 */
  label: string;
  /** 컬럼 너비 (CSS width 값) */
  width?: string;
  /** 텍스트 정렬 */
  align?: "left" | "center" | "right";
}

/**
 * BasicDataGrid 컴포넌트의 속성 정의
 */
interface BasicDataGridProps {
  /** 테이블 헤더 컬럼 정의 */
  header: BasicDataGridColumn[];
  /** 테이블에 표시할 데이터 배열 */
  data: { [key: string]: string | number | ReactNode }[];
}

/**
 * 기본 데이터 그리드 컴포넌트
 *
 * @description
 * 테이블 형태로 데이터를 표시하는 기본 데이터 그리드 컴포넌트입니다.
 * 헤더가 고정되어 있고, 셀을 클릭하여 선택할 수 있으며,
 * 선택된 행과 셀에 하이라이트 효과가 적용됩니다.
 *
 * @example
 * ```tsx
 * const header = [
 *   { key: 'id', label: 'ID', width: '80px' },
 *   { key: 'name', label: '이름', width: '150px' },
 *   { key: 'status', label: '상태', align: 'center' }
 * ];
 *
 * const data = [
 *   { id: 1, name: '홍길동', status: '활성' },
 *   { id: 2, name: '김철수', status: '비활성' }
 * ];
 *
 * <BasicDataGrid header={header} data={data} />
 * ```
 *
 * @param {BasicDataGridProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 렌더링된 데이터 그리드
 */
export default function BasicDataGrid({ header, data }: BasicDataGridProps) {
  // 선택된 셀 상태 관리
  const [selectedCell, setSelectedCell] = useState<{
    rowIdx: number;
    colKey: string;
  } | null>(null);

  /**
   * 행 데이터를 기반으로 고유 키 생성
   * @param row - 행 데이터
   * @returns 생성된 고유 키
   */
  const hashedKey = (row: { [key: string]: ReactNode }) => {
    return Object.values(row).join("-");
  };

  return (
    <TableContainer
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "100%",
        borderRadius: 1,
      }}
    >
      <Table
        stickyHeader
        size="small"
        sx={{
          minWidth: "max-content",
        }}
      >
        {/* 테이블 헤더 */}
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
                {/* 컬럼 구분선 (마지막 컬럼 제외) */}
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
        {/* 테이블 바디 */}
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={hashedKey(row)}
              sx={{
                // 선택된 행 하이라이트
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
                    // 선택된 셀 하이라이트
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
