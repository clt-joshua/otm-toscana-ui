import NotFound from "./NotFound";
import TaskManager from "./TaskManager";

export const pageComponents: Record<string, React.ComponentType> = {
	"Task Manager": TaskManager,
	// 필요한 경우 다른 메뉴명과 컴포넌트 추가
};

export function getPageComponent(menuName: string): React.ComponentType {
	return pageComponents[menuName] || NotFound;
}
