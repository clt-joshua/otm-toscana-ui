import NotFound from "./NotFound";
import TaskManager from "./taskManager/TaskManager";
import VesselVoyage from "./vesselVoyage/VesselVoyage";

export const pageComponents: Record<string, React.ComponentType> = {
	"Task Manager": TaskManager,
	"Vessel & Voyage": VesselVoyage,
	// 필요한 경우 다른 메뉴명과 컴포넌트 추가
};

export function getPageComponent(menuName: string): React.ComponentType {
	return pageComponents[menuName] || NotFound;
}
