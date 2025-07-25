import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import SearchContainer from "../../components/container/SearchContainer";

/**
 * SearchContainer는 검색 기능을 위한 회색 배경 컨테이너 컴포넌트입니다.
 * 검색 폼이나 필터 영역에 사용됩니다.
 */
const meta = {
	title: "Components/Container/SearchContainer",
	component: SearchContainer,
	parameters: {
		layout: "padded",
		docs: {
			description: {
				component: "검색 폼이나 필터 영역을 위한 회색 배경 컨테이너입니다.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "컨테이너 내부에 표시될 콘텐츠",
			control: false,
		},
		sx: {
			description: "추가적인 스타일 속성",
			control: false,
		},
	},
} satisfies Meta<typeof SearchContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 검색 컨테이너
 */
export const Default: Story = {
	args: {
		children: (
			<Box padding={2}>
				<Typography>검색 영역 컨테이너입니다.</Typography>
			</Box>
		),
	},
};

/**
 * 간단한 검색 폼
 */
export const SimpleSearchForm: Story = {
	args: {
		sx: { padding: 2 },
		children: (
			<Box display="flex" gap={2} alignItems="center">
				<TextField
					placeholder="검색어를 입력하세요"
					variant="outlined"
					size="small"
					sx={{ flex: 1 }}
				/>
				<Button variant="contained" startIcon={<SearchIcon />} size="small">
					검색
				</Button>
			</Box>
		),
	},
};

/**
 * 고급 검색 폼
 */
export const AdvancedSearchForm: Story = {
	args: {
		sx: { padding: 2 },
		children: (
			<Box>
				<Typography variant="h6" gutterBottom>
					고급 검색
				</Typography>
				<Grid container spacing={2}>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField label="제목" variant="outlined" size="small" fullWidth />
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="작성자"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<FormControl size="small" fullWidth>
							<InputLabel>카테고리</InputLabel>
							<Select label="카테고리">
								<MenuItem value="all">전체</MenuItem>
								<MenuItem value="notice">공지사항</MenuItem>
								<MenuItem value="faq">FAQ</MenuItem>
								<MenuItem value="qna">Q&A</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField label="태그" variant="outlined" size="small" fullWidth />
					</Grid>
					<Grid size={12}>
						<Box display="flex" justifyContent="flex-end" gap={1}>
							<Button variant="outlined" size="small">
								초기화
							</Button>
							<Button
								variant="contained"
								size="small"
								startIcon={<SearchIcon />}
							>
								검색
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Box>
		),
	},
};

/**
 * 필터 영역
 */
export const FilterArea: Story = {
	args: {
		sx: { padding: 2 },
		children: (
			<Box>
				<Typography variant="h6" gutterBottom>
					<FilterListIcon sx={{ mr: 1, verticalAlign: "middle" }} />
					필터
				</Typography>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="진행중인 항목만"
					/>
					<FormControlLabel control={<Checkbox />} label="완료된 항목 포함" />
					<FormControlLabel control={<Checkbox />} label="중요 항목만" />
				</FormGroup>
			</Box>
		),
	},
};

/**
 * 검색과 필터가 결합된 형태
 */
export const SearchAndFilter: Story = {
	args: {
		sx: { padding: 2 },
		children: (
			<Grid container spacing={3}>
				<Grid size={{ xs: 12, md: 8 }}>
					<Typography variant="subtitle1" gutterBottom>
						검색
					</Typography>
					<Box display="flex" gap={2} alignItems="center">
						<TextField
							placeholder="키워드 검색"
							variant="outlined"
							size="small"
							sx={{ flex: 1 }}
						/>
						<FormControl size="small" sx={{ minWidth: 120 }}>
							<InputLabel>범위</InputLabel>
							<Select label="범위" defaultValue="all">
								<MenuItem value="all">전체</MenuItem>
								<MenuItem value="title">제목</MenuItem>
								<MenuItem value="content">내용</MenuItem>
							</Select>
						</FormControl>
						<Button variant="contained" startIcon={<SearchIcon />} size="small">
							검색
						</Button>
					</Box>
				</Grid>
				<Grid size={{ xs: 12, md: 4 }}>
					<Typography variant="subtitle1" gutterBottom>
						필터
					</Typography>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox size="small" />}
							label="최신순"
						/>
						<FormControlLabel
							control={<Checkbox size="small" />}
							label="인기순"
						/>
					</FormGroup>
				</Grid>
			</Grid>
		),
	},
};

/**
 * 날짜 범위 검색
 */
export const DateRangeSearch: Story = {
	args: {
		sx: { padding: 2 },
		children: (
			<Box>
				<Typography variant="h6" gutterBottom>
					기간별 검색
				</Typography>
				<Grid container spacing={2} alignItems="center">
					<Grid>
						<TextField
							label="시작일"
							type="date"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
						/>
					</Grid>
					<Grid>
						<Typography>~</Typography>
					</Grid>
					<Grid>
						<TextField
							label="종료일"
							type="date"
							variant="outlined"
							size="small"
							InputLabelProps={{ shrink: true }}
						/>
					</Grid>
					<Grid>
						<Button variant="outlined" size="small">
							오늘
						</Button>
					</Grid>
					<Grid>
						<Button variant="outlined" size="small">
							이번 주
						</Button>
					</Grid>
					<Grid>
						<Button variant="outlined" size="small">
							이번 달
						</Button>
					</Grid>
					<Grid>
						<Button variant="contained" size="small" startIcon={<SearchIcon />}>
							조회
						</Button>
					</Grid>
				</Grid>
			</Box>
		),
	},
};

/**
 * 컴팩트한 검색 바
 */
export const CompactSearchBar: Story = {
	args: {
		sx: { padding: 1.5 },
		children: (
			<Box display="flex" gap={1} alignItems="center">
				<SearchIcon color="action" />
				<TextField
					placeholder="빠른 검색..."
					variant="standard"
					size="small"
					sx={{ flex: 1 }}
				/>
				<Button size="small">검색</Button>
			</Box>
		),
	},
};
