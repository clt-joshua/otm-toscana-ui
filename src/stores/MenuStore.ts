import { action, makeObservable, observable } from "mobx";
import { menuData } from "../constants/menuData";

interface MenuItem {
	id: string;
	label: string;
	children?: MenuItem[];
}

class MenuStore {
	tabs: string[];
	selectedMenu: string;
	isNavExpanded: boolean;
	expandedMenus: string[];
	// 현재 선택된 화면의 전체 경로 (예: ["operation", "taskManager"])
	currentPagePath: string[];

	// 탭과 메뉴 경로 매핑
	private tabToPathMap: { [key: string]: string[] } = {
		"Task Manager": ["operation", "taskManager"],
		"Vessel & Voyage": ["vessel", "vesselVoyage"],
	};

	constructor() {
		this.tabs = ["Task Manager", "Vessel & Voyage"];
		this.selectedMenu = this.tabs[0];
		this.isNavExpanded = false;
		this.expandedMenus = [];
		// 기본적으로 Task Manager 페이지로 설정 (operation > taskManager)
		this.currentPagePath = this.tabToPathMap[this.selectedMenu] || [];
		makeObservable(this, {
			tabs: observable,
			selectedMenu: observable,
			isNavExpanded: observable,
			expandedMenus: observable,
			currentPagePath: observable,
			setMenu: action,
			closeTab: action,
			toggleNavExpansion: action,
			toggleMenu: action,
			expandTopLevelMenu: action,
			setCurrentPagePath: action,
			handleSideMenuClick: action,
			handleEmptySpaceClick: action,
			addTabIfNotExists: action,
		});
	}

	// 메뉴 경로에서 라벨을 찾는 함수 (재귀적으로 메뉴 데이터 탐색)
	private findMenuLabel(path: string[]): string {
		if (path.length === 0) return "";

		const findInMenuData = (
			items: MenuItem[],
			currentPath: string[],
			index: number,
		): string => {
			if (index >= currentPath.length) return "";

			const targetId = currentPath[index];
			const foundItem = items.find((item) => item.id === targetId);

			if (!foundItem) return "";

			// 마지막 경로인 경우 해당 라벨 반환
			if (index === currentPath.length - 1) {
				return foundItem.label;
			}

			// 자식이 있고 다음 경로가 있는 경우 재귀 호출
			if (foundItem.children) {
				return findInMenuData(foundItem.children, currentPath, index + 1);
			}

			return "";
		};

		return findInMenuData(menuData, path, 0);
	}

	// 탭이 없으면 추가하고 선택하는 함수
	addTabIfNotExists(path: string[]) {
		if (path.length === 0) return;

		const tabLabel = this.findMenuLabel(path);
		if (!tabLabel) return;

		// 이미 존재하는 탭인지 확인
		const existingTab = this.tabs.find((tab) => tab === tabLabel);

		if (!existingTab) {
			// 탭이 없으면 추가
			this.tabs.push(tabLabel);
			// tabToPathMap에도 추가
			this.tabToPathMap[tabLabel] = [...path];
		}

		// 해당 탭을 선택
		this.selectedMenu = tabLabel;
		this.currentPagePath = [...path];
	}

	setMenu(menu: string) {
		if (this.tabs?.includes(menu)) {
			this.selectedMenu = menu;
			// 탭 변경 시 currentPagePath도 함께 업데이트
			this.currentPagePath = this.tabToPathMap[menu] || [];
		}
	}

	closeTab(tab: string) {
		if (!this.tabs) return;
		const idx = this.tabs.indexOf(tab);
		if (idx > -1) {
			this.tabs.splice(idx, 1);
			if (this.selectedMenu === tab) {
				this.selectedMenu = this.tabs[0] || "";
			}
		}
	}

	setCurrentPagePath(path: string[]) {
		this.currentPagePath = path;
	}

	// 현재 화면의 전체 경로를 표시하는 함수
	showCurrentPagePath() {
		if (this.currentPagePath.length === 0) return;

		// 모든 메뉴 접기
		this.expandedMenus = [];

		// 현재 페이지 경로에 따라 메뉴들을 순차적으로 열기
		for (let i = 0; i < this.currentPagePath.length; i++) {
			this.expandedMenus.push(this.currentPagePath[i]);
		}
	}

	// Case 1: 현재 선택된 화면에 해당하는 Side Menu 클릭
	// Case 3: Side Menu의 빈 공간 클릭
	handleCurrentPageMenuClick() {
		if (!this.isNavExpanded) {
			this.isNavExpanded = true;
			// 다음 렌더 사이클에서 전체 경로 표시
			setTimeout(() => {
				this.showCurrentPagePath();
			}, 100);
		} else {
			this.showCurrentPagePath();
		}
	}

	// Case 2: 현재 선택된 화면과 다른 경로에 해당하는 Side Menu 클릭
	handleDifferentMenuClick(menuId: string) {
		if (!this.isNavExpanded) {
			this.isNavExpanded = true;
			// 다음 렌더 사이클에서 해당 메뉴의 2 Depth까지 표시
			setTimeout(() => {
				this.showMenuTo2Depth(menuId);
			}, 100);
		} else {
			this.showMenuTo2Depth(menuId);
		}
	}

	// 클릭한 메뉴의 2 Depth 메뉴까지 표시
	showMenuTo2Depth(menuId: string) {
		// 모든 메뉴 접기
		this.expandedMenus = [];

		// 클릭한 최상위 메뉴만 열기
		this.expandedMenus.push(menuId);
	}

	// Side Menu 클릭 처리 (Case 1, 2 구분)
	handleSideMenuClick(menuId: string) {
		const isCurrentPageMenu =
			this.currentPagePath.length > 0 && this.currentPagePath[0] === menuId;

		if (isCurrentPageMenu) {
			// Case 1: 현재 선택된 화면에 해당하는 Side Menu 클릭
			this.handleCurrentPageMenuClick();
		} else {
			// Case 2: 현재 선택된 화면과 다른 경로에 해당하는 Side Menu 클릭
			this.handleDifferentMenuClick(menuId);
		}
	}

	// Case 3: Side Menu의 빈 공간 클릭
	handleEmptySpaceClick() {
		if (!this.isNavExpanded) {
			this.isNavExpanded = true;
			// 다음 렌더 사이클에서 전체 경로 표시
			setTimeout(() => {
				this.showCurrentPagePath();
			}, 100);
		} else {
			this.showCurrentPagePath();
		}
	}

	toggleNavExpansion() {
		this.isNavExpanded = !this.isNavExpanded;

		// 네비게이션이 축소될 때 펼쳐진 메뉴 정보 초기화
		if (!this.isNavExpanded) {
			this.expandedMenus = [];
		}
	}

	toggleMenu(menuId: string) {
		const index = this.expandedMenus.indexOf(menuId);
		if (index > -1) {
			this.expandedMenus.splice(index, 1);
		} else {
			this.expandedMenus.push(menuId);
		}
	}

	expandTopLevelMenu(menuId: string) {
		const topLevelMenus = [
			"master",
			"document",
			"inventory",
			"truck",
			"vessel",
			"yard",
			"cfs",
			"operation",
			"equipment",
			"billing",
			"hr",
			"monitoring",
			"dashboard",
			"interface",
			"admin",
		];

		// 다른 최상위 메뉴들과 모든 하위 메뉴들을 닫기
		topLevelMenus.forEach((topMenu) => {
			if (topMenu !== menuId) {
				const index = this.expandedMenus.indexOf(topMenu);
				if (index > -1) {
					this.expandedMenus.splice(index, 1);
				}
			}
		});

		this.expandedMenus = this.expandedMenus.filter((id) =>
			topLevelMenus.includes(id),
		);

		this.toggleMenu(menuId);
	}

	isMenuExpanded(menuId: string): boolean {
		return this.expandedMenus.includes(menuId);
	}
}

const menuStore = new MenuStore();
export default menuStore;
