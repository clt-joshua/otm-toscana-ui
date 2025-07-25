# OTM Toscana UI

터미널 운영 관리 시스템(Terminal Operation Management)을 위한 React 기반 UI 프로젝트입니다.

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- pnpm 8.0.0 이상

### 설치

```bash
# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작
pnpm dev
```

### 빌드

```bash
# 프로덕션 빌드
pnpm build
```

### Storybook

```bash
# Storybook 개발 서버 실행
pnpm storybook

# Storybook 빌드
pnpm build-storybook
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── button/         # 버튼 컴포넌트
│   ├── chip/           # 칩 컴포넌트
│   ├── container/      # 컨테이너 컴포넌트
│   └── data-grid/      # 데이터 그리드 컴포넌트
├── pages/              # 페이지 컴포넌트
│   ├── taskManager/    # 작업 관리자 페이지
│   └── vesselVoyage/   # 선박 운항 페이지
├── stores/             # MobX 상태 관리
├── constants/          # 상수 및 설정 데이터
├── hooks/              # 커스텀 React 훅
└── assets/             # 이미지, 아이콘 등 정적 자원
```

## 🧩 주요 컴포넌트

### Button Components

- **CustomToggleButton**: 체크 아이콘이 포함된 토글 버튼
- **OutlinedIconButton**: 아이콘 표시용 작은 아웃라인 버튼

### Chip Components

- **BasicCustomChip**: 커스텀 색상을 지원하는 기본 칩
- **CheckableChip**: 체크 가능한 칩
- **CheckableCustomChip**: 커스텀 스타일의 체크 가능한 칩
- **ChipButton**: 버튼 기능이 있는 칩

### Container Components

- **BasicContainer**: 헤더와 콘텐츠 영역을 가진 기본 컨테이너
- **DetailContainer**: 상세 정보 표시용 컨테이너
- **SearchContainer**: 검색 기능이 있는 컨테이너

### DataGrid Components

- **BasicDataGrid**: 선택 가능한 셀과 고정 헤더를 가진 데이터 그리드

## 🎨 기술 스택

- **React 19**: UI 라이브러리
- **TypeScript**: 타입 안정성
- **Material-UI (MUI) v7**: UI 컴포넌트 라이브러리
- **MobX**: 상태 관리
- **Vite**: 빌드 도구
- **Storybook**: 컴포넌트 문서화 및 테스트

## 📖 컴포넌트 사용 예시

### CustomToggleButton

```tsx
import { CustomToggleButton } from '@/components';

// 단독 사용
<CustomToggleButton value="option1">
  Option 1
</CustomToggleButton>

// 그룹 내에서 사용
<ToggleButtonGroup value={selectedValue} exclusive>
  <CustomToggleButton value="option1" groupValue={selectedValue}>
    Option 1
  </CustomToggleButton>
  <CustomToggleButton value="option2" groupValue={selectedValue}>
    Option 2
  </CustomToggleButton>
</ToggleButtonGroup>
```

### BasicContainer

```tsx
import { BasicContainer } from '@/components';

<BasicContainer 
  title="사용자 목록"
  buttonSlot={
    <Button size="small">추가</Button>
  }
>
  <DataGrid />
</BasicContainer>
```

### BasicDataGrid

```tsx
import { BasicDataGrid } from '@/components';

const header = [
  { key: 'id', label: 'ID', width: '80px' },
  { key: 'name', label: '이름', width: '150px' },
  { key: 'status', label: '상태', align: 'center' }
];

const data = [
  { id: 1, name: '홍길동', status: '활성' },
  { id: 2, name: '김철수', status: '비활성' }
];

<BasicDataGrid header={header} data={data} />
```

## 🔧 개발 가이드

### 스타일링 규칙

- 일회성 스타일링에는 항상 `sx` prop을 사용
- 인라인 스타일은 사용하지 않음
- MUI 컴포넌트는 최상위 경로에서 임포트

```tsx
// ✅ 올바른 방법
import { Button } from '@mui/material';
<Button sx={{ marginTop: 2 }}>클릭</Button>

// ❌ 잘못된 방법
import Button from '@mui/material/Button';
<Button style={{ marginTop: 16 }}>클릭</Button>
```

### 컴포넌트 작성 규칙

1. 모든 컴포넌트에 JSDoc 주석 추가
2. Props 타입 정의를 인터페이스로 분리
3. 컴포넌트 파일과 동일한 이름의 스토리 파일 생성

## 📝 라이선스

이 프로젝트는 비공개 프로젝트입니다.
